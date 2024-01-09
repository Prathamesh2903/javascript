const person = {
    name: 'john'
};
console.log(person.name)

console.log(person)

let setAge = 'age'
person[setAge] = 25

console.log(person)

const user = {
    userName: "prathamesh",
    rating: "",
    type:"",
}

function updateUser(key,value)
{
    user[key] = value
}

updateUser('rating','2000') // updating the object using square bracket notation
updateUser('type','expert')

console.log(user);