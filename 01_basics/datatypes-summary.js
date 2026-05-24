//Primitive

// 7 types : String, Number, Boolean, null, undefined, Symbol, BigInt




const id = Symbol('123')
const anotherId = Symbol('123')
//console.log(id===anotherId); 

//const bigNumber = 3415664323538435444n;// this bahevae likhe big number
//console.log(typeof bigNumber)

//Reference (Non primitive)

//Array, Objects, Functions

const heros = ["shaktiman","naagraj","doga"];

let myObj = {
    name:"poonam",
    age:22,
}

const myFunction = function(){
    console.log("Hello World");
}

// console.log(typeof null);//object
// console.log(typeof myFunction);//function
//  console.log(typeof heros);//object

 //https://262.ecma-international.org/5.1/#sec-11.4.3


 //******************************************************
 //types of memory
   // Stack                       //  Heap 
 // 1 where use> primitive        where use >non primitive 
 // 2) give copy                  give reference


 //let understand withy example  of stack
/*****copy hoti hain */
//  let myYouTubename = "Poonamkevat16";
// let anotherName = myYouTubename;
//   anotherName =  "chaiaurCode";

//  console.log(myYouTubename);//Poonamkevat16
//  console.log(anotherName);//chaiaurCode



//*-*--**--********
//let understand withy example  of heap
// original change
 let userOne = {
    email:"poonam14.2.252gmail.com",
    upi:"user@ybl"
 }

 let userTwo = userOne
 userTwo.email = "poonamkevat5@gmail.com";
 console.log(userOne.email);//poonamkevat5@gmail.com
 console.log(userTwo.email);//poonamkevat5@gmail.com