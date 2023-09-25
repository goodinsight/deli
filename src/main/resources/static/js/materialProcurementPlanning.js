async function getPlanList({page, size}){

    const result = await axios.get(`/materialProcurementPlanning/register/selectPlan`, {params: {page, size}})

    return result.data

}


async function getPlan(planNo) {

    const result = await axios.get(`/materialProcurementPlanning/register/getPlan/${planNo}`)

    return result.data

}

async function getMaterialList({page, size}) {

    const result = await axios.get(`/materialProcurementPlanning/register/selectMaterial`, {params: {page, size}})

    return result.data
}

async function getMaterial(materialsNo) {

    const result = await axios.get(`/materialProcurementPlanning/register/getMaterial/${materialsNo}` )

    return result.data
}

async function getCodeCount(materialProcurementPlanCode){

    const result = await axios.get(`/materialProcurementPlanning/register/getCodeCount/${materialProcurementPlanCode}`)

    return result
}