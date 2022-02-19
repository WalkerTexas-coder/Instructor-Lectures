// Functions, Loops, Arrays 9/14/2021

// Iteration - process or action that repeats until a condition is met

// Function - reusable
// Input - array of numbers
// Multiply each number by 5
// Output - array of numbers that have been mult by 5

// var numsArray = [2, 3, 4, 5, 6];

// // This didn't work: NaN
// const mult5 = (array) => {
//   return array * 5
// }

const mult5 = (array) => {
  let numbersMultBy5 = []
  for(let i=0; i<array.length; i++){
    numbersMultBy5.push(array[i] * 5)
    console.log(numbersMultBy5)
  }
  return numbersMultBy5
}
console.log(mult5(myArrayOfNums))
console.log(mult5([2, 3, 4]))



var coffeeOrders = [
  "black coffee",
  "pumpkin spice",
  "ethiopian",
  "hazelnut",
  "decaf",
  "espresso",
];

// create a function take in an array of strings
// iterate - for loop
// output - string interpolation to make each string into a sentence

const beverageOrder = (array) => {
  let orders = [];
  for (let i = 0; i < array.length; i++) {
    orders.push(`I would like to order ${array[i]}`);
  }
  return orders;
};
console.log(beverageOrder(coffeeOrders));

// Randomizes checkin/checkout roster and accounting for instructors and previously late students

var instructor = ["Austin", "Sarah"]; // does not randomize instructors
var late = ["Kevin"]; // add previously late student(s) to be "randomly" chosen to go first, verify spelling is consistent

// student names in no particular order
var cohortStudents = [
  "John",
  "Gluay",
  "Antonio",
  "Kevin",
  "Demetrius",
  "Joshua",
  "Mikka",
  "Francisco",
  "Jason",
  "Samantha",
  "Noah",
  "Raul",
  "Salvador",
  "Yann",
  "Christopher",
  "Warren",
  "Hannah",
  "Deon",
  "Kirk",
  "Pavan",
  "Robert",
  "Regina",
];

// randomizes cohortStudents array
const randomizeArray = (array) => {
  for (let i = 0; i < array.length; i++) {
    //each student as set by the current poistion - establishing a level of abstraction between them.
    let student = array[i];
    // random number holder
    let randomIndex = Math.floor(Math.random() * array.length);
    // reset the current poistion to a random student
    array[i] = array[randomIndex];
    // set that random student to the current student 
    array[randomIndex] = student;
  }
    //give us back a the new shuffled array
  return array;
};

// takes names in late array and removes them from cohortStudents array
const lateStudent = (lateStudentArray) => {
  for (let i = 0; i < lateStudentArray.length; i++) {
    var index = cohortStudents.indexOf(lateStudentArray[i]);
    cohortStudents.splice(index, 1);
  }
  return lateStudentArray;
};

// concatenates but keeps late students first and instructors last
var checkIn = lateStudent(late).concat(
  randomizeArray(cohortStudents).concat(instructor)
);

// logs to console for easy copy and paste
for (let i = 0; i < checkIn.length; i++) {
  console.log(checkIn[i]);
}
