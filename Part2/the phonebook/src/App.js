import React, { useState } from "react";

const first_persons = [
  { name: "Arto Hellas", id: 1 },
  {
    name: "Nehas",
    id: 2,
  },
  {
    name: "Hardhik",
    id: 3,
  },
];

const App = () => {
  const [persons, setPersons] = useState(first_persons);
  const [newName, setNewName] = useState("");
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
      };
      setPersons(persons.concat(newPerson));
    }
    setNewName("");

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

  return (
    <div>
      <h2>Phonebook</h2>
      <form onSubmit={addName}>
        <div>
          Name: <input value={newName} onChange={handleNameChange} />
        </div>
        <div>
          <button type="submit">add</button>
        </div>
      </form>
      <h2>Numbers</h2>
      {persons.map((person) => (
        <li key={person.id}> {person.name}</li>
      ))}
    </div>
  );
};

export default App;
