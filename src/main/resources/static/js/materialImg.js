async function uploadToServer (formObj) {

    console.log("upload to server.............")
    console.log(formObj)

    const response = await axios({
       method: 'post',
        url: '/upload',
        data: formObj,
        headers: {
           'Content-Type': 'multipart/form-data',
        },
    });

    return response.data
}

async function removeFileToServer(material_uuid, material_img_name) {

    const response = await axios.delete(`/remove/${material_uuid}_${material_img_name}`)
// 주소 수정중
    return response.data
}