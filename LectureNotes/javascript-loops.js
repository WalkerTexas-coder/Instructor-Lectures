// iteration: repetionion of a computational procedure

// for loop: a tool for itterating over a "iterable objects"

// i (index): the location of a  value in an array or Itterable object

// value: the individual data at an index--

// scope: When and how variables can be accessed

// local scope: variables called within a function

// let: a local variable declaration, local to the block of code it is called in. Some implications... cannot be read until the code block is initialized.

// global scope: variables called in the code base outside of functions,
// generally const and var


// Every for loop starts with --for--
// Inside of the parenthesis we are going to give it three things
// for(starting point, when to stop, how to run)

// Tell it where to start!
// Invoking
// For best pratice, define with let and i for index


// We use let because it allows us to mutate its value while at the same time can find it whithin the local scope

// We tell index to start at index of 0

// now we tell it where to end

// if i is less than 10, check to see if index is less than than 10,
// once it has reached 10 it can stop
// third we are going to tell it what it should do at each iteration


//____________________________________________________________


for(let  index = 0; index < 10; index +1){
  console.log(index);
}

//____________________________________________________________


for(let i = 10; i > 0; i--){
  console.log(i)
}

//____________________________________________________________

//                 i
//                 0         1         2      3       4      5       6      7      8      9
var arrayRhyme = ["enie", "meanie", "minie", "mo", "catch", "a", "tiger", "by", "its", "toe"]

 for (let index = 0; index < arrayRhyme.length; index++) {
    console.log(arrayRhyme[index]);
  }
//____________________________________________________________

var myArrayTwo = [10,20,30]

for(let i=0; i < myArrayTwo.length; i++){
  console.log(myArrayTwo[i] * 13)
}
//____________________________________________________________


var randomNums = [3,4,5,6,7,8]

for(let i=0; i < randomNums.length; i++){
  if(randomNums[i] % 2 !== 0){
    console.log(randomNums[i])
  }
}
//____________________________________________________________

// basic loop using an incrementing operator (++)
for(let i=0; i<3; i++) {
  console.log(i);
}
//____________________________________________________________

// loop without using console.log - instructions are still being run
for(let i=0; i<3; i++) {
  i = i + 3;
}

//____________________________________________________________

// basic loop using a decrementor (--)
for(let a=10; a>0; a--) {
  console.log(a);
}
//____________________________________________________________

// infinite loop - conditional is always true
for(let i=1; i<0; i++) {
  console.log(i);
}
//____________________________________________________________

for(let i=0; i<10; i++) {
  console.log("Hello!");
}
//____________________________________________________________

// scope

// iterating through a string
let letters = "Sheldon the Booger";

for(let i=0; i<letters.length; i++) {
  console.log(letters[i]);
}
//____________________________________________________________

// iterating through an array
let falalalas = ["fa", "la", "la", "laaaaa"];

for(let i=0; i<falalalas.length; i++) {
  console.log(falalalas[i]);

}
//____________________________________________________________

let evenNumbers = [0, 2, 4 ,6];
for(let i=0; i<evenNumbers.length; i++) {
  console.log(evenNumbers[i] * 5)
}

console.log(evenNumbers)
//____________________________________________________________

let someMoreNumbers = [0, 2, 3, 0, 5, 6, 0, 789, 4];
for(let i=0; i<someMoreNumbers.length; i++) {
  if (someMoreNumbers[i] !== 0) {
    console.log(someMoreNumbers[i]);
  }
}

//____________________________________________________________


const lmfao = (num) => {
  for (let index = 0; index < num; index++) {
    console.log("shots");
  }
  return "EVERBODY"
}
console.log(lmfao(6));

var arrayNums = [0,1,2,3,4,5,77,556,665,667]

const largest =(array)=>{
  let acc = 0
  for (let i = 0; i < array.length; i++) {
    if (acc < array[i]) {
      acc = array[i]
    };
  }
  return acc
}
console.log(largest(arrayNums));
