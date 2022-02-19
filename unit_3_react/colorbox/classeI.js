class Car {
    constructor(windows, wheels){
        this.wheels = wheels;
        this.windows = windows;
        this.engine = "Big"
        this.color = "red"
        this.speed = 0;
    }
    pressTheGas(){
    this.speed ++
    }
    pressTheBrakes(){
    this.speed--
    }
}


class Toyota extends Car{
    constructor(windows, wheels){
        super(windows, wheels)
        this.symbol = "T"
        
    }
}
var fourRunner = new Toyota(8, 4)


console.log(camary);