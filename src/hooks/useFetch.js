import {useState, useEffect} from 'react'

const useFetch = (url, methodType, requestBody) => {
    const [data, setData] = useState(null)
    const [loading, setLoading] = useState(false)
    const [error, setError] = useState(null)

    useEffect(()=>{
        if(methodType === 'POST'){
            return {
                method : "POST",
                headers: { 'Content-Type': 'application/json; charset=utf-8', 'dataType': 'json', },
                body: JSON.stringify(requestBody)                
            }
        }
        setLoading(true)
        fetch(url,methodType)
        .then(res =>{
            setData(res.data)
        })
        .catch(err =>{
            setError(err)
        }).finally(() =>{
            setLoading(false)
        })
    },[url, methodType, requestBody])

    return { data, loading, error }
}

export default useFetch