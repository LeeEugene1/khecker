export const isBlank = (value) => {
    if(value === '' || value === undefined || value === null){
        return false
    }
    return true
}

export const fetchPost = async(url, requestBody) =>{
    return await fetch(url, {
            method : "POST",
            headers: { 'Content-Type': 'application/json; charset=utf-8', 'dataType': 'json', },
            body: JSON.stringify(requestBody)
    })
}

//fetchGet

//fetchPut

//fetchDelete

//통신 상태 처리
export const checkStatusAndParse = response => {
 if(response.error === true) throw new Error(`Status Code Error, ${response.status}`)
 return response.json()
}