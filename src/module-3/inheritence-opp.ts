class Parent {
    name: string
    age: number
    address: string

    constructor(name: string, age: number, address: string) {
        this.name = name
        this.age = age
        this.address = address
    }
    sleepTime(sleepHour: number) {
        return `The ${this.name} sleep ${sleepHour} hours in a day`
    }
}



class Student extends Parent {
    constructor(name: string, age: number, address: string) {
        super(name, age, address)
    }
}

const student = new Student('Shakib Hossain', 25, 'Sherpur')


// class of teacher
class Teacher extends Parent {
    designation: string

    constructor(name: string, age: number, address: string, designation: string) {
        super(name, age, address)
        this.designation = designation
    }
}