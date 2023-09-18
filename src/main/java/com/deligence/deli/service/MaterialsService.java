package com.deligence.deli.service;

import com.deligence.deli.dto.MaterialsDTO;

public interface MaterialsService {

    int register(MaterialsDTO materialsDTO); //등록작업처리
    MaterialsDTO detail(int materialNo); //조회작업처리
    void modify(MaterialsDTO materialsDTO); //수정작업처리
    void delete(int materialsNo); //삭제작업처리


}
