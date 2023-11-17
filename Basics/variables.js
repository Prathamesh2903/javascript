const accountId = 23316
let accountEmail = "prathameshkhanna@gmail.com"
var accountPassword = "789456123"
accountCity = "Pune"
let accountState; // undefined

// accountId = 2 // not allowed

accountEmail="pk@gmail.com"
accountPassword="456325"
accountCity="mumbai"

console.log(accountId);

/*
Prefer not to use var
because of issue in block scope and functional scope
*/
console.table([accountEmail,accountPassword,accountCity,accountState])