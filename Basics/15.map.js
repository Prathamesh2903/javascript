const users = [
    {
        name: "prathamesh",
        age: 20,
        job: "engineer"
    },
    {
        name: "simran",
        age: 24,
        job: "designer"
    },
    {
        name: "deepak",
        age: 52,
        job: "business"
    }
];

// returns a new array
// does not change the size of the original array
// using values from the original array while making new one
const ages = users.map((user) => user.age) // use of array function
console.log(ages)

const updateUser = users.map((user) => {
    return {
        userName: user.name.toUpperCase() ,
        userAge: user.age + 20
    }
})

console.log(updateUser)

