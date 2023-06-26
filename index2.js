// // // // // VARIABLES
// // // // // let, var, const

// // // // // console.log(name); // Print

// // // // // const name = "pizza";
// // // // // const topping = "pineapple";
// // // // // /* adding two strings;
// // // // // concatenation */
// // // // // console.log(name, "pineapple");
// // // // // console.log(name, topping);

// // // // // // TEMPLATE LITERALS

// // // // // console.log("$(name) ${topping}");

// // // // // console.log("string" + "1");

// // // // // // integer

// // // // // console.log(1 * 3);
// // // // //booleans
// // // // // false, undefined, null, 0

// // // // // let num = undefined;

// // // // // console.log(Boolean(name));

// // // // // let prompt1 = prompt("what is your name?");
// // // // // let whereDidHeGo = prompt("WhereDidHeGo?");
// // // // // console.log("${prompt1} went to the ${whereDidHeGo}");
// // // // // alert("${prompt1} went to the ${whereDidHeGo}");

// // // // let name1;
// // // // let age;
// // // // let hobby;

// // // // let prompt1 = prompt("what is your name?");
// // // // console.log(prompt1);
// // // // name1 = prompt1;
// // // // console.log(name1);

// // // // let prompt2 = prompt("How old are you?");
// // // // console.log(prompt2);
// // // // age = prompt2;
// // // // console.log(age);

// // // // let prompt3 = prompt("what is your hobby?");
// // // // console.log(prompt3);
// // // // hobby = prompt3;
// // // // console.log(hobby);

// // // // alert(`Hi, my name is ${name1}, I am ${age}years old, and I like ${hobby}.`);

// // // // DATA TYPES AND VARIABLES
// // // // blah blah blah

// // // // CONDITIONALS //////////////////**** THIS IS WHERE

// // // // Truthy Values

// // // // FALSY VALUE
// // // // undefined, null, Nan,0

// // // // Conditional operators
// // // // ===;1=== 1 is true
// // // // ==; loose equals checks if value is the same, regardless of data type\
// // // // 1 !== 2; true
// // // // <,>, !==(NOT EQUALS), <=, >=
// // // // More than or equal to

// // // // `john ===`john
// // // // if statement
// // // // if (this is true) {then run this}

// // // if ("john" === "john") {
// // //   console.log("hello world");
// // // }

// // // let x = 0;
// // // if (x == 0) {
// // //   console.log("hello world");
// // // }

// // // // if statement// = ; assignment operator
// // // // == ; loose equals
// // // // ===; strict equals

// // // // LOGIC OPERATOR
// // // // || && OR
// // // // && AND
// // // // ?? NULLISH

// // // // let x= 0
// // // let y = 0;

// // // // does x equal 0 and y equal 1
// // // if (x === 0 && y === 1) {
// // //   console, log(`hello world`);
// // // }

// // // let questComplete = false;
// // // let questComplete2 = false;
// // // let slimeDefeated = 0;
// // // // OR OPERATOR

// // // if (slimeDefeated === 10) {
// // //   questComplete = true;
// // //   console.log(questComplete);
// // // }

// // // let v = 10;
// // // let u = 8;

// // // if (v === 10) {
// // //   console.log("hello world");
// // //   console.log("goodbye world");
// // // }
// // // let login = true;
// // // if (login === true) {
// // //   // redirect to page
// // // } else {
// // //   alert("user doesn't exist");
// // // }

// // // // else if
// // // /* will run if conditions before it are false and specifies a new condition
// // //  */
// // // let q = 3;
// // // if (q === 1) {
// // //   console.log(`hello world`);
// // //   console.log(`goodbye world`);
// // // } else {
// // //   console.log("something");
// // // }

// // // let user = `guest`;

// // // if (user === `admin`) {
// // //   //redirect to admin page
// // // } else if (user === "user") {
// // //   // redirect to user page
// // // } else {
// // //   alert(`account not found`);
// // // }

// // // let userName = prompt(`Enter Your Username`);

// // // if (userName === "john") {
// // //   alert("logged in!");
// // // } else if (userName === "lucy321" || userName === "john329") {
// // //   alert("logged in!");

// // // let randomNumber = Math.floor(Math.random()*4);
// // // console.log(randomNumber);

// // // let arr = ["liv","kamarr","derrick","jimmy"];

// // // console.log(arr[randomNumber]);
// // // if (arr[randomNumber] === "liv") {
// // //     console.log("Hello World")
// // // } else if (arr[randomNumber] === `john`) {
// // //     console.log("whats poppin");
// // // } else {
// // //     console.log("tech your wrong");
// // // }

