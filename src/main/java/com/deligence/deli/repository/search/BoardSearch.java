package com.deligence.deli.repository.search;

import org.springframework.data.domain.Page;
import org.springframework.data.domain.Pageable;
import com.deligence.deli.domain.Board;
import com.deligence.deli.dto.BoardListAllDTO;
import com.deligence.deli.dto.BoardListReplyCountDTO;

public interface BoardSearch {

    Page<Board> search1(Pageable pageable);

    Page<Board> searchAll(String[] types, String keyword, Pageable pageable);

    Page<BoardListReplyCountDTO> searchWithReplyCount(String[] types,
                                                      String keyword,
                                                      Pageable pageable);

    Page<BoardListAllDTO> searchWithAll(String[] types,
                                        String keyword,
                                        Pageable pageable);

}
