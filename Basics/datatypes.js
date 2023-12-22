"use strict"; //treat all js code as newer version

//alert("hello") //using nodejs not browser

console.log(3
    +
    3)// not a good practice

console.log("prathamesh")

let name = "hello js"
let age = 18
let isLoggedIn = false

// number => 2^53
// bigint 
// string => prefer double quotes ""
// boolean => true/false
// null => standalone value
// undefined => 
// symbol => unique

//object
console.log(typeof "hello js")
console.log(typeof null) // object
console.log(typeof undefined) //undefined


// Primitive
// 7 types : string , number , boolean , BigInt , null , undefined , Symbol

// reference (Non-Primitive)
// Array , Objects , Functions

const score = 100
const isLoggedin = false
const outsideTemp = null
let userEmail = undefined

const id = Symbol('123')
const id2 = Symbol('123')

console.log(id == id2)

const bigNumber = 78963214789654124545n


const avengers = ["ironMan" , "capAmerica" , "hulk"];
let myObj = {
    name: "prathmesh",
    age: 18,
}

const myFunction = function(){
    console.log("hello world")
}

console.log(typeof myFunction)
console.log(typeof bigNumber)