// Polymorphism will return different value using same function

{
class Person {
    getSleepHour(){
        console.log('A Man Will Sleep 8 hour Daily'); 
    }
}
class Student extends Person {
    getSleepHour() {
        console.log('Student Sleep 7 hour Daily'); 
    }
}
class Developer extends Person {
    getSleepHour() {
        console.log('Student Sleep 6 hour Daily');
    }
}

const getSleepingHour= (param : Person) =>{
    param.getSleepHour()
}

const callPerson = new Person()
const callStudent = new Student()
const callDeveloper = new Developer()

getSleepingHour(callPerson)
getSleepingHour(callStudent)
getSleepingHour(callDeveloper)

// this class and function will return multiple value using same function and class thats call polymorphism


}