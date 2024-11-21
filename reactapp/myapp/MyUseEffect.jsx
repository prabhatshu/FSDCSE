import React from 'react'
import { useEffect, useState } from 'react'
export default function MyUseEffect() {
 
    const[count, setCount]=useState(10);
  const[pointer, setPointer]=useState(20);
    useEffect(()=>{
  console.log("Updated Count"+ count, "Updated Pointer"+pointer);
    }, [count, pointer])

function doinc(){
    setCount(count+30)
}

function dopointer(){
    setPointer(pointer+120);
}
  return (
    <div>
     
   <h2>Counter:{count}</h2> 
   
   <h2>Pointer:{pointer}</h2> 

   <button onClick={doinc} >Increment</button>
   <button onClick={dopointer} >Point</button>
    </div>
  )
}
