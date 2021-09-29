import React, { useState } from 'react'

const App = () => {
  const anecdotes = [
    'If it hurts, do it more often',
    'Adding manpower to a late software project makes it later!',
    'The first 90 percent of the code accounts for the first 10 percent of the development time...The remaining 10 percent of the code accounts for the other 90 percent of the development time.',
    'Any fool can write code that a computer can understand. Good programmers write code that humans can understand.',
    'Premature optimization is the root of all evil.',
    'Debugging is twice as hard as writing the code in the first place. Therefore, if you write the code as cleverly as possible, you are, by definition, not smart enough to debug it.',
    'Programming without an extremely heavy use of console.log is same as if a doctor would refuse to use x-rays or blood tests when diagnosing patients'
  ]
  
   const [vote,setVote] = useState(new Uint8Array(7))
  

  const copy = [...vote]
   function indexOfMax(arr) {
    if (arr.length === 0) {
        return -1;
    }

    var max = arr[0];
    var maxIndex = 0;

    for (var i = 1; i < arr.length; i++) {
        if (arr[i] > max) {
            maxIndex = i;
            max = arr[i];
        }
    }

    return maxIndex;
}
   

 const [selected, setSelected] = useState(0)
 function getRandomInt(max) {
  return Math.floor(Math.random() * max)}

  return (
    <div>
      <h1> Anecdote of the day</h1>  
     <td> {anecdotes[selected]} </td>
     <td1> Has {vote[selected]}  votes.</td1>
    
      <p><button onClick ={ () => {copy[selected]+=1;
      setVote(copy)}} > Vote</button>
        <button onClick ={ () => setSelected(getRandomInt(7))}> Next anecdotes</button>
       </p>
       <h2> Anecdote with most votes</h2>
        <p> {anecdotes[indexOfMax(vote)]}</p>
        <p1> has {vote[indexOfMax(vote)]} votes.</p1>
    </div>
  )
}

export default App