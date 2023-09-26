async function getMaterialList({page, size}){

    const result = await axios.get(`/materialInventory/materialOutRegister/selectMaterial`, {params: {page, size}})

    return result.data


}


async function getMaterial(materialsNo) {

    const result = await axios.get(`/materialInventory/materialOutRegister/getMaterial/${materialsNo}`)

    return result.data


}

async function printMaterialsStock({page, size}) {

    const result = await axios.get(`/materialInventory/materialOutRegister/selectMaterialStockModal`, {params: {page, size}})

    return result.data
}

async function getMaterial(materialsNo) {

    const result = await axios.get(`/materialInventory/materialOutRegister/getMaterial/${materialsNo}` )

    return result.data
}
