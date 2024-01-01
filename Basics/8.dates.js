// Dates

// let myDate = new Date();
// console.log(myDate);
// console.log(myDate.toString());
// console.log(myDate.toDateString());
// console.log(myDate.toLocaleString());
// console.log(myDate.toLocaleDateString());
// console.log(myDate.toTimeString());

// console.log(myDate.toUTCString());
// console.log(myDate.getTimezoneOffset());

//console.log(typeof myDate);  // object 

let createDate = new Date(2023,0,23);
console.log(createDate.toDateString());

let myTimeStamp = Date.now()
console.log(myTimeStamp)
console.log(createDate.getTime());
console.log(Math.floor(Date.now() / 1000));

let newDate = new Date()
console.log(newDate.getDay());
console.log(newDate.getFullYear());



console.log(newDate.toLocaleString('default',
{
    timeZone : 'Asia/Kolkata',
}))