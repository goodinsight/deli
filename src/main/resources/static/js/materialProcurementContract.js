async function getPlanList({page, size}){

    const result = await axios.get(`/materialProcurementContract/register/selectPlan`, {params: {page, size}})

    return result.data
}

async function getPlan(planNo) {

    const result = await axios.get(`/materialProcurementContract/register/getPlan/${planNo}`)

    return result.data
}

async function getSupplierList({page, size}){

    const result = await axios.get(`/materialProcurementContract/register/selectSupplier`, {params: {page, size}})

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