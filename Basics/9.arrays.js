// const myArr = [0, 1 , 2 , 3 , 4 , 5]
// console.log(myArr[1]);

// const arr = new Array(1,2,3,4)

// // Array methods 
// myArr.push(69)
// //console.log(myArr);
// myArr.pop()

// myArr.unshift(10);
// myArr.shift();
// console.log(myArr);

// console.log(myArr.includes(9));
// console.log(myArr.indexOf(9));

// const newArr = myArr.join() // newArr now is a string  
// console.log(newArr);

// console.log(myArr);
// const arr1 = myArr.slice(1,3); // no change in the original array
// console.log(arr1);

// const arr2 = myArr.splice(1,3); // original array changed -> myArr = [0 , 4 , 5]
// console.log(myArr);
// console.log(arr2);

const marvel = ["ironMan" , "cap" , "thor"]
const dc = ["superMan" , "flash"]
//marvel.push(dc)
//console.log(marvel[3][1]);

const heroes = marvel.concat(dc) // returns new array w/o changing original arrays
console.log(marvel)
console.log(dc)
console.log(heroes)

const newHeroes = [...marvel , ...dc] // spread , same as concat with more than two arrays
console.log(newHeroes)

const subArray = [1,2,[3,4,[5,6]]]
const newArr = subArray.flat(Infinity) // returns new array with all subarrays removed
console.log(newArr)

console.log(Array.isArray("prathamesh"))
console.log(Array.from("prathamesh"))

console.log(Array.from({name:"prathamesh"})) // interesting case

let score1 = 100
let score2 = 200
let score3 = 400

console.log(Array.of(score1,score2,score3)) // returns an array of the following variables
