import React, { useState } from 'react'

export default function CounterComp(props) {
    const [x,setCounter]= useState(1);
    const Increment =() =>(
        setCounter(x+1)
    );
  return (
   <div>
    <h1 className='bg-primary'>Counter : {x}</h1>
    <button className='bg-primary' onClick={Increment}>Increment</button>
   </div>
  )
}
