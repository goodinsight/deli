package com.deligence.deli;

import com.deligence.deli.domain.Board;
import com.deligence.deli.domain.Reply;
import com.deligence.deli.repository.BoardRepository;
import com.deligence.deli.repository.ReplyRepository;
import com.deligence.deli.service.BoardServiceImpl;
import org.junit.jupiter.api.Test;
import org.modelmapper.ModelMapper;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.boot.test.autoconfigure.orm.jpa.DataJpaTest;

import javax.persistence.EntityManager;

import static org.assertj.core.api.Assertions.assertThat;

@DataJpaTest(properties = {
        "spring.jpa.hibernate.ddl-auto=create-drop",
        "spring.jpa.database-platform=org.hibernate.dialect.H2Dialect"
})
class CascadePersistenceTests {
    @Autowired BoardRepository boards;
    @Autowired ReplyRepository replies;
    @Autowired EntityManager entityManager;

    @Test
    void deletingBoardRemovesItsRepliesAndImagesButKeepsOtherBoards() {
        Board target = Board.builder().title("target").content("content").writer("tester").build();
        target.addImage("target-image", "image.png");
        boards.saveAndFlush(target);
        replies.saveAndFlush(Reply.builder().board(target).replyText("reply").replyer("tester").build());
        Board retained = boards.saveAndFlush(Board.builder()
                .title("keep").content("content").writer("tester").build());
        Reply retainedReply = replies.saveAndFlush(Reply.builder()
                .board(retained).replyText("keep").replyer("tester").build());

        new BoardServiceImpl(new ModelMapper(), boards, replies).remove(target.getBno());
        entityManager.flush();
        entityManager.clear();

        assertThat(boards.existsById(target.getBno())).isFalse();
        assertThat(boards.existsById(retained.getBno())).isTrue();
        assertThat(replies.findAll()).extracting(Reply::getRno).containsExactly(retainedReply.getRno());
        assertThat(entityManager.createQuery("select count(i) from BoardImage i", Long.class)
                .getSingleResult()).isZero();
    }
}
