package com.deligence.deli.service;

import lombok.RequiredArgsConstructor;
import lombok.extern.log4j.Log4j2;
import org.modelmapper.ModelMapper;
import org.springframework.data.domain.Page;
import org.springframework.data.domain.Pageable;
import org.springframework.stereotype.Service;
import com.deligence.deli.domain.Board;
import com.deligence.deli.dto.*;
import com.deligence.deli.repository.BoardRepository;
import com.deligence.deli.repository.ReplyRepository;

import javax.transaction.Transactional;
import java.util.List;
import java.util.Optional;
import java.util.stream.Collectors;

@Service
@Log4j2
@RequiredArgsConstructor
@Transactional
public class BoardServiceImpl implements BoardService{

    private final ModelMapper modelMapper;

    private final BoardRepository boardRepository;
    private final FileCleanupService fileCleanup;
    private final ReplyRepository replyRepository;

    @Override
    public Long register(BoardDTO boardDTO) {
        if (boardDTO.getBno() != null) throw new IllegalArgumentException("등록 요청으로 기존 데이터를 덮어쓸 수 없습니다.");

//        Board board = modelMapper.map(boardDTO, Board.class);

        Board board = dtoToEntity(boardDTO);

        Long bno = boardRepository.save(board).getBno();

        return bno;
    }

    @Override
    public BoardDTO readOne(Long bno) {

        Optional<Board> result = boardRepository.findByIdWithImages(bno); //board_image까지 조인 처리

        Board board = result.orElseThrow();

        //BoardDTO boardDTO = modelMapper.map(board, BoardDTO.class);

        BoardDTO boardDTO = entityToDTO(board);

        return boardDTO;
    }

    @Override
    public void modify(BoardDTO boardDTO) {
        Optional<Board> result = boardRepository.findById(boardDTO.getBno());

        Board board = result.orElseThrow();

        board.change(boardDTO.getTitle(), boardDTO.getContent());

        //첨부파일의 처리
        List<String> previousFiles = board.getImageSet().stream()
                .map(i -> i.getUuid() + "_" + i.getFileName()).collect(Collectors.toList());
        fileCleanup.enqueueRemoved(previousFiles, boardDTO.getFileNames());
        java.util.Set<String> retained = boardDTO.getFileNames() == null ? java.util.Collections.emptySet() : new java.util.HashSet<>(boardDTO.getFileNames());
        board.getImageSet().removeIf(i -> !retained.contains(i.getUuid() + "_" + i.getFileName()));
        java.util.Set<String> existing = board.getImageSet().stream()
                .map(i -> i.getUuid() + "_" + i.getFileName()).collect(Collectors.toSet());
        for (String fileName : retained) {
            if (!existing.contains(fileName)) {
                String[] parts = fileName.split("_", 2);
                if (parts.length != 2) throw new IllegalArgumentException("올바르지 않은 첨부파일명입니다.");
                board.addImage(parts[0], parts[1]);
            }
        }

        boardRepository.save(board);
    }

    @Override
    public void remove(Long bno) {
        Board entity = boardRepository.findById(bno).orElseThrow();
        fileCleanup.enqueueRemoved(entity.getImageSet().stream().map(i -> i.getUuid() + "_" + i.getFileName()).collect(Collectors.toList()), java.util.Collections.emptyList());

        // 댓글은 게시글에 종속된다. FK를 해제한 뒤 이미지와 게시글을 함께 삭제한다.
        replyRepository.deleteByBoard_Bno(bno);
        replyRepository.flush();
        boardRepository.deleteById(bno);
    }

    @Override
    public PageResponseDTO<BoardDTO> list(PageRequestDTO pageRequestDTO) {

        String[] types = pageRequestDTO.getTypes();
        String keyword = pageRequestDTO.getKeyword();
        Pageable pageable = pageRequestDTO.getPageable("bno");

        Page<Board> result = boardRepository.searchAll(types, keyword, pageable);

        List<BoardDTO> dtoList = result.getContent().stream()
                .map(board -> modelMapper.map(board, BoardDTO.class))
                .collect(Collectors.toList());

        return PageResponseDTO.<BoardDTO>withAll()
                .pageRequestDTO(pageRequestDTO)
                .dtoList(dtoList)
                .total((int)result.getTotalElements())
                .build();
    }

    @Override
    public PageResponseDTO<BoardListReplyCountDTO> listWithReplyCount(PageRequestDTO pageRequestDTO) {

        String[] types = pageRequestDTO.getTypes();
        String keyword = pageRequestDTO.getKeyword();
        Pageable pageable = pageRequestDTO.getPageable("bno");

        Page<BoardListReplyCountDTO> result = boardRepository.searchWithReplyCount(types, keyword, pageable);

        return PageResponseDTO.<BoardListReplyCountDTO>withAll()
                .pageRequestDTO(pageRequestDTO)
                .dtoList(result.getContent())
                .total((int)result.getTotalElements())
                .build();
    }

    @Override
    public PageResponseDTO<BoardListAllDTO> listWithAll(PageRequestDTO pageRequestDTO) {

        String[] types = pageRequestDTO.getTypes();
        String keyword = pageRequestDTO.getKeyword();
        Pageable pageable = pageRequestDTO.getPageable("bno");

        Page<BoardListAllDTO> result = boardRepository.searchWithAll(types, keyword, pageable);

        return PageResponseDTO.<BoardListAllDTO>withAll()
                .pageRequestDTO(pageRequestDTO)
                .dtoList(result.getContent())
                .total((int) result.getTotalElements())
                .build();

    }
}
