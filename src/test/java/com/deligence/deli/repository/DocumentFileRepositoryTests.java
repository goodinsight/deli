package com.deligence.deli.repository;

import com.deligence.deli.domain.DocumentFile;
import lombok.extern.log4j.Log4j2;
import org.junit.jupiter.api.Test;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.boot.test.context.SpringBootTest;

import java.util.stream.IntStream;

@SpringBootTest
@Log4j2
public class DocumentFileRepositoryTests {

    @Autowired
    private DocumentFileRepository documentFileRepository;

    @Test
    public void testInsert() {

        IntStream.rangeClosed(1,10).forEach(i -> {

            DocumentFile documentFile = DocumentFile.builder()
                    .documentFileNo(i)
                    .documentFileName("name"+i)
                    .documentFileType("type"+i)
                    .documentFilePath("path"+i)
                    .documentFileUuid("uuid"+i)
                    .build();

            log.info(documentFile);

            documentFileRepository.save(documentFile);
        });
    }


}
