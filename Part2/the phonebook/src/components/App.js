import React, { useState, useEffect } from 'react'
import Filter from './Filter';
import Personform from './Personsform';
import Persons from './Persons';
import noteServices from '../services/notes'

;



const App = () => {
  const [persons, setPersons] = useState([]);
  const [newName, setNewName] = useState("");
  const [newnumber,setNewnumber]= useState('')
  const [search,setSearch]= useState('')
  
  useEffect(() => {
    console.log('effect')
    noteServices
      .getAll()
      .then(response => {
        //console.log('promise fulfilled')
        setPersons(response)
      })
  }, [])
 // console.log('render', persons.length, 'notes')
  
  const addName = (event) => {
    event.preventDefault();

    if (persons.findIndex((person) => person.name === newName) !== -1) {
      if (window.confirm(` ${newName} is aldready added to phonebook,replace old number with new number?`)){
        const editPersonid = (
          persons.find(person=> person.name === newName)
        );
        const editPerson = {
          name : newName,
          number : newnumber,
          id : editPersonid.id
        }
        console.log(editPerson)
        noteServices
        .editName(editPersonid.id,editPerson)
        .then(response => {setPersons(persons.map(person => person.id !== editPersonid.id ? person : editPerson))})
      };
    } else if (newName === "") {
      window.alert(` Name is Empty `);
    } else {
      const newPerson = {
        name: newName,
        id: persons.length + 1,
        number: newnumber
      };
      noteServices
      .postData(newPerson)
      .then(response =>{
          setPersons(persons.concat(response))
          setNewName('')
      });
    }
    setNewName("");
    setNewnumber('')
    
   

  };



  const handleNameChange = (event) => {
    //console.log(event.target.value)
    setNewName(event.target.value);
  };
  const handleNumberChange = (event)=>{
    setNewnumber(event.target.value)
  }
  const handlesearchChange = (event) => {
    //console.log(event.target.value)
    setSearch(event.target.value);}

  return (
    <div>
   <h1>Phonebook</h1>
      <Filter searchval= {search} searchChange= {handlesearchChange}  />
   <h2>add a new contact </h2>
      <Personform addName={addName} newName={newName} NameChange={handleNameChange} 
                  newnumber={newnumber} NumberChange={handleNumberChange}  />
   <h3>Numbers</h3>
      <Persons  persons={persons} search={search} setperson={setPersons}/>
      
    </div>
  );
};

export default App;
