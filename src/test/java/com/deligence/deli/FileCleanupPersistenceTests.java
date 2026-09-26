package com.deligence.deli;

import com.deligence.deli.domain.*;
import com.deligence.deli.dto.BoardDTO;
import com.deligence.deli.service.*;
import org.junit.jupiter.api.*;
import org.junit.jupiter.api.io.TempDir;
import org.modelmapper.ModelMapper;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.boot.test.autoconfigure.orm.jpa.DataJpaTest;
import org.springframework.boot.test.context.TestConfiguration;
import org.springframework.context.annotation.*;
import org.springframework.test.util.ReflectionTestUtils;
import org.springframework.transaction.*;
import org.springframework.transaction.annotation.*;
import org.springframework.transaction.support.TransactionTemplate;
import javax.persistence.*;
import java.nio.file.*;
import java.util.*;
import static org.assertj.core.api.Assertions.*;

@DataJpaTest(properties={"spring.jpa.hibernate.ddl-auto=create-drop", "spring.jpa.database-platform=org.hibernate.dialect.H2Dialect", "spring.jpa.show-sql=false"})
@Import({FileCleanupService.class, BoardServiceImpl.class, FileCleanupPersistenceTests.Config.class})
@Transactional(propagation=Propagation.NOT_SUPPORTED)
class FileCleanupPersistenceTests {
    @TestConfiguration static class Config {
        @Bean ModelMapper mapper() { return new ModelMapper(); }
    }
    @Autowired FileCleanupService cleanup;
    @Autowired BoardServiceImpl boards;
    @Autowired PlatformTransactionManager manager;
    @PersistenceContext EntityManager em;
    @TempDir Path folder;
    private String uuid, file;

    @BeforeEach void setup() throws Exception {
        ReflectionTestUtils.setField(cleanup,"uploadPath",folder.toString());
        uuid=UUID.randomUUID().toString(); file=uuid+"_file_with_underscores.png";
        Files.writeString(folder.resolve(file),"image");
        Files.writeString(folder.resolve("s_"+file),"thumbnail");
    }
    private TransactionTemplate tx() { return new TransactionTemplate(manager); }
    private Long board() { return tx().execute(s -> {
        Board b=Board.builder().title("test").content("content").writer("tester").build();
        b.addImage(uuid,"file_with_underscores.png"); em.persist(b); return b.getBno();
    }); }

    @Test void deletionRunsOnlyAfterCommitAndRemovesBothFiles() {
        Long id=board();
        boards.remove(id);
        assertThat(Files.exists(folder.resolve(file))).isTrue();
        cleanup.drain();
        assertThat(Files.exists(folder.resolve(file))).isFalse();
        assertThat(Files.exists(folder.resolve("s_"+file))).isFalse();
    }

    @Test void rollbackKeepsAttachmentAndDoesNotQueueDeletion() {
        Long id=board();
        assertThatThrownBy(() -> tx().executeWithoutResult(s -> { boards.remove(id); throw new IllegalStateException("rollback"); })).isInstanceOf(IllegalStateException.class);
        cleanup.drain();
        assertThat(Files.exists(folder.resolve(file))).isTrue();
        assertThat(tx().<Board>execute(s -> em.find(Board.class,id))).isNotNull();
        assertThat(tx().<Long>execute(s -> em.createQuery("select count(t) from FileDeletionTask t where t.fileName=:file",Long.class).setParameter("file",file).getSingleResult())).isZero();
    }

    @Test void attachedFileCannotBeDeletedBeforeSavingForm() {
        board();
        assertThat(cleanup.requestRemoval(file)).isFalse();
        cleanup.drain();
        assertThat(Files.exists(folder.resolve(file))).isTrue();
        assertThatThrownBy(() -> cleanup.requestRemoval("../secret")).isInstanceOf(IllegalArgumentException.class);
    }

    @Test void retainingSameImageDuringEditDoesNotRecreateOrDeleteIt() {
        Long id=board();
        boards.modify(BoardDTO.builder().bno(id).title("edited").content("edited").fileNames(List.of(file)).build());
        cleanup.drain();
        assertThat(Files.exists(folder.resolve(file))).isTrue();
        assertThat(tx().<String>execute(s -> em.find(Board.class,id).getImageSet().iterator().next().getFileName())).isEqualTo("file_with_underscores.png");
    }

    @Test void failedDeletionRemainsQueuedForRetry() throws Exception {
        Files.delete(folder.resolve(file));
        Files.createDirectory(folder.resolve(file));
        Files.writeString(folder.resolve(file).resolve("child"),"prevent directory deletion");
        cleanup.enqueueRemoved(List.of(file),Collections.emptyList());
        cleanup.drain();
        assertThat(tx().<Integer>execute(s -> em.createQuery("select t.attempts from FileDeletionTask t where t.fileName=:file",Integer.class).setParameter("file",file).getSingleResult())).isEqualTo(1);
    }
}
