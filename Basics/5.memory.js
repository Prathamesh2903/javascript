let userName = "prathamesh"
let user2Name = userName  // copy of the value
// primitive data type stored in stack memory
user2Name = "khanna"
console.log(user2Name); //khanna
console.log(userName); // prathamesh

let user1 ={
    name : "prathamesh",
    id : "16"
}

let user2 = user1  // passed by reference
user2.name = "khanna"
// both the data type point to the same set of data
// in heap memory
// heap memory is used by non-primitive datas

console.log(user1.name) //khanna
console.log(user2.name) //khanna