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

async function removeFileToServer(materialUuid, materialImgName) {

    const response = await axios.delete(`/remove/${materialUuid}_${materialImgName}`)
// 주소 수정중
    return response.data
}