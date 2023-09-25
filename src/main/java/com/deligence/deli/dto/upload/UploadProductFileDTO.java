package com.deligence.deli.dto.upload;

import lombok.Data;
import org.springframework.web.multipart.MultipartFile;

import java.util.List;

@Data
public class UploadProductFileDTO {

    private List<MultipartFile> files;

}
