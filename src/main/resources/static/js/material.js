

async function getCodeCount(materialCode){

    const result = await axios.get(`/material/register/getCodeCount/${materialCode}`)

    return result
}