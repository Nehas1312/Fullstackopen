import React, { useState } from 'react'
const StatisticLine =(props) =>{
  return( 
    <div>
      <td> {props.text}  = {props.value} </td>
   </div>
  )}

const Statistics = (props) => {
  if (props.val4 === 0){
    return (
      <div>
        <h2>
          Statistics
        </h2>
        <p>No feedback given</p>
      </div>
    )
  }
  else {return (
    <div>
      <h2> Statistics</h2>
      {/* <li>Good = {props.val1}</li>
      <li>Netural = {props.val2}</li>
      <li>Bad = {props.val3}</li>
      <li> All= {props.val4}</li>
      <li> Average = {(props.val1- props.val3)/props.val4}</li>
      <li> Positive Feedback = {props.val1/props.val4 * 100} %</li> */}
      <StatisticLine text="Good" value ={props.val1} />
      <StatisticLine text="Neutral" value ={props.val2} />
      <StatisticLine text="Bad" value ={props.val3} />
      <StatisticLine text="All" value ={props.val4} />
      <StatisticLine text="Average" value ={(props.val1- props.val3)/props.val4} />
      <StatisticLine text="Positive Feedback" value = {props.val1/props.val4 * 100  }  />
    </div>
  )
}
}

const Button = ( props ) => (
  <button onClick={props.click}>
    {props.te}
  </button> )

const App = () => {
  // save clicks of each button to its own state
  const [good, setGood] = useState(0)
  const [neutral, setNeutral] = useState(0)
  const [bad, setBad] = useState(0)
  const [all,setAll] = useState(good + bad +neutral)
  const clickgood = () => {
    setAll(all+1)
    setGood(good + 1)}
    const clicknetural = () => {
      setAll(all+1)
      setNeutral(neutral + 1)}
      const clickbad = () => {
        setAll(all+1)
        setBad(bad + 1)}  
  
  return (
    <div>
      <h1> Give feedback</h1>
      <Button click={clickgood} te=  "Good"/>
      <Button click={clicknetural} te= "Netural"/>
      <Button click={clickbad} te = "Bad" />
      {/* <h2>
        Statistics
      </h2>
      <li>Good= {good}</li> 
      <li>Netural={neutral} </li>
      <li>Bad= {bad}</li>  
      <li>All = {all}</li>
      <li>Average= {((good-bad)/all)  }</li>
      <li>Positve feedback={((good)/all)*100 }%</li> */}
      <Statistics val1={good} val2= {neutral } val3={bad} val4={all}/>

    </div>
  )
}

export default App