async function getProductList({page, size, type, keyword}){

    const result = await axios.get(`/materialRequirementsList/register/productList`, {params: {page, size, type, keyword}})

    return result.data
}

async function getProduct(productsNo) {

    const result = await axios.get(`/materialRequirementsList/register/getProduct/${productsNo}`)

    return result.data
}

async function getMaterialList({page, size, type, keyword}){

    const result = await axios.get(`/materialRequirementsList/register/materialList`, {params: {page, size, type, keyword}})

    return result.data
}

async function getMaterial(materialsNo) {

    const result = await axios.get(`/materialRequirementsList/register/getMaterial/${materialsNo}`)

    return result.data
}
