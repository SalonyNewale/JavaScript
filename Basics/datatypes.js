 "use strict"; //treat all JS code as newer version 

//alert("hello") //we are using nodejs, not browser

let name = "Salony"
let age = 22
let isLoggedIn = false

//null is standalone value => typeof is object
//undefined is value not assigned => typeof is undefined
//symbol hwhen unique
//object 

console.log(typeof "Salony");

let score = "33aa";

let getScore = Number(score)
console.log(typeof score)
console.log(typeof getScore);

console.log(getScore);

//"33" => 33
//"33abc" => NaN
//true => 1, false => 0

let isLoggedIn1 = 1
let booleanIsLoggedIn = Boolean(isLoggedIn1)

console.log(booleanIsLoggedIn);




