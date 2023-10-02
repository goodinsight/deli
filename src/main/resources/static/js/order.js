async function getPlanList({page, size}){

    const result = await axios.get(`/order/register/planList`, {params: {page, size}})

    return result.data
}

async function getPlan(planNo) {

    const result = await axios.get(`/order/register/getPlan/${planNo}`)

    return result.data
}


async function getContractList({page, size, type, keyword}){

    const result = await axios.get(`/order/register/contractList`, {params: {page, size, type, keyword}})

    return result.data
}

async function getContract(contractNo) {

    const result = await axios.get(`/order/register/getContract/${contractNo}`)

    return result.data
}

async function getCodeCount(orderCode){

    const result = await axios.get(`/order/register/getCodeCount/${orderCode}`)

    return result
}

async function completeOrder({orderNo, materialProcurementPlanNo}){

    data = {
        orderNo : orderNo,
        materialProcurementPlanNo : materialProcurementPlanNo
    }

    console.log(data.orderNo)
    console.log(data.materialProcurementPlanNo)

    await axios.post(`/order/completeOrder/`, data)

}

async function changeState({orderNo, state}){

    console.log("js - orderNo : " + orderNo)
    console.log("js - state : " + state)

    data = {
        orderNo : orderNo,
        state : state
    }

    return await axios.post(`/materialInventory/changeOrderState/`, data)

}


async function getMaterialList({page, size}){

    const result = await axios.get(`/order/chart/materialList`, {params: {page, size}})

    return result.data
}

async function getMaterial(materialNo) {

    const result = await axios.get(`/order/chart/getMaterial/${materialNo}`)

    return result.data
}
