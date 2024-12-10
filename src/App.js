import './App.css';
import React, { useState } from 'react'

function App() {
  const [count,setCount] = useState(1);
  const handleIncrement =()=>{
    setCount((prev)=>prev + 1)
    console.log("increment count:",count + 1)
  }
  const handleReset=()=>{
    setCount(1)
    console.log("Reset count : 1");
  }
  const handleDecrement =()=>{
    setCount((prev)=>prev - 1)
    console.log("decrement count:",count - 1)
  }
  return (
    <>
      <h2>Counter</h2>
      <h1>{count}</h1>
      <button onClick={handleIncrement} className='btn1'>Increment</button>
      <button onClick={handleReset} className='btn2'>Reset</button>
      <button onClick={handleDecrement} className='btn3'>Decrement</button>
    </>
  );
}

export default App;
