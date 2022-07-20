import React from 'react'
import { useLocation, useParams } from 'react-router-dom'
import { useFetch } from '../../hooks/useFetch'
import Search from '../search/Search'

const SearchPage = () => {
    // const useParams = useLocation().search
    // const queryString = new URLSearchParams(useParams)
    // const getParams = queryString.get('q')

    const {count} = useParams()
    const url = 'https://restcountries.com/v2/name/all?q=' + count
    const {data, isPending, error} = useFetch(url)
    console.log(data);
  return (

    <div className='container'>
        <Search/>   
        SearchPage</div>
  )
}

export default SearchPage