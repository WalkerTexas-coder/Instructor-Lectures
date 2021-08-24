// Yesterday we learned about Classes today we're going to add a layer to that cake -- with inheiritance.
// Key Words: 
// extends 
// Super()



//__________________________________________________
class Engine {
  constructor(cylinders=0) {
    this.oilLevel = 100;
    this.rpm = 0;
    this.cylinders = cylinders
    this.running = false
  }
  start() {
    this.rpm = 900;
    this.running = true
  }

  stop() {
    this.rpm = 0;
    this.running = false
  }
}


class SuperChargedEngine extends Engine{
    constructor(cylinders, hrspwrs){
      super(cylinders)
      this.hrspwrs = hrspwrs? hrspwrs : 330
    }
    accelerate(){
      if (this.running == true) {
        this.rpm = this.rpm + 700
      }
    }

    decelerate(){
      this.rpm = this.rpm - 700
    }
}
var roots = new SuperChargedEngine(8, 500)
console.log(roots);
console.log(roots.rpm);
roots.start();
console.log(roots.rpm);
roots.accelerate()
console.log(roots.rpm);
roots.accelerate()
console.log(roots.rpm);
roots.accelerate()
console.log(roots.rpm);
roots.decelerate()
console.log(roots.rpm);

var turbine = new SuperChargedEngine(4, 260)
turbine.start()
console.log("START YOUR ENGINES", turbine);
turbine.accelerate()
console.log(turbine);


class Horse{
  constructor(mColor, cColor){
    this.legs = 4
    this.running = "no"
    this.maneColor = mColor
    this.coatColor = cColor
  }
  giddyUp(){
    if(this.running)
  }
}