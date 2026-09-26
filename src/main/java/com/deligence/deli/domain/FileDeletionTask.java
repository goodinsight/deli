package com.deligence.deli.domain;

import lombok.*;
import javax.persistence.*;
import java.time.LocalDateTime;

@Entity
@Getter
@NoArgsConstructor
public class FileDeletionTask {
    @Id @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Long id;
    @Column(nullable = false, length = 512)
    private String fileName;
    private int attempts;
    private LocalDateTime nextAttempt;

    public FileDeletionTask(String fileName, LocalDateTime nextAttempt) {
        this.fileName = fileName;
        this.nextAttempt = nextAttempt;
    }

    public void retryLater() {
        attempts++;
        nextAttempt = LocalDateTime.now().plusMinutes(Math.min(60, attempts));
    }
}
