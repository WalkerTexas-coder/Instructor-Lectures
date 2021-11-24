class Cylinder {
    constructor(height, radius){
        this.height = height
        this.radius = radius
    }
    volume(){
        let solution = this.radius ** 2 * this.height * Math.PI;
        return solution.toPrecision(5);
    }
}

var small = new Cylinder(1,1)

console.log(small.volume());