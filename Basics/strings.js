const name = "prathamesh"
const repoCount = 4

console.log(name + repoCount)

console.log(`hello my name is ${name} and my repo count is ${repoCount}`)

const gameName = new String('ageOfEmpires')
console.log(gameName[1])

console.log(gameName.length)
console.log(gameName.toUpperCase())
console.log(gameName.indexOf('e'))

const newString = gameName.substring(0 , 4)
console.log(newString);

const anotherString = gameName.slice(-8 , 4)
console.log(anotherString);

const email = "   prathamesh   "
console.log(email.trim());
//prathamesh

const url = "https://prathamesh.com/prathamesh%20khanna"
console.log(url.replace('%20','-'))
//"https://prathamesh.com/prathamesh-khanna"


