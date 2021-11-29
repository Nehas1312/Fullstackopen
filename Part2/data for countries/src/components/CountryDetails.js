import React from 'react'

const CountryDetails = (props) =>{

    var country = props.country
    var langs = []
    for ( let x in country.languages) {
      langs.push(country.languages[x])
    }

    return(
      <div>
        <h1>{country.name.common}</h1>
        <p> Capital :- {country.capital} </p>
        <h3>Languages</h3>
        <div> {langs.map(lan => <li key= {lan}>{lan}</li> )} </div>
        <p />
        <img src={country.flags.png} width="100" height="100" 
        alt = 'loading'/>
      </div>
      
    ) 

}
export default CountryDetails