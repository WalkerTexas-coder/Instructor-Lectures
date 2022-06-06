
// Key Words:
// instantiate / instance -In a computer system, any time a new context is created based on some model, it is said that the model has been instantiated. In practice, this instance usually has a data structure in common with other instances, but the values stored in the instances are separate. 
// Parent Class
// Child Class
// extends
// super()

// What is class inheritance ? 
// Y'all just got done with some of the challenges and if you made it to the latte section you probably had the experiance of copying and pasting the code and making a few alterations to fit your latte class. This is a known issue with classes repeating yourself in code can be a very heavy price to pay when you are talking about large amounts of code. There is actually a coding philoshopy called D.R.Y. - Don't Repeat Yourself. What would be better is if we didn't have to repeat ourselves but we could instead inheirt the code into a newer and more unique class. The answer to the problem of repition in OOP is inheritance.  

// Class inheritance is an issue of relationship. Parents always flow down to children. We can use this to our advantage as developers and set up parent classess that do everything we need all the children to do but nothing too specific.


//          
//          Animal
//         /       \
//      Reptile   Mammal
//                  /  \
//              Ursus   Marsupial
//              /           \     \
//         Polar Bear      quokka     kangaroo



// So here we have our Parent class: a class that calls constructor and lays out he base levels of information and methods

// ____________________________________________


// Child class : a class that will inheit from a parent class and define its own unique information and methods on top of it's parents
// extends: is a javascript keyword that defines the relationship between the two classes. The child extends the parent

    //super - within in the constructor method we call super() which passes the attributes In this case the coffee origin from the constructor in the parent class. 


// ____________________________________________


// Parent Class: the Generic version of a class that has all the data and behavior that is common to all child classes
// Child Class: the specific version of the parent class that has features that other child classes do not. 
// extends: the key word to class inheritance in javascript
// super(): a method that calls upon the Parents constructor method and passess it arguments in the same order the super() recieved them. 

//          Class relationship tree
//                Animal
//                  / \
//            Mammal Reptile

class Animal {
  constructor(nameParam) {
    //    Data
    //     v
    this.name = nameParam
    this.isAlive = true
    this.age = 0
  }
  //  Behavior
  //    v
  reproduce() {
    return `Make a bunch of little ${this.name}'s`
  }
  accident() {
    this.isAlive = false
  }
  birthday() {
    this.age = this.age + 1
  }
}

let frogThing = new Animal("Mudskipper")

// console.log(frogThing)
// frogThing.birthday()
// console.log(frogThing)
// console.log(frogThing.reproduce())


//           New Key Word
//              v
class Reptile extends Animal {
  constructor(nameParamInTheChild, venomousParam) {

    //   New Key Word
    //     v
    super(nameParamInTheChild)
    this.isVenomous = venomousParam
  }
  reptileInfo() {
    return `Your Reptile's name is ${this.name}. ${this.name} is ${this.age} years old. Is ${this.name} venomous? ${this.isVenomous} `
  }
}

let snek = new Reptile("Black Mamba", true)
let shellPower = new Reptile("Snapping Turtle", false)

// console.log(snek)
// console.log(shellPower)
// shellPower.birthday()
// console.log("turtle after the birthday", shellPower)
// console.log(shellPower.age) // <-- logging a key in an object to recieve the value
// console.log(shellPower.reptileInfo())


class Mammal extends Animal {
  constructor(name, aquaticTypeParam, fuzzyParam = true) {
    super(name)
    this.isWarmBlooded = true
    this.isFuzzy = fuzzyParam
    this.isAquatic = aquaticTypeParam
  }

  movement() {
    if (this.isAquatic === true) {
      return "Just keep swimming"
    } else {
      return "you should hop through some fields"
    }
  }
}

let theCutest = new Mammal("Quokka", false)
console.log(theCutest)
theCutest.birthday()
console.log(theCutest.age)
console.log(theCutest.name, theCutest.movement())