const cfUser = new Object() // singleton object

cfUser.userID = "prathameshkhanna"
cfUser.rating = 1181
cfUser.isLoggedIn = false

console.log(cfUser)

const regularUser = {
    email: "prathameshkhanna@gmail.com",
    fullName: { // object in object
        firstName: "prathamesh",
        middleName: "deepak",
        lastName: "khanna"
    }
}

console.log(regularUser.fullName.middleName)

const obj1 = 
{
    1: "a",
    2: "b",
    3: "c"
}
const obj2 = 
{
    4: "d",
    5: "e"
}

// merging of two objects
//const obj3 = Object.assign(obj1,obj2) // target,source
//console.log(obj3) 
console.log(obj1) // same as obj3

// better way
const newObj = Object.assign({} , obj1 , obj2)
console.log(newObj)
console.log(obj1) // different from newObj
// target -> {}
// source -> obj1,obj2

const obj3 = {...obj1 , ...obj2} // spread operator -> ...obj_name
console.log(obj3)

console.log(cfUser)
console.log(Object.keys(cfUser)) // array of keys
console.log(Object.values(cfUser)) // array of values
console.log(Object.entries(cfUser)) // array of key value pairs

console.log(cfUser.hasOwnProperty('rating')) // checks if properties present 


const course = {
    courseName: "javaScript",
    coursePrice: "9696",
    courseInstructor: "Hitesh"
}

const {courseInstructor : instructor} = course // destructoring of object
console.log(instructor)

// API'S
// JSON FORMAT
// {
//     "courseName": "javaScript",
//     "coursePrice": "9696",
//     "courseInstructor": "Hitesh"
// }

