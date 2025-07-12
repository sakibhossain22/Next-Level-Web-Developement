interface StudentDetails {
    id: number,
    name: string,
    email: string,
}

const addStudent = <T extends {name:string, id : number, email:string}>(student: T): T => {
    const course = 'Next Level Web Developement'
    return {...student, course}
}

const student1 = {
    id : 111,
    name : 'Laky',
    email : 'laky@gmail.com'
}
const student2 = {
    id : 222,
    name : 'Vabna',
    email : 'vabna@gmail.com',
    roll : 'md'
}
const student3 = {
    emni : 'Nothing'
}
const st1 = addStudent(student1)
const st2 = addStudent(student2)
const st3 = addStudent(student3) // all required value not available , the reason of error
