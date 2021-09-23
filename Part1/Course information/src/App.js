import React, { useState } from 'react'



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
      <button onClick={clickgood} > Good</button>
      <button onClick={clicknetural}>Netural</button>
      <button onClick={clickbad}>Bad</button>
      <h2>
        Statistics
      </h2>
      <li>Good= {good}</li> 
      <li>Netural={neutral} </li>
      <li>Bad= {bad}</li>  
      <li>All = {all}</li>
      <li>Average= {((good-bad)/all)  }</li>
      <li>Positve feedback={((good)/all)*100 }%</li>

    </div>
  )
}

export default App