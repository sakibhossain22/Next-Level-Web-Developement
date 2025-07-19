// class property will be accessible using protected within multiple class but not private
class BankAccountData {
    readonly id: number
    name: string
    protected _balance: number

    constructor(id: number, name: string, _balance: number) {
        this.id = id
        this.name = name
        this._balance = _balance
    }
    get balance():number{
        return this.balance
    }
    set deposit (amount:number) {
        this._balance = this._balance + amount
    }
    
}


const shakibAccount = new BankAccountData(121, 'Shakib', 400)
const depositNew = shakibAccount.deposit = 100
const balanceDate = shakibAccount.balance
console.log(balanceDate);
