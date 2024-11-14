import React from 'react'
import './student.css'
export default function Student(props) {
  return (
    <div className='icard'>
   <table>
    <tbody>
        <tr>
            <td colSpan={2}>
          {props.college}
            </td>
            
        </tr>
        <tr>
            <td colSpan={2} id='hello'>
          {props.pic}
            </td>
            
        </tr>
        <tr>
            <td>Name:</td>
            <td>{props.name}</td>
        </tr>
        <tr>
            <td>Branch:</td>
            <td>{props.branch}</td>
        </tr>
        <tr>
            <td>Roll no.:</td>
            <td>{props.roll}</td>
        </tr>
        <tr>
            <td>Section:</td>
            <td>{props.section}</td>
        </tr>
    

    </tbody>
   </table>
    </div>
  )
}
