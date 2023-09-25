async function getList({orderNo, page, size, goLast}){

    const result = await axios.get(`/progressInspection/list/${orderNo}`, {params: {page, size}})

    console.log(result.data)

    if(goLast){

        const total = result.data.total
        const lastPage = parseInt(Math.ceil(total/size))
        return getList({orderNo:orderNo, page:lastPage, size:size})

    }

    return result.data
}

async function addProgressInspection(piObj) {
    const response = await axios.post(`/progressInspection/`, piObj)
    return response.data
}

async function getProgressInspection(progressInspectionNo) {
    const response = await axios.get(`/progressInspection/${progressInspectionNo}`)

    return response.data
}

async function modifyProgressInspection(piObj){
    const resonse = await axios.put(`/progressInspection/${piObj.progressInspectionNo}`, piObj)
    return resonse.data
}

async function removeProgressInspection(progressInspectionNo) {
    const response = await axios.delete(`/progressInspection/${progressInspectionNo}`)
    return response.data
}


async function completePI(orderNo, state) {
    const response = await axios.post(`/progressInspection/completePI/${orderNo}&${state}`)
    return response.data()
}

async function getOS(orderNo){
    return await axios.get(`/progressInspection/getOrderState/${orderNo}`)
}