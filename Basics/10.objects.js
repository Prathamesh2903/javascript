// singleton - object from constructor

//Symbol
const mySym = Symbol("key1") // symbol data type


//object literals
const userProfile = {
    name: "prathamesh",
    email: "prathameshkhanna@gmail.com",
    age: 18,
    location: "Pune",
    isLoggedIn: false,
    lastLoginDay: "Monday",
    "Password": "abcdef",
    [mySym]: mySym, // to add a symbol as a key
}

console.log(userProfile.name);
console.log(userProfile["Password"]) // better way to access object properties
console.log(userProfile.Password)
console.log(userProfile[mySym]) // symbol

//Object.freeze(userProfile)
//userProfile.name = "khanna"
console.log(userProfile)

userProfile.greeting = function(){
    console.log(`hello ${userProfile.name}`);
}

console.log(userProfile.greeting());
// hello prathamesh
// undefined
// gives undefined output along the function execution

console.log(userProfile.greeting)


