// Javascript Functions 12/6/21



// Anatomy of a function
    // es5 function nameOfFunction(parameter){}
    //es6 () => {}

// For our stack - arrow functions, what we will be using in React

// 1) variable declaration --> const
// 2) name - camelCase, descriptive --> myFunction
// 3) assignement opperator --> = 
// 4) parentheses, indicate action, hold paramters --> () or (data)
// 5) arrow syntax, indicating a custom function --> =>
// 6) curly brackets, code block --> {}
// 7) return, keyword in JavaScript, indicate the output --> return

    // const pseudoFunction = 
    
    // (parameter) => {
    //     <executable code>
    //     return <final result>
    // }

// Basic function:
const makeDonut = () => {
  return "Donut is made"
}

// // call/invoke the function
// // without the return keyword it will output undefined



// // Function with an input:
// // Parameter - function input // a local variable

//                 parameter
//                    v
const makeDonut = (doughType) => {
//           parameter
//               v
  return `A ${doughType} donut is made`;
}

// // Pass info into the function call - passing an argument
//           functionName(argument)

//                  argument
//                      v
console.log(makeDonut("plain"))
console.log(makeDonut("blueberry"))
console.log(makeDonut("chocolate"))
console.log(makeDonut("espresso"))
console.log(makeDonut())


// Donut maker function will take the type of coffee and a number of donuts and will tell you a price

// plain 1 = $1
// old fashioned  6 = $6
// sprinkels 12 = 10$

// output - name of the Donut and the price

// Pseudo coding:
// - input - doughType, donutNumber
// - output - string interpolation with doughType and the price
// - conditional statement - make an evaluation about the donutNumber and use it to determine a price
// - if donuts are under twelve each donut costs $1
// - 12 donuts cost $10 
// - else to catch edge cases and errors


//     name       paramter1  paramter2  arrow  curly
const makeDonut = (doughType, donutNumber) => {
  if (donutNumber === 1) {
    return `1 ${doughType} donut will cost you $1`;
    // pause and run this code once here
} else if (donutNumber < 12) {
    return `${donutNumber} ${doughType} donuts will cost you $${donutNumber} `;
} else if (donutNumber === 12) {
    return `A dozen ${doughType} donuts will cost you $10 `;
} else if (donutNumber > 12) {
    return `${donutNumber} ${doughType} donuts will cost you $${donutNumber - 2} `;
} else {
    return `That must be a lot of donuts.. or something went wrong. Check you inputs `;
}
};
console.log(makeDonut("latte", 1))
console.log(makeDonut("latte",4))
console.log(makeDonut("mocha", 12))
console.log(makeDonut("mocha", 300))
// --> You def need coffee. Check your input.


// Another way to declare a function:
// function makeCoffee(coffeeType){
//   return `${coffeeType} is made.`
// }


// Vocab:
// - arrow synatx
// - parameter - placeholder variable
// - argument - passed into the function call
// - call/invoke - triggering the function to run
// Functions - reusable, functions produce an output
// Functions - should be neutral 
// Functions - should be dynamic 

// Encapsulation - code should only have access to information that the developer decides, predictable behavior
// Functions should only have data that have been passed into the code via the argument 