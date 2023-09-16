package com.deligence.deli;

import org.springframework.boot.SpringApplication;
import org.springframework.boot.autoconfigure.SpringBootApplication;
import org.springframework.data.jpa.repository.config.EnableJpaAuditing;

@SpringBootApplication
@EnableJpaAuditing
public class DeliApplication {

    public static void main(String[] args) {
        SpringApplication.run(DeliApplication.class, args);
    }

}
