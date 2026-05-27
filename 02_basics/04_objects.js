//const tinderUser = new Object()
const tinderUser = {}//literal object
// Top two line five same ans //{}

tinderUser.id = "123abc"
tinderUser.name = "Sunny"
tinderUser.isLoggedIn = false

//console.log(tinderUser);//{}

const regularUser = {
    email: "some@gmail.com",
    fullname:{
        userfullname:{
            firstname: "poonam",
            lastname: "kevat"
        }
    }

}
//console.log(regularUser.fullname.userfullname.firstname)

//***Merge  two object */

const obj1 ={1:"a",2:"b"}
const obj2 = {3:"a",4:"b"}
const obj4 = {5:"a",6:"b"}
//const obj3 = {obj1, obj2}////**1 way(not used)*/give object in object(nested//{ obj1: { '1': 'a', '2': 'b' }, obj2: { '3': 'a', '4': 'b' } }

//correct way
//const obj3 = Object.assign({},obj1,obj2,obj4)//{ '1': 'a', '2': 'b', '3': 'a', '4': 'b' }
//most commonly used
const obj3 = {...obj1, ...obj2}
//console.log(obj3);


const users = [
    {

    },
    {

    },
    {

    }
]

users[1].email
// console.log(tinderUser);

// console.log(Object.keys(tinderUser));//only keys print//[ 'id', 'name', 'isLoggedIn' ]
// console.log(Object.values(tinderUser));//[ '123abc', 'Sunny', false ]
// console.log(Object.entries(tinderUser));//[ [ 'id', '123abc' ], [ 'name', 'Sunny' ], [ 'isLoggedIn', false ] ]
// console.log(tinderUser.hasOwnProperty('isLoggedIn'))//ask key present or not give true or false

const course = {
    coursename: "js in hindi",
    price: "999",
    courseInstructor:"Hitesh"
}
//course.courseIntructor

const{courseInstructor: instructor} = course
//console.log(courseInstructor);
console.log(instructor);
