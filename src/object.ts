export const myDetails: {
    myName: string,
    age: number,
    bankBalance: number,
    newBalance (money: number) : void
} = {
    myName: 'Shakib Hossain',
    age: 25,
    bankBalance: 20000,
    newBalance: function (money) {
        return this.bankBalance + money
    }
}