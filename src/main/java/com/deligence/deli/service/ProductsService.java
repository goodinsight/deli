package com.deligence.deli.service;

import com.deligence.deli.domain.Products;
import com.deligence.deli.dto.PageRequestDTO;
import com.deligence.deli.dto.PageResponseDTO;
import com.deligence.deli.dto.ProductsDTO;

import java.util.List;
import java.util.stream.Collectors;

public interface ProductsService {

    int register(ProductsDTO productsDTO); //등록작업처리
    ProductsDTO readOne(int productNo); //조회작업처리
    void modify(ProductsDTO productsDTO); //수정작업처리
    void delete(int productNo); //삭제작업처리
    PageResponseDTO<ProductsDTO> list(PageRequestDTO pageRequestDTO); //전체조회 & 검색기능

    int getCodeCount(String productCode); //제품코드생성


    PageResponseDTO<ProductsDTO> listWithAll(PageRequestDTO pageRequestDTO);

//    PageResponseDTO<ProductListAllDTO> listWithAll(PageRequestDTO pageRequestDTO);    //게시글 이미지 숫자처리


    default Products dtoToEntity(ProductsDTO productsDTO) { //이미지등록

        Products products = Products.builder()
                .productNo(productsDTO.getProductNo())
                .productCode(productsDTO.getProductCode())
                .productName(productsDTO.getProductName())
                .productType(productsDTO.getProductType())
                .productContent(productsDTO.getProductContent())
                .build();

        if(productsDTO.getFileNames() != null) {
            productsDTO.getFileNames().forEach(fileName -> {

                String[] arr = fileName.split("_");
                products.addImage(arr[0], arr[1]);
            });
//            String tmp = productsDTO.getFileNames();
//            String[] arr = tmp.split("_");
//            products.addImage(arr[0], arr[1]);


        }
        return products;
    }

    default ProductsDTO entityToDTO(Products products) { //이미지조회

        ProductsDTO productsDTO = ProductsDTO.builder()
                .productNo(products.getProductNo())
                .productCode(products.getProductCode())
                .productName(products.getProductName())
                .productType(products.getProductType())
                .productContent(products.getProductContent())
                .regDate(products.getRegDate())
                .modDate(products.getModDate())
                .build();

            List<String> fileNames = products.getImageSet().stream().sorted().map(productImage ->

                    productImage.getProductImgUuid() + "_" + productImage.getProductImgName()

            ).collect(Collectors.toList());

        productsDTO.setFileNames(fileNames);

        return productsDTO;

    }

}
