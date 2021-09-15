import React from 'react'

const App = () => {
  
  const course = {
    name: 'Half Stack application development',
    parts: [
      {
        name: 'Fundamentals of React',
        exercises: 10
      },
      {
        name: 'Using props to pass data',
        exercises: 7
      },
      {
        name: 'State of a component',
        exercises: 14
      }
    ]
    
  }
const val = course.parts.map(value => <p> {value.name} - {value.exercises} </p> );
console.log(val)
     return (
    <div>
     {course.name}
     <p> {val} </p>
    </div>
  )
}
export default App;
