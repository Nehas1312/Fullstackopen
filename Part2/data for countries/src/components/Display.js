import React from 'react'
import CountryDetails from './CountryDetails'


const Display = (props) =>{
    if (props.filterView)
    return(
        < CountryDetails country ={props.valCountry}/> 
    )
    else
    return(
        <div>

        </div>
    )
}

export default Display

