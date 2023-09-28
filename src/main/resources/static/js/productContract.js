async function getProductList({page, size}){

    const result = await axios.get(`/productContract/register/selectProduct`, {params: {page, size}})

    return result.data
}

async function getProduct(productsNo) {

    const result = await axios.get(`/productContract/register/getProduct/${productsNo}`)

    return result.data
}


async function getClientList({page, size, type, keyword}){

    const result = await axios.get(`/productContract/register/selectClient`, {params: {page, size, type, keyword}})

    return result.data
}

async function getClient(clientsNo) {

    const result = await axios.get(`/productContract/register/getClient/${clientsNo}`)

    return result.data
}

async function getCodeCount(productContractCode){

    const result = await axios.get(`/productContract/register/getCodeCount/${productContractCode}`)

    return result
}


async function changeState({productContractNo, state}){

    console.log("js - productContractNo : " + productContractNo)
    console.log("js - state : " + state)

    data = {
        productContractNo : productContractNo,
        state : state
    }

    return await axios.post(`/cooperatorClient/changeClientState/`, data)

}