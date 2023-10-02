async function getPlanList({page, size}){

    const result = await axios.get(`/materialProcurementContract/register/selectPlan`, {params: {page, size}})

    return result.data
}

async function getPlan(planNo) {

    const result = await axios.get(`/materialProcurementContract/register/getPlan/${planNo}`)

    return result.data
}

async function getSupplierList({page, size, type, keyword}){

    const result = await axios.get(`/materialProcurementContract/register/selectSupplier`, {params: {page, size, type, keyword}})

    return result.data
}

async function getSupplier(suppliersNo) {

    const result = await axios.get(`/materialProcurementContract/register/getSupplier/${suppliersNo}`)

    return result.data
}

async function getCodeCount(materialProcurementContractCode){

    const result = await axios.get(`/materialProcurementContract/register/getCodeCount/${materialProcurementContractCode}`)

    return result
}

async function completeMaterialProcurementContract({materialProcurementContractNo, productionPlanNo}){
/*발주진행중 -> 자재조달단계 , 조달완료(발주완료) -> 자재입고단계*/
    data = {
        materialProcurementContractNo : materialProcurementContractNo,
        productionPlanNo : productionPlanNo
    }

    console.log(data.materialProcurementContractNo)
    console.log(data.productionPlanNo)

    await axios.post(`/materialProcurementContract/completeMaterialProcurementContract/`, data)

}


async function changeState({materialProcurementContractNo, state}){

    console.log("js - materialProcurementContractNo : " + materialProcurementContractNo)
    console.log("js - state : " + state)

    data = {
        materialProcurementContractNo : materialProcurementContractNo,
        state : state
    }

    return await axios.post(`/cooperatorSupplier/changeMaterialProcurementContractState/`, data)
/*자재조달계약상태를 사용하는 테이블에서 상태 변경*/

}

