import React, { useState } from 'react'
import courses from './course'
const App = () => {
  
  const Course =(props)=>{
  //  for (var i= 0;i<props.course.length;i++){
  //    for (var j = 0; j< props.course[i].parts.length;j++){
  //      return(
  //                <div> <h1>{props.course[i].name} </h1>
  //                   <p> {props.course.parts[j].name} - {props.course.parts[j].exercises} </p> </div>
      
  //      )
  //    }
  //  }

    return( 
  <div>
  <h1> Web development curriculum </h1> 
    {props.course.map(val => <p key = {val.id} > <h2 > {val.name} </h2 >
      {val.parts.map(value => <p
         key={value.id}> {value.name} - {value.exercises} 
            </p>
           )}
      { <p> Total excercises - {val.parts.reduce((sum,excercise) =>  sum +excercise.exercises,0)}</p> 
} 
    </p>)}




    </div>)}  

  return <Course course={courses} />
}

export default App