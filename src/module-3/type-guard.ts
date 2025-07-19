type ValidationValue = string | number

// checking type using type guard typeof operator

const calculate = (value1: ValidationValue, value2: ValidationValue): ValidationValue => {
    if (typeof value1 === 'number' && typeof value2 === 'number') {
        return value1 + value2
    } else {
        return value1.toString() + value2.toLocaleString()
    }
}
const rs1 = calculate(5, 8)
console.log(rs1)
const rs2 = calculate('2', '5')
console.log(rs2)

// checking type using type guard type in operator
type NormalUser = {
    name: string
}
type AdminUser = NormalUser & {
    role: 'admin'
}

const checkUser = (user: NormalUser | AdminUser) => {
    if ('role' in user) {
        console.log(`My Name is ${user.name} my role is ${user.role}`);
    } else {
        console.log(`My Name is ${user.name}`);
    }
}

const user1 : NormalUser = {
    name : 'Shakib'
}
const user2 : AdminUser = {
    name : 'Shakib',
    role : 'admin'
}

checkUser(user1)
checkUser(user2)