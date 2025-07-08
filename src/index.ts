// TypeScript Normal Types Example
const personName : string = 'Shakib Hossain';
const age : number = 25;
const isStudent : boolean = true
// Array of strings
const gameList :string[] = ['cricket', 'football', 'tennis'];
// Array of numbers
const score:number[] = [100, 200, 300];
// Array of mixed types
const mixedArray: (string | number | boolean)[] = ['Shakib', 25, true, 'Cricket', 100];
// Tuple
const person: [string, number, boolean] = ['Shakib Hossain', 25, true];

// object
const myDetails: {
    name : string;
    age: number;
    isStudent: boolean;
    gameList: string[];
} = {
    name: 'Shakib Hossain',
    age: 25,
    isStudent: true,
    gameList: ['cricket', 'football', 'tennis'],
}