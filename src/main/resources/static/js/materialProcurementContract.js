async function getCodeCount(materialProcurementContractCode){

    const result = await axios.get(`/materialProcurementContract/register/getCodeCount/${materialProcurementContractCode}`)

    return result
}