import axios from "axios"

//404
const onNotFound = (err) => {
    throw new Error(`Status Code Error, ${err.status}, ${err.msg}`)
}

//500
// const onServerError = (err) =>{
//     throw new Error(`Status Code Error, ${err.status}, ${err.msg}`)
// }

const onCatchProcess = (data) => {
    if(data.status === 404) onNotFound(data)
    // else if(data.status === 500) onServerError(data)
    return data
}

const axiosWrapper = (method, url, data) => {
    return axios({
        method,
        url,
        data,
    })
    .then((res)=>res.data)
    .then(data => onCatchProcess(data))
    .catch((err) =>console.log(err))
}

export default axiosWrapper