package com.deligence.deli.service;

import com.deligence.deli.domain.Products;
import com.deligence.deli.dto.PageRequestDTO;
import com.deligence.deli.dto.PageResponseDTO;
import com.deligence.deli.dto.ProductsDTO;
import com.deligence.deli.repository.ProductsRepository;
import lombok.RequiredArgsConstructor;
import lombok.extern.log4j.Log4j2;
import org.modelmapper.ModelMapper;
import org.springframework.data.domain.Page;
import org.springframework.data.domain.Pageable;
import org.springframework.stereotype.Service;

import javax.transaction.Transactional;
import java.util.List;
import java.util.Optional;
import java.util.stream.Collectors;

@Service
@Log4j2
@RequiredArgsConstructor
@Transactional
public class ProductsServiceImpl implements ProductsService {

    private final ModelMapper modelMapper;

    private final ProductsRepository productsRepository;
    private final FileCleanupService fileCleanup;
    private final BusinessRecordService records;


    @Override
    public int register(ProductsDTO productsDTO) {
        if (productsDTO.getProductNo() != 0) throw new IllegalArgumentException("등록 요청으로 기존 데이터를 덮어쓸 수 없습니다."); //등록 작업처리

//        Products products = modelMapper.map(productsDTO, Products.class);

        Products products = dtoToEntity(productsDTO);

        int productNo = productsRepository.save(products).getProductNo();

        return productNo;
    }

    @Override
    public ProductsDTO readOne(int productNo) { //조회 작업처리

        //productimage까지 조인 처리되는 findByIdWithImages()를 이용
        Optional<Products> result = productsRepository.findByIdWithImages(productNo);

        Products products = result.orElseThrow();

        ProductsDTO productsDTO = entityToDTO(products);

        return productsDTO;

//        ProductsDTO productsDTO = null;
//
//        try {
//            Optional<Products> result = productsRepository.findByIdWithImages(productNo);
//            Products products = result.orElseThrow();
//            productsDTO = entityToDTO(products);
//        } catch (IndexOutOfBoundsException e){
//            log.info("이미지가 없습니다.");
//            Optional<Products> result = productsRepository.findById(productNo);
//            Products products = result.orElseThrow();
//            productsDTO = modelMapper.map(products, ProductsDTO.class);
//        }
//            return productsDTO;
    }

    @Override
    public void modify(ProductsDTO productsDTO) { // 수정 작업처리

        Products products = records.lock(Products.class, productsDTO.getProductNo());

//        products.change(productsDTO.getProductName(), productsDTO.getProductType(), productsDTO.getProductContent());

        products.change(productsDTO);
        records.syncProduct(products);

        //첨부파일 처리
        List<String> previousFiles = products.getImageSet().stream()
                .map(i -> i.getProductImgUuid() + "_" + i.getProductImgName()).collect(Collectors.toList());
        fileCleanup.enqueueRemoved(previousFiles, productsDTO.getFileNames());
        java.util.Set<String> retained = productsDTO.getFileNames() == null ? java.util.Collections.emptySet() : new java.util.HashSet<>(productsDTO.getFileNames());
        products.getImageSet().removeIf(i -> !retained.contains(i.getProductImgUuid() + "_" + i.getProductImgName()));
        java.util.Set<String> existing = products.getImageSet().stream()
                .map(i -> i.getProductImgUuid() + "_" + i.getProductImgName()).collect(Collectors.toSet());
        for (String fileName : retained) {
            if (!existing.contains(fileName)) {
                String[] parts = fileName.split("_", 2);
                if (parts.length != 2) throw new IllegalArgumentException("올바르지 않은 첨부파일명입니다.");
                products.addImage(parts[0], parts[1]);
            }
        }

        productsRepository.save(products);
    }

    @Override
    public void delete(int productNo) {
        Products entity = productsRepository.findById(productNo).orElseThrow();
        fileCleanup.enqueueRemoved(entity.getImageSet().stream().map(i -> i.getProductImgUuid() + "_" + i.getProductImgName()).collect(Collectors.toList()), java.util.Collections.emptyList());
 //삭제 작업처리

        productsRepository.deleteById(productNo);
    }

    @Override
    public PageResponseDTO<ProductsDTO> list(PageRequestDTO pageRequestDTO) { //전체조회 & 검색기능

        String[] types = pageRequestDTO.getTypes();
        String keyword = pageRequestDTO.getKeyword();
        Pageable pageble = pageRequestDTO.getPageable("productNo");

        Page<Products> result = productsRepository.searchAll(types, keyword, pageble);

        List<ProductsDTO> dtoList = result.getContent().stream()
                .map(products -> entityToDTO(products))
                .collect(Collectors.toList());

        return PageResponseDTO.<ProductsDTO>withAll()
                .pageRequestDTO(pageRequestDTO)
                .dtoList(dtoList)
                .total((int) result.getTotalElements())
                .build();
    }

    @Override
    public int getCodeCount(String code) { //자재코드생성

        int num = productsRepository.getCodeCount(code);

        return num;
    }


    @Override
    public PageResponseDTO<ProductsDTO> listWithAll(PageRequestDTO pageRequestDTO){     //게시글 이미지 숫자처리

//    public PageResponseDTO<ProductListAllDTO> listWithAll(PageRequestDTO pageRequestDTO){     //게시글 이미지 숫자처리

        String[] types = pageRequestDTO.getTypes();
        String keyword = pageRequestDTO.getKeyword();
        Pageable pageable = pageRequestDTO.getPageable("ProductNo");

        Page<ProductsDTO> result = productsRepository.searchWithAll(types, keyword,pageable);

        return PageResponseDTO.<ProductsDTO>withAll()
                .pageRequestDTO(pageRequestDTO)
                .dtoList(result.getContent())
                .total((int) result.getTotalElements())
                .build();

//        Page<ProductListAllDTO> result = productsRepository.searchWithAll(types, keyword,pageable);
//
//        return PageResponseDTO.<ProductListAllDTO>withAll()
//                .pageRequestDTO(pageRequestDTO)
//                .dtoList(result.getContent())
//                .total((int) result.getTotalElements())
//                .build();
    }

//    public int registerImg(ProductsDTO productsDTO) { //이미지 등록
//        Products products = dtoToEntity(productsDTO);
//        int productNo = productsRepository.save(products).getProductNo();
//        return productNo;
//    }
//
//    public ProductsDTO readOneImg(int productNo) { //이미지조회
//
//        Optional<Products> result = productsRepository.findByIdWithImages(productNo); //board_image까지 조인 처리
//
//        Products products = result.orElseThrow();
//
//        ProductsDTO productsDTO = entityToDTO(products);
//
//        return productsDTO;
//    }

}
