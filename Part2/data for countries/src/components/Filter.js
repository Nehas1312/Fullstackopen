import React from 'react'
import CountryDetails from './CountryDetails'


const Filter = (props) => {
  var NoOfCountries = props.displayCountries.length
  if (NoOfCountries > 10 ){
    return(
      <div>
        to many results,please specify ..... 
      </div>
    )
  } 
 else if(NoOfCountries > 1 ) {
    return(
      props.displayCountries.map(val=>
        <div>
          <li  key={val.name.common} >
             {val.name.common}
             <button onClick = {() => props.countryview(val)}> show </button>
          </li>
        </div>
      ) 
    )
  }
  else if (NoOfCountries === 1 ){
    return(
      <CountryDetails country = {props.displayCountries[0]}/>
    )
  }
  else {
    return(
      <div>
        No countries with present filter...
      </div>
    )
  } 
}

export default Filter