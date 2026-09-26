package com.deligence.deli.service;

import com.deligence.deli.domain.FileDeletionTask;
import lombok.RequiredArgsConstructor;
import lombok.extern.log4j.Log4j2;
import org.springframework.beans.factory.annotation.Value;
import org.springframework.scheduling.annotation.Scheduled;
import org.springframework.stereotype.Service;
import org.springframework.transaction.PlatformTransactionManager;
import org.springframework.transaction.annotation.Transactional;
import org.springframework.transaction.support.TransactionTemplate;
import javax.persistence.*;
import java.nio.file.*;
import java.time.LocalDateTime;
import java.util.*;

@Service
@RequiredArgsConstructor
@Log4j2
public class FileCleanupService {
    @PersistenceContext private EntityManager em;
    private final PlatformTransactionManager transactionManager;
    @Value("${com.deligence.upload.path}") private String uploadPath;

    /** DB 변경과 같은 트랜잭션으로 큐를 저장한다. 롤백되면 삭제 예약도 취소된다. */
    @Transactional
    public void enqueueRemoved(Collection<String> before, Collection<String> after) {
        Set<String> retained = after == null ? Collections.emptySet() : new HashSet<>(after);
        for (String file : new HashSet<>(before)) {
            if (!retained.contains(file)) enqueue(file, LocalDateTime.now());
        }
    }

    @Transactional
    public boolean requestRemoval(String file) {
        validate(file);
        if (referenced(file)) return false;
        // 등록 폼 제출과 경합할 수 있는 임시 업로드는 유예 후 다시 참조 여부를 확인한다.
        enqueue(file, LocalDateTime.now().plusMinutes(10));
        return true;
    }

    private void enqueue(String file, LocalDateTime when) {
        validate(file);
        em.persist(new FileDeletionTask(file, when));
    }

    private void validate(String file) {
        if (file == null || !file.matches("[0-9a-fA-F-]{36}_.+") || file.contains("/") || file.contains("\\") || file.contains("\u0000"))
            throw new IllegalArgumentException("올바르지 않은 업로드 파일명입니다.");
    }

    private boolean referenced(String file) {
        return em.createQuery("select count(i) from BoardImage i where concat(i.uuid, '_', i.fileName) = :file", Long.class).setParameter("file", file).getSingleResult() > 0
            || em.createQuery("select count(i) from MaterialImage i where concat(i.materialUuid, '_', i.materialImgName) = :file", Long.class).setParameter("file", file).getSingleResult() > 0
            || em.createQuery("select count(i) from ProductImage i where concat(i.productImgUuid, '_', i.productImgName) = :file", Long.class).setParameter("file", file).getSingleResult() > 0;
    }

    @Scheduled(fixedDelayString = "${deli.file-cleanup-delay-ms:30000}", initialDelay = 30000)
    public void drain() {
        TransactionTemplate tx = new TransactionTemplate(transactionManager);
        List<Long> ids = tx.execute(status -> em.createQuery("select t.id from FileDeletionTask t where t.nextAttempt <= :now order by t.id", Long.class)
                .setParameter("now", LocalDateTime.now()).setMaxResults(50).getResultList());
        for (Long id : ids) tx.executeWithoutResult(status -> {
            FileDeletionTask task = em.find(FileDeletionTask.class, id, LockModeType.PESSIMISTIC_WRITE);
            if (task == null) return;
            try {
                String file = task.getFileName();
                validate(file);
                if (!referenced(file)) {
                    deleteFile(file);
                    deleteFile("s_" + file);
                }
                em.remove(task);
            } catch (Exception e) {
                task.retryLater();
                log.warn("첨부파일 정리 재시도 예정: task={}, reason={}", id, e.getMessage());
            }
        });
    }

    private void deleteFile(String name) throws java.io.IOException {
        Path root = Paths.get(uploadPath).toAbsolutePath().normalize();
        Path path = root.resolve(name).normalize();
        if (!root.equals(path.getParent()) || Files.isSymbolicLink(path))
            throw new IllegalArgumentException("업로드 폴더 밖의 파일은 삭제할 수 없습니다.");
        Files.deleteIfExists(path);
    }
}
