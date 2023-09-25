package com.deligence.deli.dto.upload;

import lombok.AllArgsConstructor;
import lombok.Builder;
import lombok.Data;
import lombok.NoArgsConstructor;

@Data
@Builder
@AllArgsConstructor
@NoArgsConstructor
public class UploadMaterialResultDTO {

    private String materialUuid;

    private String materialImgName;

    private boolean img;

    public String getLink() {

        if(img) {
            return "s_"+materialUuid + "_" + materialImgName;
        }else {
            return materialUuid + "_" + materialImgName;
        }

    }

}
