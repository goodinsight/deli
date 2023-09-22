async function getMaterialList({page, size}){

    const result = await axios.get(`/materialProcurementContract/register/selectMaterial`, {params: {page, size}})

    return result.data
}

async function getMaterial(materialsNo) {

    const result = await axios.get(`/materialProcurementContract/register/getMaterial/${materialsNo}`)

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