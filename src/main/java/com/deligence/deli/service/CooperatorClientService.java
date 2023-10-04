package com.deligence.deli.service;

import com.deligence.deli.dto.CooperatorClientDTO;
import com.deligence.deli.dto.PageRequestDTO;
import com.deligence.deli.dto.PageResponseDTO;

public interface CooperatorClientService {

    int register(CooperatorClientDTO cooperatorClientDTO); //등록

    CooperatorClientDTO read(int clientNo); //조회

    void modify(CooperatorClientDTO cooperatorClientDTO); //수정

    void delete(int clientNo);

    PageResponseDTO<CooperatorClientDTO> list(PageRequestDTO pageRequestDTO); //목록 전체조회 + 검색
}
