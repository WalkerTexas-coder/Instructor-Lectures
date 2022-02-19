// This is why arrays are so useful! Instead of having multiple car variables, we can have one
// varariable with holding multime elements, in this case cars, by using an array.

var car1 = "Ford";
var car2 = "Jeep";
var car3 = "Hyundai";

// We need something to hold all these cars!


var cars = ["Ford", "Jeep", "Hyundai"];

// so here we go 


//  VALUE
// "Ford" is a value
// "Jeep" is a value
// "Hyundai" is a value

console.log(cars);
//____________________________________________________________

// Variables Value
console.log(car1);
console.log(car2);
console.log(car3);

var cars = [car1, car2, car3]

console.log(cars);


//____________________________________________________________
// INDEX

// [i] is like an address for an array
// so we can imagine an array looks like this

//                 i
//                 0         1         2      3       4      5       6      7      8      9
var arrayRhyme = ["enie", "meanie", "minie", "mo", "catch", "a", "tiger", "by", "its", "toe"]

//____________________________________________________________

//ACCESSING ELEMENTS


console.log(arrayRhyme[0]);
console.log(arrayRhyme[1]);
console.log(arrayRhyme[2]);
console.log(arrayRhyme[3]);
console.log(arrayRhyme[4]);

//____________________________________________________________

//ACCESSING ELEMENTS using Variables
var i = 5

console.log(arrayRhyme[i]);
i++
console.log(arrayRhyme[i]);
i++
console.log(arrayRhyme[i]);
i++
console.log(arrayRhyme[i]);
i++
console.log(arrayRhyme[i]);

//____________________________________________________________
//CHANGING  ELEMENTS
const LOOK UP CONST


var seasonArray = ["spring", "summer", "fall", "winter"]
console.log(seasonArray);


seasonArray[0] = "pre-summer";
seasonArray[2] = "spooky summer";
seasonArray[3] = "Hell frozen over";

console.log(seasonArray);
//____________________________________________________________

// Length Property

var superHeroArray = ["Superman", "Spiderman", "Deadman", "Moon Knight"]

console.log(superHeroArray.length);

//____________________________________________________________

//BUILT IN METHODS


// MUTATORS - push()

// Let's use the method push to push two new values into the end of our array
var myColorsArray = ["red", "green", "blue"]
var studentsArray = ["Galadoe", "Marcelo", "Todd"]
students.push("Laurlyn", "Alfonso")
console.log(students)
myColors.push("black", "teal")
console.log(myColors)
console.log(myColors.length)
//____________________________________________________________

// MUTATORS- .pop()
// Removes the last value in an array
// Notice how this method does not take an argument!
students.pop()
console.log(students);
myColors.pop()
// Console log it! Teal is gone.
console.log(myColors)
//____________________________________________________________

// MUTATORS- .shift()
// Removes the value at the zeroth index of the array
students.shift()
console.log(students);
// Notice again how this method does not take an argument!
myColors.shift()
// Console log it. Red is gone AND teal is also not there because this method is a mutator!
console.log(myColors)
//____________________________________________________________

// MUTATORS- .unshift(value)
// Adds a value to the beginning of an array
// This method does take an argument
students.unshift("Chris")
console.log(students)
myColors.unshift("magenta")
console.log(myColors)

//____________________________________________________________


// MUTATORS- .reverse()
// Reverses the order of the values in an array
// Notice again how this method does not take an argument!
students.reverse()
console.log(students)
myColors.reverse()
console.log(myColors)
//____________________________________________________________

// ACCESORS .indexOf()
// Returns the index of the first instance of a given value
console.log(myColors.indexOf("blue"))
console.log(students.indexOf("Chris"))

//____________________________________________________________

// ACCESORS join("")
// Converts all values in an array to a string
var myName = ["p", "r", "i", "s", "c", "i", "l","a"]
console.log(myName.join("     "))

//____________________________________________________________

// ACCESORS- .concat()
// Let's start by declaring two variables
// Merges two or more arrays to form one combined array
var letters1 = ["m", "o", "n"]
var letters2 = ["d", "a", "y"]

console.log(letters1.concat(letters2))

//____________________________________________________________

// Strings to Arrays
var learnStudents = "Yanxu Milton Chris Trey"

console.log(learnStudents.split());
console.log(learnStudents.split(""));
console.log(learnStudents.split(" "));
console.log(learnStudents.split("a"));

var splitNames = learnStudents.split(" ")
console.log(splitNames);
console.log(learnStudents);
//____________________________________________________________
// And Back to strings
var learnStudents = ["Yanxu", "Milton", "Chris M", "Trey"]

console.log(learnStudents.join());
console.log(learnStudents.join(""));
console.log(learnStudents.join(" "));
console.log(learnStudents.join("-"));
var joinedNames = learnStudents.join(" ")
console.log(joinedNames);
console.log(learnStudents);
//____________________________________________________________
// Array Destructuring
var [month, day, time] = ["May", "Wedneday", "2:30 PM"]
console.log(month)
//____________________________________________________________
var [firstName, lastName] = ["Bruce", "Wayne"]
console.log(firstName)
console.log(lastName)