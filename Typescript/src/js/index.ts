import '../scss/index.scss';

let n: number = 5;
let city: string | null = "Питер";
let result: boolean = true;
let m: number | undefined;
let some: any;

let color: "red" | "green" | "blue";
let status: 200 | 404 | 500;

type Person = {
    name: string,
    age: number,
    isStudent: boolean
};

let user: Person = {
    name: "Иван Иванович",
    age: 35,
    isStudent: false
}

let numbers: Array<number> = [1, 2, 3, 4, 5];
let strings: string[] = ["12312", "3123", '132123123'];

function showInConsole(str: string): void{
    console.log(str);
}

function summ(m: number, n: number): number{
    return m + n;
}

function createPerson(name: string, age: number, isStudent: boolean): Person{
    return {
        name: name, 
        age: age,
        isStudent: isStudent
    };
}

let obj: object;
