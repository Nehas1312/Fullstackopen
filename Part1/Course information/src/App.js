import React from 'react'

const App = () => {
  const course = 'Half Stack application development'
  const parts = [
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
  const val = parts.map(part => <p> {part.name} - {part.exercises} </p>  )
  console.log(val)
  return (
    <div>
      <h1> {course}</h1>
       {val} 
      
    </div>
  )
}
export default App