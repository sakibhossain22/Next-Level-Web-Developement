function kgToGram(param: string | number): number | string | undefined {
    if(typeof param === 'string'){
        const value = parseFloat(param)*1000
        return `The Calculated Value is ${value}`
    }else if(typeof param === 'number') {
        const value = param*1000
        return value
    }
}

const resultInNumber = kgToGram(1000) as number
const resultInString = kgToGram('1000') as string
console.log(resultInNumber);
console.log(resultInString);