async function getContractList({page, size}){

    const result = await axios.get(`/productionPlanning/register/selectContract`, {params: {page, size}})

    return result.data
}

async function getContract(contractNo) {

    const result = await axios.get(`/productionPlanning/register/getContract/${contractNo}`)

    return result.data
}

async function getMrlList({page, size, type, keyword}){

    console.log("getMrlList ")
    console.log("type :" + type)
    console.log("keyword: " + keyword)

    const result = await axios.get(`/productionPlanning/register/selectMrl`, {params: {page, size, type, keyword}})

    return result.data
}

async function getMrl(mrlNo) {

    const result = await axios.get(`/productionPlanning/register/getMrl/${mrlNo}`)

    return result.data
}

async function getCodeCount(productionPlanCode){

    const result = await axios.get(`/productionPlanning/register/getCodeCount/${productionPlanCode}`)

    return result
}

async function changeState({productionPlanNo, state}){

    console.log("js - productionPlanNo : " + productionPlanNo)
    console.log("js - state : " + state)

    data = {
        productionPlanNo : productionPlanNo,
        state : state
    }

    return await axios.post(`/productContract/changeProductionState/`, data)

}

async function completePlan({productionPlanNo, productContractNo}){

    data = {
        productionPlanNo : productionPlanNo,
        productContractNo : productContractNo
    }

    console.log(data.productionPlanNo)
    console.log(data.productContractNo)

    await axios.post(`/productionPlanning/completePlan/`, data)

}