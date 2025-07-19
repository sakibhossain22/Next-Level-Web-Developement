class Person {

    constructor (public name : string, public age: number, public gender : string) {
        this.name = name
        this.age = age
        this.gender = gender
    }
    callPerson(){
        return `The person name is ${this.name}
        And age ${this.age}`
    }
}

const sakib = new Person ("Shakib Hossain", 35, "Male")
const maru = new Person ("Maru", 22, "female")