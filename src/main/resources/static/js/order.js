async function getPlanList({page, size}){

    const result = await axios.get(`/order/register/selectPlan`, {params: {page, size}})

    return result.data
}

async function getPlan(planNo) {

    const response = await axios.get(`/order/register/getPlan/${planNo}`)

    return response.data
}


async function getContractList({page, size}){

    //const result = await axios.get(`/order/register/selectContract`, {params: {page, size}})

    //return result.data
    return null;
}

async function getContract(contractNo) {

    //const response = await axios.get(`/order/register/getContract/${contractNo}`)

    //return response.data
    return null;
}

async function getCodeCount(orderCode){

    const result = await axios.get(`/order/register/getCodeCount/${orderCode}`)

    return result
}