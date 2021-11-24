//LAYER 1
class Squirrel {
constructor(){
    this.numberOfNuts = 0
  }
    findANut(){
    this.numberOfNuts++;
  }
}


var surferSquirrel = new Squirrel()

console.log(surferSquirrel);

// console.log(typeof surferSquirrel);
// console.log(typeof Squirrel());

// surferSquirrel.findANut()
// surferSquirrel.findANut()
//
// console.log("surferSquirrel number of nuts", surferSquirrel.numberOfNuts);


//----------------------------------------------------------

//LAYER 2
// class Squirrel {
          NAME IS DIFFERENT
// constructor(name){
//     this.name = name
//     this.numberOfNuts = 0
//     this.inATree = false
//   }
//   findANut(){
//     this.numberOfNuts++;
//   }

THIS IS DIFFERENT
  findNutStash(){
    let stash = Math.ceil(Math.random() * 20);
    this.numberOfNuts += stash
  }
  eatANut(){
    this.numberOfNuts--;
  }
  climbATree(){
    this.inATree = true
  }
  jumpOutOfATree(){
    this.inATree = false
    return "Swoosh"
  }
  throwANutAtSomeone(){
    this.numberOfNuts--;
    return "bonk";
  }
// }
NEW LOGS
// var pirateSquirrel = new Squirrel("Jack Burrow")
// pirateSquirrel.findNutStash()
// console.log(pirateSquirrel.numberOfNuts);
// console.log(pirateSquirrel.throwANutAtSomeone());
// console.log(pirateSquirrel.numberOfNuts);

//----------------------------------------------------------
HOW TO USE CLASS OBJS LIKE OTHER DATA TYPES
  var squirrels = []
  // pushes new squirrel objects into the array
  squirrels.push(new Squirrel("Alvin"))
  squirrels.push(new Squirrel("Rocky"))

  // accessing the object at array index 0
  squirrels[0].findANut()
  squirrels[0].findANut()

  // mapping over array to access the information from the squirrels array
  squirrels.map((value, index) => {
    console.log(`The squirrel at index ${index} named ${value.name} has ${value.numberOfNuts} nuts.`)
  })
//----------------------------------------------------------
//
class PetUser{
  constructor(name, age, type, email, size){
    this.name = name;
    this.age = age;
    this.type = type;
    this.email= email
    this.size= size
  }
  petProfile(){
    return `${this.name} is a ${this.size}${this.type} and is ${this.age} years old. ${this.name}'s email is ${this.email}`
  }
}
//
// var sheldon = new Pet("Sheldon", 2, dog, "booger@snailmail.com")
//
// console.log(sheldon.petProfile());
//----------------------------------------------------------
//LAYER 3
// class Squirrel {
HERE WE ARE DEFINING OUR DEFAULT PARAMETERS
// constructor(name="Anonymus Squirrel", inATree=false){
//     this.name = name
//     this.numberOfNuts = 0
//     this.inATree = inATree
//   }
//   findANut(){
//     this.numberOfNuts++;
//     }
//   findNutStash(){
//     let stash = Math.ceil(Math.random() * 20);
//     this.numberOfNuts += stash
//     }
//   eatANut(){
//     this.numberOfNuts--;
//     }
//   climbATree(){
//     this.inATree = true
//     }
//   jumpOutOfATree(){
//       this.inATree = false
//       return "Swoosh"
//     }
//   throwANutAtSomeone(){
//       this.numberOfNuts--;
//       return "bonk";
//     }
HERE WE ARE MAKINGA CURRENT STATUS REPORT
//   currentStatus(){
//     return `${this.name} has ${this.numberOfNuts} nuts & is ${this.inATree? "in a tree": "not in a tree"}`
//   }
// }
// //
//
// var texasSquirrel = new Squirrel("Sandy Cheeks", true)
// var scientistSquirrel = new Squirrel("Rick Squirlchez", true)
// var pirateSquirrel = new Squirrel("Jack Burrow", false)
//
HERES SOME LOGS TO PLAY WITH
// pirateSquirrel.findNutStash()
// console.log(pirateSquirrel.throwANutAtSomeone());
// scientistSquirrel.findNutStash()
// scientistSquirrel.eatANut();
// console.log(scientistSquirrel.jumpOutOfATree());
// pirateSquirrel.eatANut();
// pirateSquirrel.climbATree();
//
//
// console.log(scientistSquirrel.currentStatus());
// console.log(pirateSquirrel.currentStatus());
// console.log(texasSquirrel.currentStatus());
//
// LAYER 4
// class Squirrel {
// constructor(name="Anonymus Squirrel", inATree=false){
//     this.name = name
//     this.numberOfNuts = 0
//     this.inATree = inATree
RECORD
//     this.record = []
//   }
//   findANut(){
//     this.numberOfNuts++;
RECORD
//     this.record.push('found a nut')
//   }
//   findNutStash(){
//     let stash = Math.ceil(Math.random() * 20);
//     this.numberOfNuts += stash
RECORD
//     if (stash === 1) {
//       this.record.push(`found ${stash} nut`)
//     }
//     else {
//       this.record.push(`found ${stash} nuts`)
//     }
//   }
//   eatANut(){
//     this.numberOfNuts--;
RECORD
//     this.record.push('ate a nut')
//   }
//   climbATree(){
//     this.inATree = true
RECORD
//     this.record.push('climbed a tree')
//   }
//   jumpOutOfATree(){
//     this.inATree = false
RECORD
//     this.record.push('jumped out of a tree, swoosh')
//   }
//   throwANutAtSomeone(){
//     this.numberOfNuts--;
RECORD
//     this.record.push('threw a nut at someone, bonk')
//   }
THIS METHOD WILL PUSH THINGS INTO AN ARRAY AND GIVE US A HISTORY OF OUR OBJS
//   pastActions(){
//     if (this.record.length > 0){
//        return `${this.name} ${this.record.join("; then ")}.`
//     }
//     else{
//       return `Make ${this.name} do something`
//     }
//   }
//   currentStatus(){
//     return `${this.name} has ${this.numberOfNuts} nuts & is ${this.inATree? "in a tree": "not in a tree"}`
//   }
// }

// var texasSquirrel = new Squirrel("Sandy Cheeks", true)
// var scientistSquirrel = new Squirrel("Rick Squirlchez", true)
// var pirateSquirrel = new Squirrel("Jack Burrow", false)

// pirateSquirrel.findNutStash()
// pirateSquirrel.throwANutAtSomeone();
// scientistSquirrel.findNutStash()
// scientistSquirrel.eatANut();
// scientistSquirrel.jumpOutOfATree();
// pirateSquirrel.eatANut();
// pirateSquirrel.climbATree();

// console.log(scientistSquirrel.pastActions());
// console.log(pirateSquirrel.pastActions());
// console.log(texasSquirrel.pastActions());


// WHAT ARE THE BIG TAKEAWAYS from the topic of CLASSES
  //classes are not objects -- they are blueprints of objects
  //instantiaed classes have properties that
      // are accessed through the name of the instantiation
      // or if we are coding in the class by using the keyword "this"
  //classes are instantiated with the keyword "new"
  //classes use methods to agument the data of the object that they are (++) ||
      // or to interact with other code
  //we call upon methods by using dot notation w/ the name of the instantiation + the name of the method + ()
  //
