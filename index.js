// VARIABLES
// let, var, const

// console.log(name); // Print

// const name = "pizza";
// const topping = "pineapple";
// /* adding two strings;
// concatenation */
// console.log(name, "pineapple");
// console.log(name, topping);

// // TEMPLATE LITERALS

// console.log("$(name) ${topping}");

// console.log("string" + "1");

// // integer

// console.log(1 * 3);
//booleans
// false, undefined, null, 0

// let num = undefined;

// console.log(Boolean(name));

// let prompt1 = prompt("what is your name?");
// let whereDidHeGo = prompt("WhereDidHeGo?");
// console.log("${prompt1} went to the ${whereDidHeGo}");
// alert("${prompt1} went to the ${whereDidHeGo}");

let name1;
let age;
let hobby;

let prompt1 = prompt("what is your name?");
console.log(prompt1);
name1 = prompt1;
console.log(name1);

let prompt2 = prompt("How old are you?");
console.log(prompt2);
age = prompt2;
console.log(age);

let prompt3 = prompt("what is your hobby?");
console.log(prompt3);
hobby = prompt3;
console.log(hobby);

alert(`Hi, my name is ${name1}, I am ${age}years old, and I like ${hobby}.`);
