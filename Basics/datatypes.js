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

console.log(true + 1 + 2) //1+1+2 = 4
console.log(1 + 2 + false) //1+2+0 = 3

let x=2
let y = x++ // postfix

let a=2
let b = ++a //prefix

console.log(`x:${x} y:${y} `); //x:3 y:2 
console.log(`a:${a} b:${b}`); //a:3 b:3

console.log("2" == 2); //true
console.log("2" === 2) //false. It checks with datatypes





