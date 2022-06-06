// JavaScript Higher Order Functions 12/7/2021

    Things I wish I did better last time: 
    Pseudo code out ideas
    Create flags for variables

What is: 
- A function? 
- iteration



```javascript
.forEach()
.map()
.filter()

.forEach

myArray.forEach(value => {
  console.log("flag ",value * 3)
})

value is just a parameter

myArray.forEach(banana => {
  console.log("flag ", banana * 3)
})

Passing two parameters needs to be wrapped in parens

myArray.forEach((value, index) => {
  console.log("value:", value * 3)
  console.log("index:", index)
})

value is the first parameter, index is the second

myArray.forEach((value, banana) => {
  console.log("value:", value * 3)
  console.log("index:", banana)
})

index cannot be accessed as the first parameter, this doesn't work

myArray.forEach((index) => {
  console.log("index:", index)
})

If I only care about the index, I still have to pass value

myArray.forEach((v, index) => {
  console.log("index:", index)
})

Third optional argument for higher order functions

myArray.forEach((value, index, array) => {
  console.log("value:", value)
  console.log("index:", index)
  console.log("array:", array)
})

let myArray = [2, 3, 4, 5]

myArray.forEach((value, index, array) => {
  console.log("value:", value)
  console.log("index:", index)
  console.log("array:", array)
})

________________________________________
________________________________________

>Cool with that let's take a break 
________________________________________
________________________________________


>So forEach works on an array by using dot notation and taking three arguments. The three arguments are what? 
  value - which access the data at each index
  index - which gives us the number of each index
  array - which lets us see the whole array for each item in the array


> There are two other HoF you need to know about and we will work with on a very regular basis.  
.map() - built in method, works on arrays, iterates, takes value, index, array as parameters, 
map always returns an array of the same length as the one you started with. 



> lets use map to multiply a some numbers by 3 
> we'll start this off by setting up a variable named mult3  and assigning that variable to an array with dot map appended on to it
> then in our map we will return our parameter of value multiplied by 3

let multThree = [3, 4, 5, 6].map(value => {
  return value * 3
})

console.log("flag ",multThree)


> when we log this we will get an array the same length as the one we started with by with the values that we asked for


> okay same exact thing but this time let's set that array from ealier to it's own variable and use that var name to create our map
let myArray = [3, 4, 5, 6]
console.log("flag ",myArray)
let multThree = myArray.map(value => {
  return value * 3
})


console.log("flag ",myArray) // [3, 4, 5, 6]
console.log("flag ",multThree) // [9, 12, 15, 18]


```
ALright another example here of using map but this time in our code block we are going to set up multiple conditional statements 

```javascript
let myNumbers = [4, 5, 6, 7, -9]

let evenOrOdd = myNumbers.map(value => {
  if(value % 2 === 0){
    "even"
  } else if(value % 2 !== 0){
    "odd"
  } else {
    "not a number"
  }
})
console.log("flag ",evenOrOdd)
--> [ undefined, undefined, undefined, undefined, undefined ]

> So we have an arrow inside our map which means we have function. 
This function is only giving us undefined even though we clearly have some code set up in there. What are we missing? 
Functions need returns or the data will be undefined
primitive data type - variable that has been declared but not given a value



let evenOrOdd = myNumbers.map(value => {
  if(value % 2 === 0){
    return "even"
  } else if(value % 2 !== 0){
    return "odd"
  } else {
    return "not a number"
  }
})
console.log("flag ",evenOrOdd)
all functions need a return
--> [ 'even', 'odd', 'even', 'odd', 'odd' ]


.filter() - higher-order function, iterates, acts on arrays, take parameters value, index, array in that exact order, returns an array, built in conditional, filter makes a decision about every item in the array

filter is looking for a Boolean value, what is true will be included and what is false will be ignored

filter will always try to return to us an array shorter than the original array. 

let myNumbers = [4, 5, 6, 7, -9]

let onlyOdds = myNumbers.filter(value => {
  return value % 2 !== 0
})
console.log("flag ",onlyOdds)


let myArrayOfStuff = [6, 4, 5, true, false, 1000, "hello", "yo", null, 5]

let onlyNumbers = myArrayOfStuff.filter(value => {
  return typeof value === "number"
})
console.log("flag ",onlyNumbers)
--> [ 6, 4, 5, 1000, 5 ]

    Didn't do these examples
    Create a function that takes in an array and returns an array of only numbers:

    const onlyNumbersFunction = (array) => {
      return array.filter(value => {
        return typeof value === "number"
      })
    }


    Create a function that takes in an array and returns a specific data type as determined by the dev

    const typeSelector = (array, type) => {
      return array.filter(value => {
        return typeof value === type
      })
    }

// prompt: create a function that takes in an array and returns the word 'odd' for every odd number
// create function called gettingOdds (done)
// parameter - array (done)
// filter out non-numbers (done)
// filter out even numbers (done)
// iterate over the remaining array and return the word "odd" instead of the number (done)

let myArrayOfStuff = [6, 4, 5, true, false, 1000, "hello", "yo", null, 5]
// ["odd", "odd"]

const gettingOdds = (array) => {
  let onlyOneType = array.filter(value => {
    return typeof value === "number" && value % 2 !== 0
  })
  // cool one liner
  return onlyOneType.map(value => "odd")
}
console.log("flag ", gettingOdds(myArrayOfStuff))



// Syntactical sugar - wrappers over code functionality that make the language sweeter
>For example, many programming languages provide special syntax for referencing and updating array elements
>A construct in a language is syntactic sugar if it can be removed from the language without any effect on what the language can do: functionality and expressive power will remain the same.
> Language processors, including compilers and static analyzers, often expand sugared constructs into more fundamental constructs before processing, a process sometimes called "desugaring".

>Common error we are going to run into is 

Uncaught TypeError: true.toUpperCase is not a function
>that means we are not using the right kind of data to process even though we are trying too. 
Whatever you are calling your method on is not what you think it is, or the wrong thing

Built in methods - code snippets, popular actions
Built in methods - act on a particular data type, sometimes take more information as an argument


> Can y'all give an example of a 
  > string method?
  > array method?

Functions - preforms an action, tiny code machines
encapsulation - code inside the function doesn't know anything about the rest of the code, the rest of the code doesn't know about the inner workings of the function
parameter - placeholder for the argument
argument - inputs, actual value
code block - set of instructions, action taking place

**Iteration - repeating an action a certain number of times or until a requirement is met

What data types can you perform iteration on?
- Array
- String
- Both strings and arrays have indexes and length
- Objects (also have iterable properties)

Arrays - predictable, great for storing and accessing data

Higher-order functions - a subcategory of built in method that are called on arrays and used for iteration
> HoF's are names as such because they are methods that take functions as one of their arguments. 

WAY MORE EFFICIENT THAN FOR LOOPS!