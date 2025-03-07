//  let age=3;
//  if(age>18){
//     console.log("can drive");
//     }

//  else
//  {console.log("cannot drive");}


// let marks=83;
// if(marks>80){
//     console.log("a grade")
// }
// else if(marks>60){
//     console.log("b grade")
// }
// else{
//     console.log("c grade")
// }

// for( let i=1; i<=10; i++){
//     console.log("m5")
// }

// for(let i=6; i>0; i--){
//     console.log(i)
// }

// for(let i=6; i>0; i--){
//        if(i==3){
//         continue
//        } 
//        else{
//         console.log(i)}
        
//     }


// function sayName(){
//     console.log("car")
// }

// sayName()

// function printNum(num){
//     console.log("printnum", num)
// }
// printNum(545);



// function getName(firstName, lastName){
//     let fullName= firstName+lastName;
//     return fullName;
// }
// let fullName= getName("himesh","dhiman")
// console.log(fullName)


// let getExp = (x,y)=>{
//     let ans=x**y;
//     return ans;
// } 
//  console.log(getExp(2,10))

// let obj={
//     name:"love",
//     age:25,
//     greet: function
    
 

// };
// console.log(obj)

// let arr=[1 , "himesh",2,3,4,5];

// let brr= new Array("hks" , 1 , true)
// // console.log(arr)
// brr.push ("hks")
// brr.shift()
// brr.unshift("himesh")
// brr.push (10)
// brr.push (20)
// brr.push (40)
// // console.log(brr.slice(2,4))

// // console.log(brr )

// brr.splice(1,2,"dhiman")
// console.log(brr)


// let arr=[10,20,30];
// let ans=arr.map((num)=>{
//     return num*num;
// })
// console.log(ans)

// let arr=[10,20,88,60,55,35,90];
// let ans= arr.filter((num) =>{
//     if(num%2===0){
//         return true;
//     }
//     else {
//             return false;
//         }
    
// })

// console.log(ans)

// sayname("dhiman")
// function sayname(firstname){
//     console.log(firstname)
// }

//  class Human{
//     age=19;
//     // # for private
//     #wt=65;
//     ht=170;



//     constructor( newAge,  mewHeight, newWeight){
//         this.age=newAge;
//         this.ht=newWeight;
//         this.#wt=newWeight;
//     }

//     walking(){
//         console.log("i ,m waking" , this.#wt)
//     }
//     running(){
//         console.log("i m running")
//     }

//     get fetchWeight(){
//         return this.#wt;

//     }

//     set modifyweight(val){
//         this.#wt=val;
//     }

//  }

//  let obj=new Human( 50, 460, 101);
//  console.log(obj.fetchWeight);
//  obj.running();
// //  console.log(obj.#wt);



//default parameter
// function sayName(myName="dhiman"){
//     console.log("my name" , myName);
// }






// sayName("himesh")

// console.log("dhiman");


// console.log(Math.PI);

// console.log(Math.max(55,69,55,99,2,4,6,))




// let curr= new Date();
// console.log(new Date);





// let src ={
//     age:31,
//     wt:65,
//     ht:165

// };
// let dest={...src};

// console.log("src" ,src);
// console.log("dest:", dest);



// console.log(obj)
// obj.color="Red";
// console.log(obj)


















// let mydiv=document.querySelector("#mydiv");
// let newElement=document.createElement("span")
// newElement.textContent=("this is supra")

// mydiv.insertAdjacentElement("beforeend", newElement);



// let parent=document.querySelector("#mydiv")
// let child=document.querySelector("#fpara")
// parent.removeChild(child)










// function changeText(event){
//     console.log(event);

    
// let fpara=document.getElementById("fpara")
// fpara.textContent="hello dhiman"

// }

// let fpara=document.getElementById("fpara")
// fpara.addEventListener("click", changeText);



//code 1

// const t1= performance.now()

// for(let i=1; i<=100;i++){
//     let para=document.createElement("p");
//     para.textContent="this is para :" +i;
//     document.body.appendChild(para); 
// }

// const t2=performance.now();
// console.log("total time by c1 : " +(t2-t1));



// //code 2

// const t3=performance.now();

// let mydiv= document.createElement("div");
// for(let i=1; i<=100;i++){
//     let para=document.createElement("p");
//     para.textContent="this is para :" +i;
//     mydiv.appendChild(para);
// }


// document.body.appendChild(mydiv);

// const t4=performance.now();

// console.log("total time by c2 : " +(t4-t3));


//best code


// let fragment=document.createDocumentFragment();

// for(let i=1; i<=100; i++){
//     let para = document.createElement("p");
//     para.textContent= "this is para :" +i;
//     fragment.appendChild(para);
// }
// document.body.appendChild(fragment);




// let firstPromise= new Promise ( ( resolve, reject ) =>{
// console.log("dhiman");
// reject(new Error("internet error"));
// });


// function sayMyName(){
//     console.log("my name is hks");

// }
// setTimeout(sayMyName, 5000);







// async function getData(){
//     setTimeout(function(){
//         console.log(" i m set timeout ")
//     },3000)

    
// }
// getData()



// async function getData(){

//     let response= await fetch('https://jsonplaceholder.typicode.com/todos/1');
//     let data= await response.json();
//     console.log(response);
     
// }
// getData();



// function outerFunction() {
//     let name = "dhiman"; 
//     function innerFunction() {
//       let name = "himesh"
//       console.log(name);
//     }
//     innerFunction();
//   }
//   outerFunction();
  













