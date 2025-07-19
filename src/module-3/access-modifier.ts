// class property will be accessible using protected within multiple class but not private
class BankAccount {
    readonly id: number
    name: string
    protected balance: number

    constructor(id: number, name: string, balance: number) {
        this.id = id
        this.name = name
        this.balance = balance
    }
    getBalance() {
        console.log(this.balance);
    }
}

class StudentAccount extends BankAccount {
    test(){
        this.balance
    }
}

const shakibAc = new BankAccount(121, 'Shakib', 400)
