import { useState, useEffect } from 'react'
import axios from "axios"



const useAxios = (url) => {
  const [response, setResponse] = useState(null)
  const [loading, setLoading] = useState(false)
  const [error, setError] = useState('')


  axios.defaults.baseURL = 'https://api.coingecko.com/api/v3'
  
  const fetchData = async (url) => {
    try {
      setLoading(true)
      const result = await axios.get(url)
      setResponse(result.data)
    } catch (error) {
      setError(error)
    } finally {
      setLoading(false)
    }
  }

  useEffect(() => {
    fetchData(url)
  }, [])

  
  return { response, loading, error }
}

export default useAxios