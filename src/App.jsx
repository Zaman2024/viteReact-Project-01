import { useState } from 'react'
import './App.css'

function App() {
  const [count, setCount] = useState(0);


  let [counter, setCounter] = useState(0)

  // let counter = 15;

  let addValue = ()=>{
    if(counter <= 19){
      counter = counter + 1
      setCounter(counter)
      
    }else{
      counter=20;
    }
  }
  let removeValue = ()=>{
    if(counter > 0){
      counter = counter - 1
      setCounter(counter)
    }else{
      counter=0
    }
  }

  return (
    <>
      <h1>Counter : {counter}</h1>
      <h2>Count : {counter}</h2>
      <button onClick={addValue}>Add Value {counter}</button>
      <button onClick={removeValue}>Remove Value {counter}</button>
    </>
  )
}

export default App
