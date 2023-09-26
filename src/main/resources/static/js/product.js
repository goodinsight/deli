

async function getCodeCount(productCode){

    const result = await axios.get(`/product/register/getCodeCount/${productCode}`)

    return result
}