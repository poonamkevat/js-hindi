//Singleton
//Object.create


//object literals
//****we are talking about Object lietral */



const mySym = Symbol("key1")

const JsUser = {
    name: "Poonam",
    "full name": "poonam kevat",//how to access this
    [mySym]: "mykey1",
    age:18,
    location: "Jaipur",
    email: "poonam15.52@gmail.com",
    isLoggedIn: false,
    lastLoginDays:["Monday","Saturday"]

}

// console.log(JsUser.email)//poonam15.52@gmail.com
// console.log(JsUser["email"])//poonam15.52@gmail.com
// console.log(JsUser["full name"])
// console.log(JsUser[mySym])

 JsUser.email = "Poonam@gamil.com";
// console.log(JsUser["email"])//Poonam@gamil.com
//Object.freeze(JsUser)//he object becomes immutable (cannot be changed).
JsUser.email = "puja@gmail.com";
// console.log(JsUser.email)//output will still be:Poonam@gamil.com

// console.log(JsUser);


JsUser.greeting = function(){
    console.log("Hello JS user");
}
//console.log(JsUser.greeting);//[Function (anonymous)]
console.log(JsUser.greeting());

JsUser.greetingTwo = function(){
    console.log(`Hello JS user, ${this.name}`);
}
console.log(JsUser.greetingTwo())
