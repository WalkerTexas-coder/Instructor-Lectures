// Data Types
// Primitive - cannot be broken down any further
// Number
// String
// Boolean
// Undefined
// Null
// Symbol - unique identifiers

// Array - collection
// Object - data type anything that is a collection

// CSS:
// h1 {
//   color: "purple"
// }

// [2, 3, 4, 5] - in an array, I can get one piece of info by referencing the index

// Object structure - {} with key:value pairs

// {key1: "value1", key2: "value2", key3: "value3"} - in an object I can get back one piece of info by referencing the key

  // The key is a data type of symbol and the value is any valid data type in JavaScript.

const pets = { stephen: "Absalom", michael: "Chispita", jorge: "Yogi" }

// console.log(pets)  --> full object
// to get one item - name of the object and the key

// Property accessors
  // dot notation - helpful when we know our keys and the are exposed in our code
    // console.log(pets.michael) --> "Chispita"
    // console.log(pets.stephen) --> "Absalom"

  // Bracket notation - helpful when we don't know they keys or they are changing (i.e. for loops)
    // console.log(pets["jorge"]) --> "Yogi"

// object with additional objects as values are called nested objects
  const texasBBQ = {
    drink: "texas tea",
    appetizer: "Homemade bread",
    meal: {
      firstRound: ["pork ribs", "brisket", "pulled pork"],
      secondRound: "Beef Ribs"
    },
    dessert: {
      iceCream: "Blue Bell Vanilla",
      pie: "Banana Cream"
    }
  }

  // use dot notation to access each item and showcase its data / data type



  // Destructuring - attaching a pathway to a key
    // SUPER HELPFUL in React
  const { pie } = texasBBQ.dessert


  // Methods - a functions that belong to an object (class)
    // Objects can hold data as well as behavior (function)
    // To reference a value - name of the object and the key
    // this - a keyword in JavaScript that is a reference to object that code is inside of

  const numberObj = {
    num1: 5,
    num2: 10,
    num3: 15,
    addUp: function () {
      return this.num1 + this.num2 + this.num3
    }
  }

  // console.log(numberObj.num1)
    // console.log(numberObj.addUp) - will return the function
    // console.log(numberObj.addUp()) - will execute the function


  const petsAgain = [
    { name: "Absalom", age: 1, type: "dog" },
    { name: "Chispita", age: 7, type: "dog" },
    { name: "Yogi", age: 10, type: "dog" },
    { name: "Bently", age: 1, type: "cat" }
  ]
  // console.log(petsAgain)
  // console.log(petsAgain.length)
  // console.log(petsAgain[1]) // { name: 'Chispita', age: 7, type: 'dog' }
  // console.log(petsAgain[2].name)

//Pseudo code: 
  //Make a function that iterates through the array of objects and returns an array of only the names of each pet
    // create a function named pet names
      // function takes an array as an argument
    //since we are using an array and we want all the names we can use a map
      // create a local variable for the mapped array
        // mappedArrayNames will use the key of name to return 


    const petNames = (array) => {
      return array.map(value => {
        return value.name
      })
    }
    // console.log(petNames(petsAgain))
    // --> [ 'Absalom', 'Chispita', 'Yogi', 'Bently' ]

    // map and filter can take the parameters of value, index, array

    const onlyDog = (array) => {

      return array.filter(value => {
        return value.type === "dog"
      })
    }
    console.log(onlyDog(petsAgain))


  // JSON
    // How to transmit data across the web
    // Javascript Object Notation



     //output:
                      // {
                      //   drink: 'Texas Sweet Tea',
                      //     appetizer: 'Mac and Cheese',
                      //       meal: {
                      //     firstRound: ['ribs', 'pulled pork', 'chicken', 'Brisket'],
                      //       secondRound: ['burger', 'pulled chicken', 'coleslaw']
                      //   },
                      //   dessert: {
                      //     iceCream: 'Vanilla Ice cream', pie: 'Apple Pie'
                      //   }
                      // }