import React from "react";



const Filter = (props) => {
    return(
      <div>
      Filter shown with: <input value ={props.searchval} onChange={props.searchChange}/>
      </div>
    )
  }


 export default Filter 