function sayHello(){
    console.log("H")
    console.log("E")
    console.log("L")
    console.log("L")
    console.log("O")
}

//sayHello()

function addNumbers(num1 , num2)
{
    console.log(num1 + num2)
}

const result = addNumbers(15,20)
addNumbers("prathamesh","khanna")

function addTwoNum(num1 , num2){

    let result = num1 + num2
    return result
}

function loginUserMessage(username){
    if(username === undefined){   // (!username)
        return "Please enter user name"
    }
    return `${username} just logged in`
}

console.log(loginUserMessage("prathamesh"))
// if no argument passed argument -> undefined
console.log(loginUserMessage())

function calculateCartPrice(...num1){
    return num1
}

console.log(calculateCartPrice(10,20,30))

const userProfile = {
    username : "prathamesh" , 
    age : 18
}
function handleObject(anyObject){
    console.log(`Username is ${anyObject.username} and age is ${anyObject.age}`)
}

handleObject(userProfile)

