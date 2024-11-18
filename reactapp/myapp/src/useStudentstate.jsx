import React, { useState } from 'react'
import './UseStudent.css'
export default function UseStudentstate() {
    const[count, setCount]=useState(0);

    function doincrement(){
        setCount(count+10);
    }
    function dodecrement(){
      setCount(count-5);
    }
  return (
    <div className='main'>
    <div style={ {color:'red'}}>{count}</div>
    
    <div>
    <button className='btn' onClick={dodecrement}>-</button>
    <button className='btn' onClick={doincrement}>+</button>
    
    </div>
    </div>
  )
}

