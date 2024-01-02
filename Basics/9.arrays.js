const myArr = [0, 1 , 2 , 3 , 4 , 5]
console.log(myArr[1]);

const arr = new Array(1,2,3,4)

// Array methods 
myArr.push(69)
//console.log(myArr);
myArr.pop()

myArr.unshift(10);
myArr.shift();
console.log(myArr);

console.log(myArr.includes(9));
console.log(myArr.indexOf(9));

const newArr = myArr.join() // newArr now is a string  
console.log(newArr);

console.log(myArr);
const arr1 = myArr.slice(1,3); // no change in the original array
console.log(arr1);

const arr2 = myArr.splice(1,3); // original array changed -> myArr = [0 , 4 , 5]
console.log(myArr);
console.log(arr2);