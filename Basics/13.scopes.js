// if(true){
//     let a = 20 // locally
//     const b = 30 // locally
//     var c = 40  // declared globally
// }

// console.log(a,b,c)

function one(){
    const userName = "prathamesh"

    function two(){
        const webSite = "youtube"
        console.log(userName) // accessible
    }

    //console.log(webSite) // not accessible

    two()
}

one()

if(true){
    const userName = "prathamesh"

    if(userName === "prathamesh"){
        const website = " youtube"
        console.log(userName + website)
    }

}

// scope -> {.....}

//***************interesting**************

console.log(incrementValue(5)); // will give the output (hoisting)
function incrementValue(num){
    return num + 1
}

addTwo(5) // will throw error -> expression format
const addTwo = function(num){
    return num + 2
}

