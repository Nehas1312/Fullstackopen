import React, { useState, useEffect } from 'react'
import axios from 'axios'

const CountryDetails = (props) =>{

  
  var country = props.country

  const [weatherData,setWeatherData] = useState({})

  var langs = []
  for ( let x in country.languages) {
    langs.push(country.languages[x])
  }

  const api_key = process.env.REACT_APP_API_KEY

  useEffect(() => {
    axios 
      .get(`http://api.openweathermap.org/data/2.5/weather?q=${country.capital}&appid=${api_key}`)
      .then(response => 
        {
        setWeatherData(response.data)
          })
  }, [api_key,country.capital])


    return(
      <div>
        <h1>{country.name.common}</h1>
        <p> Capital :- {country.capital} </p>
        <h3>Languages</h3>
        <div> {langs.map(lan => <li key= {lan}>{lan}</li> )} </div>
        <p />
        <img src={country.flags.png} width="100" height="100" 
        alt = 'loading'/>
        <h2> Weather in {country.capital}</h2>
        <div>
         <li> <b>Base</b>:    {weatherData.base} </li> 
          <li><b>ID</b> : {weatherData.id}  F</li>
        </div>
      </div>
      
    ) 

}
export default CountryDetails