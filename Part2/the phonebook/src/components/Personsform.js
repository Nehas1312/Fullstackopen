import React from "react";

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

export default Personform  