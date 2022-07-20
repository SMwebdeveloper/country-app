import React,{useState, useEffect} from 'react'

export  function useFetch(url) {
 const [data ,setData] = useState(null)
 const [isPending, setIsPending] = useState(false)
 const [error, setError] = useState(null)

 useEffect(() =>{
    const fetchReq = async () => {
        try{
            setIsPending(true)
            const res = await fetch(url)
            if (!res.ok) {
                throw new Error(res.statusText)
            }
            const data = await res.json()
            setData(data)
            setIsPending(false)
            setError(null)
        }catch(err){
            console.log(err.message);
            setError(err.message)
            setIsPending(false)
        }
    }
    fetchReq()
   
}, [url])
return {data, isPending, error}
}