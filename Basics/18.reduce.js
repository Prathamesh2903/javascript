const family =
[
    {name:'prathamesh' , age:20 , position:'son'},
    {name:'deepak' , age:53 , position:'father'},
    {name:'monisha' , age:48 , position:'mother'},
    {name:'simran' , age:24 , position:'sister'},
    {name:'manjula' , age:74 , position:'grandMother'},
]

// Reduce
// reduces to a single value - Number , array , object

const ageTotal = family.reduce((total,member) => {
    total += member.age
    return total
},0)

console.log(ageTotal)