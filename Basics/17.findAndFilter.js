const family =
[
    {name:'prathamesh' , age:20 , position:'son'},
    {name:'deepak' , age:53 , position:'father'},
    {name:'monisha' , age:48 , position:'mother'},
    {name:'simran' , age:24 , position:'sister'},
    {name:'manjula' , age:74 , position:'grandMother'},
]

// filter -> returns a new array , based on condition

const youngMembers = family.filter((member)=>{
    if(member.age<30)
    {
        return member;
    }
})

console.log(youngMembers)
// if no element matched the given condtion we get the empty array

// Find -> returns single instance () , returns first match , if no match - undefined

const findSimran = family.find((member)=> member.name === 'simran')
console.log(findSimran)  // returns a single instance
// returns undefined if not match present

const findJohn = family.find((member)=> member === 'John')
console.log(findJohn) // undefined 

// NO MATCH
// filter -> empty array
// find -> undefined

