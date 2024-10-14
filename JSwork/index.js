
//  console.log("welcome to js")
//  var a=12
// console.log(a)
// if(a>10){
// var b=45;
//     a=23;
//     console.log(a)
// }
// console.log(b)

// let a=12;
// let b="12";
// console.log(typeof a, typeof b);
// let today=Date();
// console.log(today)

// if(a===b){
//     console.log("welcome")

// }
// else{
//     console.log("nocome")
// }
// let myname="Prabhat"
// let college="ABESEC";

// let result=`Hi, myname is ${myname}, and i am currently studying in ${college}`
// console.log(result)

// // Objects in JS
// let key="sname"
// const students=[{
//     sname:"Prabhat",
//     course:"B-tech",
//     college:"ABESEC"
    
// },
// {
//     sname:"Shukla",
//     course:"MCA",
//     college:"AKGEC"
    
// },
// {
//     sname:"PrabhA",
//     course:"BCA",
//     college:"IIT"
    
// },

// ]
// console.log("Name:"+students.sname+ " "+"Course:"+students.course)
// const{sname, course}=students;
// console.log(sname)
// console.log(course)
// students[key]="RAHUL";
// console.log(students)
// console.log(students[0].college+" "+students[0].sname)

// function greeting(msg="Welcome"){

//     console.log("good morning"+msg);

// }
// greeting("heheeheheeh");

// function sum(a,b,c=23){
//     return a+b+c;
// }

// let result=sum(12,20);
// console.log(result)

// CALLBACK FUCNTIONS
// function ccomplier(){
//  return "C complier selected";
// }
// function javacompiler(){
// return "java complier selected";
// }
// function selectLanguage(language){
//     let data;
//     if(language=="c"){

//     function ccomplier(){
//         return "C complier selected";
//        }
//        data=ccomplier();
//     }
//     if(language=="java"){
//        function javacompiler(){
//        return "java complier selected";
//        }
//        data=javacompiler();
    

//     }
// return data;
// }
// let result=selectLanguage("java");
// console.log(result);

console.log("helllo");
console.log(document);
let parent=document.getElementsByClassName("parent");
console.log(parent)
parent[0].innerText="Data has changed";
parent[0].innerHTML="<h2 style=color:green>DATA HAS CHANGED</h2>"
