// Add your Circle class here
class Circle {
    constructor( radius ){
        this.radius = radius; 
        
    }

    get diameter() {
        return this.radius * 2
    }

    get circumference() {
        return (2 * this.radius) * Math.PI
    }

    get area() {
        return (this.radius * this.radius) * Math.PI
    }

    set diameter(newDiameter) {
        this.radius = newDiameter / 2
    }

    set circumference(newCircumference) {
        this.radius = (newCircumference/Math.PI) * 0.5
    }

    set area(newArea){
        this.radius = Math.sqrt(newArea) / Math.PI
    }
}