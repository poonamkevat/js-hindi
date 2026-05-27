let myDate = new Date()
// console.log(myDate.toString());
// console.log(myDate.toDateString());
// console.log(myDate.toLocaleString());

let myCreateDate = new Date(2026,4,25);
 myCreateDate = new Date(2026,4,25,5,3);
 myCreateDate = new Date("2003-11-30");
//console.log(myCreateDate.toDateString());

let myTimeStamp = Date.now()
//console.log(myTimeStamp);
//console.log(myCreateDate.getTime());
//console.log(Math.floor(Date.now()/1000));


let newDate = new Date()
// console.log(newDate);
// console.log(newDate.getMonth() + 1)
// console.log(newDate.getDay())
// console.log(`the month is${newDate.getMonth()} and the day is ${newDate.getDay()}`)

console.log(newDate.toLocaleString('default',{
    weekday:"short"
}))