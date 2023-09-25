package com.deligence.deli.dto.upload;

import lombok.AllArgsConstructor;
import lombok.Builder;
import lombok.Data;
import lombok.NoArgsConstructor;

@Data
@Builder
@AllArgsConstructor
@NoArgsConstructor
public class UploadProductResultDTO {

    private String productImgUuid;

    private String productImgName;

    private boolean img;

    public String getLink() {

        if(img) {
            return "s_"+productImgUuid + "_" + productImgName;
        }else {
            return productImgUuid + "_" + productImgName;
        }

    }

}
