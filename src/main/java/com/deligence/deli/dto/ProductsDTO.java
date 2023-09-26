package com.deligence.deli.dto;

import lombok.AllArgsConstructor;
import lombok.Builder;
import lombok.Data;
import lombok.NoArgsConstructor;

import javax.validation.constraints.NotEmpty;
import java.time.LocalDateTime;
import java.util.List;

@Data
@Builder
@AllArgsConstructor
@NoArgsConstructor
public class ProductsDTO {

    private int productNo; //제품일련번호

    @NotEmpty
    private String productCode; //제품코드

    @NotEmpty
    private String productName; //제품명

    @NotEmpty
    private String productType; //제품분류

    private String productContent; //제품설명

    private LocalDateTime regDate; //등록일

    private LocalDateTime modDate; //수정일
    
    //private List<ProductImageDTO> productImage;   //자재 이미지ProductsDTO

    private List<String> fileNames; //첨부파일 이름들


//    public ProductsDTO(String productName, String productType, String productContent){
//        LocalDate date = LocalDate.now();
//        DateTimeFormatter dateTimeFormatter = DateTimeFormatter.ofPattern("yyyyMMdd");
//        this.productName = productName;
//        this.productType = productType;
//        this.productContent = productContent;
//        //
//        this.productCode = "Product" + productType + date.format(dateTimeFormatter); // 생성시 등록순서 증가하게 추가해야됨
//    }

}
