import React, { useState } from 'react'
const App = () => {
  const course = {
    id: 1,
    name: 'Half Stack application development', 
    parts: [
      {
        name: 'Fundamentals of React',
        exercises: 10,
        id: 1
      },
      {
        name: 'Using props to pass data', 
        exercises: 7,
        id: 2
      },
      {
        name: 'State of a component', 
        exercises: 14,
        id: 3
      }
    ]
  }
  const Course =(props)=>{
  //  var all =0
  //  for (var i= 0;i<props.course.parts.length;i++){
  //    all+= props.course.parts[i].exercises 
  //  }

    return( 
  <div>
    { <h1> {props.course.name} </h1>}
    {props.course.parts.map(value => 
        <p key={value.id}> {value.name} - {value.exercises} </p>
           )}
  {/* <p> Total excercises - {all}</p> */}
   <p> Total excercises - {props.course.parts.reduce((sum,excercise) =>  sum +excercise.exercises,0)}</p>



    </div>)}  

  return <Course course={course} />
}

export default App