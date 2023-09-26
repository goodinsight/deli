async function uploadToServer (formObj) {

    console.log("upload to server.............")
    console.log(formObj)

    const response = await axios({
       method: 'post',
        url: '/uploadProduct',
        data: formObj,
        headers: {
           'Content-Type': 'multipart/form-data',
        },
    });

    return response.data
}

async function removeFileToServer(productImgUuid, productImgName) {


    const response = await axios.delete(`/removeProduct/${productImgUuid}_${productImgName}`)

    return response.data
}