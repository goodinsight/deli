async function getPlanList({page, size}){

    const result = await axios.get(`/order/register/selectPlan`, {params: {page, size}})

    return result.data
}

async function getPlan(planNo) {

    const result = await axios.get(`/order/register/getPlan/${planNo}`)

    return result.data
}


async function getContractList({page, size}){

    const result = await axios.get(`/order/register/selectContract`, {params: {page, size}})

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

    const map = {
        orderNo : orderNo,
        materialProcurementPlanNo : materialProcurementPlanNo
    }

    console.log("map create :" + map.)

    await axios.post(`/order/completeOrder/`, map)

}