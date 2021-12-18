import React from "react";
import noteServices from '../services/notes';

const Persons = (props)=>{
  const clicked = (props)=>{
    if (window.confirm(`Do you want to delete ${props.persons.name}?`)){
    noteServices
        .deleteName(props.persons.id)
      .then(response => response.data)
    }
  }
    return(
      props.persons.filter((val)=>{
        if (props.search===''){
          return val
        }
        else if (val.name.toLocaleLowerCase().includes(props.search.toLocaleLowerCase())){
          return val
        }
      } ).map((person) => (
        <div>
       <li key={person.id}> {person.name} : {person.number}</li>
        <button  onClick={() => clicked}>  delete</button>
        </div>
      ))
    )
  }
 
export default Persons  