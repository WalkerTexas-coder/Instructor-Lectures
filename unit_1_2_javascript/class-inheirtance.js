
// Key Words:
// Parent Class
// Child Class
// extends
// super()

// What is class inheritance ? 
// Y'all just got done with some of the challenges and if you made it to the latte section you probably had the experiance of copying and pasting the code and making a few alterations to fit your latte class. This is a known issue with classes repeating yourself in code can be a very heavy price to pay when you are talking about large amounts of code. There is actually a coding philoshopy called D.R.Y. - Don't Repeat Yourself. What would be better is if we didn't have to repeat ourselves but we could instead inheirt the code into a newer and more unique class. The answer to the problem of repition in OOP is inheritance.  

// Class inheritance is an issue of relationship. Parents always flow down to children. We can use this to our advantage as developers and set up parent classess that do everything we need all the children to do but nothing too specific.


//          
//          Coffee
//         /       \
//  Drip Coffee    Espresso
//                    \
//                   Latte





// So here we have our Parent class: a class that calls constructor and lays out he base levels of information and methods
class Coffee {
  constructor(coffeeOrigin) {
    this.origin = coffeeOrigin;
  }
  info() {
    return `This coffee is from ${this.origin}`;
  }
}

let ethiopian = new Coffee("Ethiopia");
console.log(ethiopian.info);

// ____________________________________________


// Child class : a class that will inheit from a parent class and define its own unique information and methods on top of it's parents
// extends: is a javascript keyword that defines the relationship between the two classes. The child extends the parent
class DripCoffee extends Coffee {
  constructor(coffeeOrigin) {
      super(coffeeOrigin);
      //super - within in the constructor method we call super() which passes the attributes In this case the coffee origin from the constructor in the parent class. 
    this.isFresh = true;
  }
  wait() {
    this.isFresh = false;
  }
  drink() {
    return this.isFresh ? 
        `A fresh pot of ${this.origin} coffee` :
        `An old warm pot of ${this.origin} coffee`;
  }
}

let foldgers = new DripCoffee("foldgers");
console.log(foldgers);
console.log(foldgers.drink());
foldgers.wait();
console.log(foldgers.drink());




// ____________________________________________





class Espresso extends Coffee {
  constructor(coffeeOrigin, numberOfShots) {
    super(coffeeOrigin);
    this.shots = numberOfShots;
  }
  espressoInfo() {
    if (this.shots === 1) {
      return `Your single shot ${this.origin} is ready`;
    } else if (this.shots > 1) {
      return `Your ${this.shots} of ${this.origin} is ready`;
    } else {
      return "Sorry I didn't catch that: Did you want 1 or 2 shots?";
    }
  }
}



// ____________________________________________






class Latte extends Espresso {
  constructor(coffeeOrigin, numberOfShots, milkType) {
    super(coffeeOrigin, numberOfShots);
    this.milk = milkType;
    this.isFoamy = false;
  }
  steamTheMilk() {
    this.isFoamy = true;
    return "pssssphhhhttt";
  }
  makeLatteArt() {
    return this.isFoamy ? "Beautiful Latte Art" : "Please steam the milk first";
  }
}

let petes = new Latte("colombia", 2, "nonfat");
console.log(petes);
console.log(petes.makeLatteArt());
