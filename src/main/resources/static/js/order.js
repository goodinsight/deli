async function getPlanList({page, size}){

    const result = await axios.get(`/order/register/selectPlan`, {params: {page, size}})

    return result.data
}

async function getPlan(planNo) {
    const response = await axios.get(`/order/register/getPlan/${planNo}`)
    return response.data
}