async function uploadToServer (formObj) {

    console.log("upload to server.............")
    console.log(formObj)

    const response = await axios({
       method: 'post',
        url: '/uploadMaterial',
        data: formObj,
        headers: {
           'Content-Type': 'multipart/form-data',
        },
    });

    return response.data
}

async function removeFileToServer(materialUuid, materialImgName) {


    const response = await axios.delete(`/removeMaterial/${materialUuid}_${materialImgName}`)

    return response.data
}