import React from "react";
import noteServices from '../services/notes';


const Button =(props)=>{

  const clicked = (event)=>{
    event.preventDefault()
    if (window.confirm(`Do you want to delete ${props.per.name}?`)){
    noteServices
        .deleteName(props.per.id)
      .then(response => 
        props.setperson(props.persons.filter(p => p.name != props.per.name ))
      )
    }
  }
  return(
      <div>
        <button onClick={clicked}>delete</button>

      </div>


  )

}


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
        <div>
       <li key={person.id}> {person.name} : {person.number}</li>
        <Button per={person} setperson={props.setperson} persons={props.persons} />
        </div>
      ))
    )
  }
 
export default Persons  