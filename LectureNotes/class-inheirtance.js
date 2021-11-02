// Yesterday we learned about Classes today we're going to add a layer to that cake -- with inheiritance.

// classes are plans/ blue prints /reciepes for an object
// If I have a reciepe for choclate chicp cookies how many cookies do I have?
// if I have a reciepe for choclate chip cookies how many cookies can I make?


// Key Words:
// extends
// Super()



//__________________________________________________
class Engine {
  constructor(numberOfCylinders=0, typeOfEngine) {
    this.oilLevel = 100;
    this.rpm = 0;
    this.cylinders = numberOfCylinders
    this.layout = typeOfEngine
    this.running = false
  }
  start() {
    this.rpm = 1000;
    this.running = true
  }

  stop() {
    this.rpm = 0;
    this.running = false
  }
}

// Here we are going to see the extends key word for the first time
// Whenever we are working in a class component and we see the extends key word we can know that the class we are in is a child class.
class SuperChargedEngine extends Engine{
    constructor(cylinders, hrspwrs=330){
      // next we are going to see the key word super. Super is a key word that passess all the attributes from the parent class into the child class.
      super(cylinders)
      this.hrspwrs = hrspwrs
    }
    revEngine(){
    this.running ? this.rpm = this.rpm + 500 : "Start your Engine"
      }
    }

    throttleDown(){
      this.rpm = this.rpm - 700
    }
}
var roots = new SuperChargedEngine(8, 500)

console.log(roots);
console.log(roots.rpm);
roots.start();
console.log(roots.rpm);
roots.revEngine()
console.log(roots.rpm);
roots.revEngine()
console.log(roots.rpm);
roots.revEngine()
console.log(roots.rpm);
roots.throttleDown()
console.log(roots.rpm);

var turbine = new SuperChargedEngine(4, 260)

turbine.start()
console.log("START YOUR ENGINES", turbine);
turbine.revEngine()
console.log(turbine);


class BakedGood {
  constructor(ingredients, time, ovenTemp=350){
    this.ingredients = ingredients
    this.time = time
    this.ovenTemp = ovenTemp
  }
  startBaking(){
    console.log("Follow the recipe and put the ingredientstogether in the right order before baking them");
  }
}

class Cookie extends BakedGood {
  constructor(ingredients, time, ovenTemp){
    super(ingredients, time, ovenTemp)
    this.isTastyRaw = true
  }
}

var choclatechipCookies = new Cookie(["brown sugar", "eggs", "flour", "choclate chips", "salt", "butter","vanilla", "baking soda"], "1.5 hours", 375)
