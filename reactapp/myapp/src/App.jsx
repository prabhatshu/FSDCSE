import React from 'react';
import Student from './Student';
import './student.css';
import UseStudentstate from './useStudentstate';
import ImageManipu from './ImageManipu';
function HelloWorld() {
  const h1 = <h1>Hello World!</h1>;
  
  const mystyle = {
    color: 'white',
    backgroundColor: 'purple',

    padding: '10px',
    borderRadius: '5px',
  };

  const studentData = [{
    college: 'ABES Engineering College',
    name: 'Prabhat',
    pic:
      <img 
        src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQZ47HILWuUgVTqOxL-lJ0Jdvo9tpUNIP5X5Q&s" 
        height={100} 
        width={100} 
        alt="Student Priyanshu" 
      />,
    
    branch: 'CSE',
    roll: '2200320100112',
    section: 'B'
  },
  {
    college: 'ABES Engineering College',
    name: 'Harshit',
    pic:
      <img 
        src="https://media.istockphoto.com/id/1369754239/photo/university-student-in-white-background-stock-photo.jpg?s=612x612&w=0&k=20&c=LjFVDfjusWBjYTNliHV9DyXfApPGc8DmgBGEtfVgQ0Q=" 
        height={100} 
        width={100} 
        alt="Student Priyanshu" 
      />,
    branch: 'CS-AIML',
    roll: '220032010018',
    section: 'B'
  }];



  return (
<div>
    <h2 style={{color:'red'}}>Hello using useState hook</h2>
    <div>
      {/* <UseStudentstate/> */}
      <ImageManipu/>
    </div>
    </div>
    

  );
}

export default HelloWorld;
