const name = "Poonam"
const repoCount = 5;
//*** bad way/////console.log(name+ repoCount);

//best way to concatenate
//console.log(`Hello my name is ${name} and my repo count is ${repoCount}`);

const gameName = new String("Ashish_k")
// console.log(gameName[0]);
// console.log(gameName.__proto__);
// console.log(gameName.length);
// console.log(gameName.toUpperCase());// not original value change

// console.log(gameName.charAt(2));
// console.log(gameName.indexOf('A'));

const newString = gameName.substring(2,4);
//console.log(newString);

const anotherString = gameName.slice(-8,3)
//console.log(anotherString);


const newStringOne = "    puja   "
console.log(newStringOne); //    puja   
console.log(newStringOne.trim());//remove starting and ending space puja

const url = "https://hitesh.com/hites%20choudhary"
console.log(url.replace('%20','-'))

console.log(url.includes('hitesh'))

