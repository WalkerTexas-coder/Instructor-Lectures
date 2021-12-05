// Javascript Conditionals
// if this then that
// transactional - logical
// While
// under a certain condition I want something specific to happen
// keywords that determine our conditionals
// if
// else
// else if

// Three pieces
//  keyword --> if
//  evalutaion container --> ()
//  logic container --> {}

// all together --> if(this is true){then do this}
// if(6 > 4){
//     console.log("This is true")
// }

// if(10 !== "10"){
//     console.log("this is false")
// }
// if (10 == "10") {
//   console.log("this is false");
// }

// else does not have an evaluation statment
// if(this is true){
// then do this
// } else {
// do this
// }
// if(4 > 6){
//     console.log("This is true")
// } else {
//     console.log("The first number must be smaller");
// }

// Decision tree
// var warrenNumber = 33
// var samNumber = 7

// if(warrenNumber > samNumber){
//     console.log("Warren is the winner!");
// } else {
//     console.log("Samantha is the winner!");
// }

// var warrenNumber = Math.floor(Math.random * 10);
// var samNumber = Math.floor(Math.random * 10);

// if (warrenNumber > samNumber) {
//   console.log("Warren is the winner!");
// } else if(samNumber > warrenNumber){
//     console.log("Samantha is the winner!");
// } else {
//   console.log("It's a tie");
// }

// string interporlation
// back ticks instead of quotes
// dollar sign and curly brackets
// ${variables go in here}

// var myCohort = true
// var myCohort = null
// var myCohort = 2021

// var myCohort = "2021 Echo";

// if(myCohort === "2021 Echo"){
//     console.log(`Pat yourself on the back ${myCohort} you're the best cohort`);
// } else {
//     console.log(`${myCohort} probably a meh cohort`);
// }

var myCohort = "2021 Delta";

// if (myCohort === "2021 Echo") {
//   console.log(`Pat yourself on the back ${myCohort} you're the best cohort`);
// } else {
//   console.log(`${myCohort} probably a meh cohort`);
// }

// console.log(myCohort + myCohort);
// console.log(myCohort.concat( myCohort));

var bananas = 10;
var oranges = 2;

if (bananas > 5 && oranges > 10) {
  console.log("thats a lot bananas & oranges");
} else if (oranges > 10) {
  console.log("thats a ton oranges");
} else if (bananas > 5) {
  console.log("thats a lot bananas");
} else {
  console.log("what do you have?");
}
