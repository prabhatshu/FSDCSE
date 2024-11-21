import React, { useState } from 'react'

export default function UseFetch() {
const[data1, setData]=useState([]);
   const response= fetch("https://dummyjson.com/recipes");
   response.then((res)=>{
     console.log(res)
      res.json().then((data)=>{
       console.log(data);
       setData(data);
      })
   })
   .catch((error)=>{
    console.log(error)
   })
  return (
    <div>
    Lets Fetch the API
    {JSON.stringify(data1)}
    </div>
  )
}
