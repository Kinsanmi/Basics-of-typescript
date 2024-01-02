// TypeScript


// string
let userName: string | number = 'Mike';

// boolean
let login: boolean = true;

userName += ' Michael';

console.log(userName);

// number
let myNumber: number = 20;


// regex

const myRegex  = /foo/;

// Array string
const names: string[] = userName.split(" ");

// Array of numbers
const myValue: number[] = [1, 3, 5,7, ]


// object

interface Person {
    firstName: string;
    lastName: string;
    age: number;
}


const myPerson: Person = {
    firstName: 'Mike',
    lastName: 'Akinsanmi',
    age: 28,
}

myPerson.age 


// Object as map

const ids: Record<number, string> = {
    10: 'a',
    20: 'b',
}

ids[30] = 'c'


// conditions

if(ids[30] === '10'){

}


// iteration

[2, 5, 1].forEach((V)=> console.log(V))


const value:number[] = [4,5,6,7].map((v)=> v+10);

