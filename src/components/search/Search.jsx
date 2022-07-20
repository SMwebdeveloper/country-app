import React, { useState } from 'react'
import './Search.css'
import {FaSearch} from 'react-icons/fa'
import { useTheme } from '../../hooks/useTheme'
import {useFetch} from '../../hooks/useFetch'
import Country from '../country/Country'
const Search = ({countryNameFetch, getCountryByRegion}) => {
  const {mode} = useTheme()
  const [count, setCount] = useState('')
  
  
  const handleSubmit =  (e) =>{
    e.preventDefault()

    countryNameFetch(count)
  }

  const handleChange = (e) => {
    const regionName = e.target.value

    getCountryByRegion(regionName)
  }
  
  return (
    <>
        <div className={`search ${mode}`}>
            <form onSubmit={handleSubmit}>
                <FaSearch className='search-loop'/>
                <input type="search" name='search' id='search' placeholder='Search for a country'  value={count} onChange={(e)=>{
                  setCount(e.target.value)
                }}/>
            </form>
            
            <select name="select" id="select" onChange={handleChange}>
                <option value="Filter by region">Filter by region</option>
                <option value="Africa">Africa</option>
                <option value="Americas">Americas</option>
                <option value="Asia">Asia</option>
                <option value="Europe">Europe</option>
                <option value="Oceania">Oceania</option>
            </select>
        </div>
         
    </>
  )
}

export default Search