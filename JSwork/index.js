
// //  console.log("welcome to js")
// //  var a=12
// // console.log(a)
// // if(a>10){
// // var b=45;
// //     a=23;
// //     console.log(a)
// // }
// // console.log(b)



// // let a=12;
// // let b="12";
// // console.log(typeof a, typeof b);
// // let today=Date();
// // console.log(today)

// // if(a===b){
// //     console.log("welcome")

// // }
// // else{
// //     console.log("nocome")
// // }
// // let myname="Prabhat"
// // let college="ABESEC";

// // let result=`Hi, myname is ${myname}, and i am currently studying in ${college}`
// // console.log(result)

// // // Objects in JS
// // let key="sname"
// // const students=[{
// //     sname:"Prabhat",
// //     course:"B-tech",
// //     college:"ABESEC"
    
// // },
// // {
// //     sname:"Shukla",
// //     course:"MCA",
// //     college:"AKGEC"
    
// // },
// // {
// //     sname:"PrabhA",
// //     course:"BCA",
// //     college:"IIT"
    
// // },

// // ]
// // console.log("Name:"+students.sname+ " "+"Course:"+students.course)
// // const{sname, course}=students;
// // console.log(sname)
// // console.log(course)
// // students[key]="RAHUL";
// // console.log(students)
// // console.log(students[0].college+" "+students[0].sname)

// // function greeting(msg="Welcome"){

// //     console.log("good morning"+msg);

// // }
// // greeting("heheeheheeh");

// // function sum(a,b,c=23){
// //     return a+b+c;
// // }

// // let result=sum(12,20);
// // console.log(result)

// // CALLBACK FUCNTIONS
// // function ccomplier(){
// //  return "C complier selected";
// // }
// // function javacompiler(){
// // return "java complier selected";
// // }
// // function selectLanguage(language){
// //     let data;
// //     if(language=="c"){

// //     function ccomplier(){
// //         return "C complier selected";
// //        }
// //        data=ccomplier();
// //     }
// //     if(language=="java"){
// //        function javacompiler(){
// //        return "java complier selected";
// //        }
// //        data=javacompiler();
    

// //     }
// // return data;
// // }
// // let result=selectLanguage("java");
// // console.log(result);

// console.log("helllo");
// console.log(document);
//  let div=document.getElementsByClassName("parent");
//  console.log(div)
// // div[0].innerText="Data has changed";
// // div[0].innerHTML="<h2 style=color:green>DATA HAS CHANGED</h2>"
// const h1=document.createElement("h1");
// console.log(h1)
// h1.innerText="this is ABES engineering college";
// console.log(h1);
// h1.style.backgroundColor="cyan";
// h1.style.color="red";
// h1.style.padding="20px";


// div[0].appendChild(h1);

// const img=document.createElement("img");
// img.src="./new1.jpg";
// img.setAttribute("height","300px");
// img.setAttribute("width","400px")

// div[0].appendChild(img);
// div[0].removeChild(img);

// function getdata(){
//     console.log("Hii, inside get data")
//     div[0].innerHTML="<h2 style=color:Red >Event Handled</h2>";
// }
// const btn=document.getElementsByClassName("btn");
// btn[0].addEventListener("click", getdata);

// const promise= new Promise((resolve, reject)=>{
  
//     let a=15;
//     if(a>12){
//         resolve("Accepted");
//     }
//     else{
//         reject("rejected");
//     }
// })

// promise.then((msg)=>{console.log(msg)})
// .catch((error)=>{
//     console.log(error)
// })
// .finally(()=>console.log("All resources have closed"));

// const promise2=new Promise((resolve, reject)=>{

// resolve({name:"Prabhat Shukla", Stack:"MERN STACK"});
// });

// promise2.then((data)=>{
//     console.log("Hii "+data.name)
// })
// .catch(x=>{
//     console.log(x);
// })

const response=fetch("https://dummyjson.com/products")
response.then((data)=>{
    console.log(data);
    data.json().then((res)=>{
        console.log(res);
    })
}
)