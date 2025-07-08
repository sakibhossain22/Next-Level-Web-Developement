
// Nullable, Unknown, and Never Types in TypeScript
// Nullable type allows a variable to be null or undefined
const searchName = (value: string | null) => {
    if (value === null) {
        return console.log("Nothing Here to see");
    }
    else {
        return console.log("searching for " + value);
    }
}
// searchName(null);
const myCarSpeedTest = (speed: unknown) => {
    if (typeof speed === 'number') {
        const converter = speed * 1000 / 3600
        console.log(`My Car Speed Is ${converter}`);
    } else if (typeof speed === 'string') {
        const value = speed.split(" ")
        // console.log(value);
        const converter = parseFloat(value[0]) * 1000 / 3600
        console.log(`My Car Speed Is ${converter}`);
    }else {
        console.log('Your Input Is Wrong Type');
    }
}

myCarSpeedTest(40)
myCarSpeedTest('40 kmh')
myCarSpeedTest(null)