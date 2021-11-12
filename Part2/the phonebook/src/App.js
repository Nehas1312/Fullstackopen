import React, { useState, useEffect } from 'react'
import axios from 'axios'

const first_persons = [
  { name: "Arto Hellas", 
  id: 1 ,
  number : 12243434
},
  {
    name: "Nehas",
    id: 2,
    number : 2222,
  },
  {
    name: "Hardhik",
    id: 3,
    number : 33333333,
  },
];
const Filter = (props) => {
  return(
    <div>
    Filter shown with: <input value ={props.searchval} onChange={props.searchChange}/>
    </div>
  )
}
const Personform = (props)=>{
  return(
    <form onSubmit={props.addName}>
    <div>
      Name: <input value={props.newName} onChange={props.NameChange} />
      </div>
      <div>
        Number : <input value={props.newnumber}  onChange={props.NumberChange} />
    </div>
    <div>
      <button type="submit">add</button>
    </div>
  </form>
  )
}
const Persons = (props)=>{
  return(
    props.persons.filter((val)=>{
      if (props.search==''){
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
const App = () => {
  const [persons, setPersons] = useState([]);
  const [newName, setNewName] = useState("");
  const [newnumber,setNewnumber]= useState('')
  const [search,setSearch]= useState('')
  
  useEffect(() => {
    console.log('effect')
    axios
      .get('http://localhost:3001/persons')
      .then(response => {
        console.log('promise fulfilled')
        setPersons(response.data)
      })
  }, [])
  console.log('render', persons.length, 'notes')
  
  const addName = (event) => {
    event.preventDefault();

    if (persons.findIndex((person) => person.name === newName) !== -1) {
      window.alert(` ${newName} is aldready added to phonebook`);
    } else if (newName === "") {
      window.alert(` Name is Empty `);
    } else {
      const newPerson = {
        name: newName,
        id: persons.length + 1,
        number: newnumber
      };
      setPersons(persons.concat(newPerson));
    }
    setNewName("");
    setNewnumber('')
    

    // for (var i =0;i<persons.length;i++)
    // {
    //   if (newName===persons[i].name)
    //   {
    //   window.alert(` ${newName} is aldready added to the phonebook`);
    //  setPersons(persons);
    //  setNewName('');
    //  break;
    //   }
    //   else if(newName==='')
    //   {
    //     setPersons(persons)
    //   }
    //   else{

    //     const nameobject={
    //       name :newName,
    //       id:persons.length +1,
    //     }

    //     setPersons(persons.concat(nameobject))
    //      setNewName('')
    //     //console.log(persons)
    //   }
    // }
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
      <Persons  persons={persons} search={search}/>
      
    </div>
  );
};

export default App;
