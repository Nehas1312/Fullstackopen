import React, { useState } from 'react'
const App = () => {
  const courses = [
    {
      name: 'Half Stack application development',
      id: 1,
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
        },
        {
          name: 'Redux',
          exercises: 11,
          id: 4
        }
      ]
    }, 
    {
      name: 'Node.js',
      id: 2,
      parts: [
        {
          name: 'Routing',
          exercises: 3,
          id: 1
        },
        {
          name: 'Middlewares',
          exercises: 7,
          id: 2
        }
      ]
    }
  ]
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
    {props.course.map(val => <p1  > <h2 key = {val.id}> {val.name} </h2>
      {val.parts.map(value => <p
         key={value.id}> {value.name} - {value.exercises} 
            </p>
           )}
      { <p> Total excercises - {val.parts.reduce((sum,excercise) =>  sum +excercise.exercises,0)}</p> 
} 
    </p1>)}




    </div>)}  

  return <Course course={courses} />
}

export default App