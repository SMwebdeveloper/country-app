import React, { useEffect, useState } from 'react'
import Country from '../country/Country'
import Search from '../search/Search'

import Loading from '../loading/Loading'

const Home = () => {
  const url = 'https://restcountries.com/v2/all'
  const [countries,setCountries] = useState([])
  const [isLoading, setIsLoading] = useState(true)
  const [error,setError] = useState('')

  const getAllCountries = async () => {
      try {
          const res = await fetch(url)

          if (!res.ok) {
              throw new Error('Somthing went wrong')
          }

          const data = await res.json()
          console.log(data);
          setCountries(data)
          setIsLoading(false)


      } catch (error) {
          setIsLoading(false)
          setError(error.message)
      }
  }

  const countryNameFetch = async (countryName) => {
      try {
          const res = await fetch(`https://restcountries.com/v2/name/${countryName}`)

      if (!res.ok) {
          throw new Error('Not found any country')
      }

      const data = await res.json()
          setCountries(data)
          setIsLoading(false)
      
      } catch (error) {
          setIsLoading(false)
          setError(error.message)
      }
  }

  const getCountryByRegion = async (regionName) => {
      try {
          const res = await fetch(`https://restcountries.com/v2/region/${regionName}`)

          if (!res.ok) {
              throw new Error('Field......')
          }

          const data = await res.json()
          setCountries(data)
          setIsLoading(false)


      } catch (error) {
          setIsLoading(false)
          setError(error.message)
      }
  }

  useEffect(() => {
      getAllCountries()
  },[])
  return (
    <div className='container'>
        <Search countryNameFetch={countryNameFetch} getCountryByRegion={getCountryByRegion}/>
        <Country countries={countries} isLoading={isLoading} error={error}/>
        
    </div>
  )
}

export default Home