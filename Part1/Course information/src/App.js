import React from 'react'

const App = () => {
  
  const exercises1 = 10
  
  const exercises2 = 7
  
  const exercises3 = 14
const Header = (props) =>{
  return(
    <div>
      <h1>
         {props.course}
      </h1>
    </div>
  )
}  
const Part =(props) =>{
  return(
    <div>
      <p>{props.part}, Number of excersises is {props.ex}</p>
    </div>
  )
}
const Content = ()=>{
  return(
    <div>
    <Part part ='Fundamentals of React' ex = '10' />
    <Part part = 'Using props to pass data' ex='7'/>
    <Part part= 'Using props to pass data' ex='7'/>
     <Part part ='State of a component' ex='14'/>
     </div>
  )
}
const Total = (props)=>{
  return(
    <div>
      <p>
        Total number of excersises = {props.total}
      </p>
    </div>
  )
}
  return (
    <div>
      <Header course='Half Stack application development' />
       
      <Content/> 
     
      <Total total ={exercises1+exercises2+exercises3} />
    </div>
  )
}
export default App