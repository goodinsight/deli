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

async function changeState({materialProcurementPlanNo, state}){

    console.log("js - materialProcurementPlanNo : " + materialProcurementPlanNo)
    console.log("js - state : " + state)

    data = {
        materialProcurementPlanNo : materialProcurementPlanNo,
        state : state
    }

    return await axios.post(`/#/changeMaterialProcurementState/`, data)

}

async function completeProcurementPlanning({materialProcurementPlanNo, materialProcurementContractNo}){
//조달 계약 완료 -> 조달 계획 완료
    data = {
        materialProcurementPlanNo : materialProcurementPlanNo,
        // materialProcurementContractNo : materialProcurementContractNo
    }

    console.log(data.materialProcurementPlanNo)
    // console.log(data.materialProcurementContractNo)

    await axios.post(`/materialProcurementPlanning/completeProcurementPlanning/`, data)

}