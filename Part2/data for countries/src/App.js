import React, { useState, useEffect } from 'react'
import axios from 'axios'

   
const Filter = (props) =>{
  var noOfCountries = props.displayCountries.length
  if(noOfCountries > 1 || noOfCountries === 0) {
    return(
      props.displayCountries.map(val=><li key={val.name.common}>{val.name.common}</li>) 
   )
  }
  else {
    var country = props.displayCountries[0]
    var langs = []
    for ( let x in country.languages) {
      langs.push(country.languages[x])
    }

    return(
      <div>
        <h1>{country.name.common}</h1>
        <p> Capital :- {country.capital[0]} </p>
        <h3>Languages</h3>
        <div> {langs.map(lan => <li key= {lan}>{lan}</li> )} </div>
        <p />
        <img src={country.flags.png} width="50" height="50" 
        alt = ''/>
      </div>
      
    )
  }
}


const App = () => {
  const [countries, setCountries] = useState([]);
  const [search,setSearch]= useState('') 
  const [displayCountries,setDisplayCountries]= useState([])
  const [displayMessage,setDisplayMessage]= useState('')
  
  
  useEffect(() => {
    //console.log('effect')
    axios 
      .get('https://restcountries.com/v3.1/all')
      .then(response => {
       // console.log('response')
        setCountries(response.data)
        

      })
  }, [])
  
  // console.log('render', countries.length, 'countries')
  // console.log('sds',displayCountries.length )
  const handlesearchChange = (event) =>{
    setSearch(event.target.value);
    filtering();
  }

  const filtering =()=> {
    var filteredCountries = countries.filter((val)=>val.name.common.toLocaleLowerCase().includes(search.toLocaleLowerCase()));
   if (filteredCountries.length < 10  ){
    setDisplayCountries(filteredCountries)
    setDisplayMessage('')
   }
   else if (search.length=== 1 ){
     setDisplayCountries([])
     setDisplayMessage('')  
   }
   else {setDisplayMessage('more input please')
          setDisplayCountries([])
          }
  }  
  
  return (
    <div>
       Find countries <input value= {search}  onChange = {handlesearchChange} />
       <Filter displayCountries= {displayCountries}  />  
      <h3> {displayMessage}</h3>
    </div>
  );
};

export default App;
