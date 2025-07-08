const personAge : number = 20

if(personAge >= 18){
    // console.log('Adult');
}else {
    // console.log('Teenager');
}

const isAdult = personAge >= 18 ? 'Adult' : 'Teenager'
// console.log(isAdult);

const authenticatedUser = null
const userName = authenticatedUser ?? "Guest"
console.log(userName);