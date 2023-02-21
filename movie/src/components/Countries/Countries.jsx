import React, {useState, useEffect} from 'react'
import axios from 'axios'
import CountryItem from '..//CountryItem'


const Countries = async () => {
    const [countries, setCountries]=useState([])
    const getCountries = await axios.get(
      'https://restcountries.eu/rest/v2/all')
        .then((response)=>{
            setCountries(response.data)
        })
    
    useEffect(() => {
        getCountries()
    }, [])

  return (
    <div>
    <div className="search__form">
    <input
      type="text"
      className="search__input"
      placeholder="Search film by word..."
    />
  </div>

  <div className='countries'>
    {countries.map((country, index) => {
        return(
            <CountryItem country={country} key={index}/>
         )

        })}

  </div>

  </div>

  )}

  export default Countries;
