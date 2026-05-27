///Array

const myArr = [0,1,2,3,4,5]
const myHeros = ["papa","mummy"]
const myArr2 = new Array(1,2,13,4);
//console.log(myArr[1]);

//******Array******Method */
// myArr.push(6)
// myArr.push(7)
// myArr.pop()
// console.log(myArr);

// myArr.unshift(60)
// console.log(myArr);
// myArr.shift();
// console.log(myArr);

// console.log(myArr.includes(5));//give boolean value
// console.log(myArr.indexOf(10))

// const newArr = myArr.join()
// console.log(myArr);//[ 0, 1, 2, 3, 4, 5 ]
// console.log(newArr)//0,1,2,3,4,5
// console.log(typeof(newArr))//string
// console.log(typeof(myArr))//object


/*****************************************/
//*******slice or splice */

console.log("A ",myArr);
const myn1 = myArr.slice(1,3);

console.log(myn1);
console.log("B ",myArr);

const myn2 = myArr.splice(3,5);
console.log(myn2);


console.log("C ",myArr);
console.log(myn2);

// | Feature                | `slice()`    | `splice()`         |
// | ---------------------- | ------------ | ------------------ |
// | Changes original array | No           | Yes                |
// | Returns                | New array    | Removed elements   |
// | Use                    | Copy/extract | Add/remove/replace |