// // // let ar= ["shadi", "lucy", "kite"];

// // // if(ar[0] === `john`){
// // //     console.log("john")
// // // } else if (ar[1] === "lucy");

// // // Generate a random number between 1 and 10
// // const randomNumber = Math.floor(Math.random() * 10) + 1;

// // // Prompt the user to enter their guess
// // const userGuess = prompt("Guess a number between 1 and 10:");

// // // Convert the user's guess to a number
// // const guess = parseInt(userGuess);

// // // Check if the user's guess matches the generated number
// // if (guess === randomNumber) {
// //   alert("Congratulations! You guessed the correct number!");
// // } else {
// //   alert(`Oops! The correct number was ${randomNumber}. Better luck next time!`);
// // }

// /// conditionals

// let myName = "John";
// if (myName === "John") {
//   console.log(`Hello${myName}`);
// } else {
//   console.log(false);
// }

// // for
// for (let i = 0; i < 10; i++) {
//   console.log(i);
// }

// /// arrays and methods
// let team = ["Lucycan", "Collin", "Mark", "Cortez"];
// console.log(team);
// /// push
// console.log(team.push("Derrick", "John"));
// console.log(team);
// ///pop
// console.log(team.pop());
// console.log(team);

// /// join
// console.log(team.join(""));

// /// slice returns a new array
// console.log(team);
// console.log(team.slice(1, 3));

// /// split
// let team1 = "John,mike,kiersten,lucy";
// console.log(team1);
// let teamSplit = team1.split(",");
// console.log(teamSplit);

// /// looping thru an array
// console.log(team);
// console.log(team[3]);

// // let role = [
// //   "Tech Manager",
// //   "TechFellow",
// //   "Placement Manager",
// //   "Program Manager",
// //   "Intern",
// // ];
// /// Hi my name is Lucycan and I am the Tech Manager
// for (let i = 0; i < team.length; i++) {
//   console.log(`Hello $(team[i])`);
// }

// /// Let The roles be Hello Lucycan I am the Tech Manager, Hello I am Collin the Tech Fellow, Hello I am Mark the Placement Manager, Hello I am Cortez the Program Manager, Hello I am Derrick the Intern.
// const role = [
//   "Hello Lucycan I am the Tech Manager",
//   "Hello I am Collin the Tech Fellow",
//   "Hello I am Mark the Placement Manager",
//   "Hello I am Cortez the Program Manager",
//   "Hello I am Derrick the Intern",
// // ];

// for (let i = 0; i < role.length; i++) {
//   const role2 = rSole[i];
//   console.log(role); // Perform some action with each role declaration

//   let team = prompt("Enter your team names");
//   console.log(team);
//   let roles2 = prompt("ProjectManager, "BusinessAnalyst", "TechAnalyst", "QualityAnalyst");
//   console.log(roles2);
// }
/// CHALLENGE
/// Enter your Team's names and roles in your prompt(s)
/// populate those values in an array[s]
/// write a for loop that logs; "Hello my name is <name> and I am the <role2>
///  you must get a log for every team member
/// our team name is Innovation Squad and there are 4 roles of the team
/// Hello My name is ShamPayne and I am the teams Project Manager
/// Hello my Name is Luci and I am the teams Business Analyst
/// Hello my name is Kiersten and I am the teams Tech Analyst
/// Hello my name is John and I am the teams Quality Analyst

// Prompt the user to enter team's name and number of roles
// Prompt the user to enter team's name and number of roles
let teamName = prompt("WhatisyourTeamsName?");
let numRoles = parseInt(prompt("Enter the number of roles in your team:"));

// Initialize arrays to store team members' names and roles
let teamNames = ["Shampayne", "Lucy", "Kiersten", "John"];
let teamRoles = [
  "Project Manager",
  "Business Analyst",
  "Tech Analyst",
  "Quality Analyst",
];

// Gather team members' names and roles using prompts
for (let i = 0; i < numRoles; i++) {
  const name = prompt(`Enter the name of team member ${i + 1}:`);
  const role = prompt(`Enter the role of team member ${i + 1}:`);
  teamNames.push(name);
  teamRoles.push(role);
}

// Log each team member's name and role using a for loop
for (let i = 0; i < teamNames.length; i++) {
  const name = teamNames[i];
  const role = teamRoles[i];
  console.log(`Hello, my name is ${name} and I am the ${role}`);
}

/// let the prompt be team 4 Innovation Squad!!!

/// for loops
