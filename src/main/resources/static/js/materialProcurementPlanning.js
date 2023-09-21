async function getProductionPlanList({page, size}){
/*
    const result = await axios.get(`/materialProcurementPlanning/register/selectProductionPlan`, {params: {page, size}})

    return result.data
*/
    return null;
}


async function getProductionPlan(productionPlanNo) {
/*
    const response = await axios.get(`/materialProcurementPlanning/register/getProductionPlan/${productionPlanNo}`)

    return response.data

 */
    return null;
}

async function getMaterialList({page, size}) {

    const result = await axios.get(`/materialProcurementPlanning/register/selectMaterial`, {params: {page, size}})

    return result.data
}

async function getMaterial(materialsNo) {

    const response = await axios.get(`/materialProcurementPlanning/register/getMaterial/${materialsNo}` )

    return response.data
}