import React, { useState, useEffect } from 'react'
import axios from 'axios'
import Filter from './Filter'
import Display from './Display';


const App = () => {
  const [countries, setCountries] = useState([]);
  const [search,setSearch]= useState('') 
  const [displayCountries,setDisplayCountries]= useState([])
  const [filterView,setFilterView] = useState(false)
  const [valCountry,setValCountry] = useState('')
  
  useEffect(() => {
    axios 
      .get('https://restcountries.com/v3.1/all')
      .then(response => 
        {
        setCountries(response.data)
          })
  }, [])

  const countryview =(country) =>
  {
    setFilterView(true)
    setValCountry(country)
  }
  
  const handlesearchChange = (event) =>{
    setSearch(event.target.value);
    filtering();
    setFilterView(false)
  }

  const filtering =()=> {
    var filteredCountries = countries.filter((val)=>val.name.common.toLocaleLowerCase().includes(search.toLocaleLowerCase()));
    setDisplayCountries(filteredCountries)
  }  
  
  return (
    <div>
       Find countries <input value= {search}  onChange = {handlesearchChange} />
       <Filter displayCountries= {displayCountries} filterView = {filterView} countryview ={countryview} /> 
       < Display filterView ={filterView} valCountry = {valCountry}/>

    </div>
  );
};

export default App;
