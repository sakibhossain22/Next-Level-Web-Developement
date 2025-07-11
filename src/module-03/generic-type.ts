interface GirlDetailsList<L, K, S> {
    name: string,
    age: L,
    height: K,
    relative: S
}


interface RelativeDetails {
    name: string,
    age: number
}
const girlDetails1: GirlDetailsList<number, string, RelativeDetails> = {
    name: 'Laky Khatun',
    age: 22,
    height: '5.4',
    relative: {
        name: 'Shakib Hossain',
        age: 22
    }
}