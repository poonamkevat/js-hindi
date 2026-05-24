const accountId = 14451
let accountEmail="poonam@gmail.com"
var accountpassword="123456"
accountCity = "PinkCity"
let accountState;
//accountId = 2 // not allowed

accountEmail = "hpoo2.com"
accountpassword = "1256"
accountCity = "Bengaluru"

console.log(accountId);

/*
Prefer not ot use var
because of issue in block scope and functional scope
*/
console.table([accountId,accountEmail,accountpassword,accountCity,accountState])

