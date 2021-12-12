import React from "react";

const Persons = (props)=>{
    return(
      props.persons.filter((val)=>{
        if (props.search===''){
          return val
        }
        else if (val.name.toLocaleLowerCase().includes(props.search.toLocaleLowerCase())){
          return val
        }
      } ).map((person) => (
       <li key={person.id}> {person.name} : {person.number}</li> 
      ))
    )
  }
 
export default Persons  