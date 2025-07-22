// abstraction means give the idea what should i do
// abstraction using interface and class

// idea
interface Car {
    startEngine(): void
    stopEngine(): void
}

// Impelement the Idea Using Implements inside of class
class Car1 implements Car {
    startEngine(): void {
        console.log('The Engine of The Car Started');
    }
    stopEngine(): void {
        console.log('The Car Engine Was Stopped');
    }
}

// abstract Class
// idea
abstract class Vehicle {
    abstract startEngine(): void
    abstract stopEngine(): void
}

// Implement idea using class child

class Vehicle1 extends Vehicle {
    startEngine(): void {
        console.log('The Engine of The Car Started');
    }
    stopEngine(): void {
        console.log('The Car Engine Was Stopped');
    }
}

const callCar1 = new Car1()
callCar1.startEngine()

const callVehicle1 = new Vehicle1()
callVehicle1.startEngine()