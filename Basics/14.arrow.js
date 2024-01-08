const userProfile = {
    userName: "prathamesh",
    price: 999,

    welcomeMessage: function(){
        console.log(`${this.userName} , welcome to website`);
        console.log(this)
    }
}

//userProfile.welcomeMessage()
userProfile.userName = "Khanna"
//userProfile.welcomeMessage()

console.log(this)

function newFunc(){
    console.log(this)
}

newFunc()

const arrow = () =>{
    let userName = "prathamesh"
}

// arrow function
// () => {}

const addNum = (num1,num2) => {
    console.log(num1+num2)
}
addNum(1,2)

// implicit return 
const addTwo = (num1 , num2 ) => (num1+num2)

const add = (num1 , num2 ) => ({userName:"prathamesh"})
console.log(add(1,2));



