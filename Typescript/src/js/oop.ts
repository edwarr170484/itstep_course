class User {
    name: string;
    protected _age: number;
    readonly gender: string;

    constructor(name: string, gender: string, age?: number) {
        this.name = name;
        this._age = age;
        this.gender = gender;
    }

    showInfo(): void{
        console.log(`My name is ${this.name}. I'm ${this._age} years old`);
    }

    toString(): string{
        return `${this.name}: ${this._age}`;
    }

    public set age(n: number){
        this._age = n;
    }

    public get age(): number{
        return this._age;
    }
}

class Employee extends User {
    company: string;
    rank: string;

    constructor(name: string, gender: string, age?: number) {
        super(name, gender, age);
    }

    toString(): string {
        console.log(super.toString());
        return `${this.name}: ${this._age}: ${this.company}`;
    }

    static retirementAge: number = 65;
    static calculateYears(age: number): number{
        return Employee.retirementAge - age;
    }
}

let user: User = new User("Ivan Ivanov", "male");
let worker: Employee = new Employee("Sergei Morozov", "male", 45);
worker.company = "Amazon";

/*user.name = "Ivan Ivanov";
user.age = 25;*/

user.age = 25;

console.log(user.age);

user.showInfo();

console.log(user.toString());
console.log(worker.toString());

abstract class Figure {
    name: string;

    abstract getArea(): number;

    showName(){
        console.log(this.name);
    }
}

class Rectangle extends Figure {
    width: number;
    height: number;

    constructor(width: number, height: number) {
        super();
        this.width = width;
        this.height = height;
    }

    getArea(): number {
        return this.width * this.height;
    }
}

let rect: Rectangle = new Rectangle(100, 30);
console.log(`Rectange area = ${rect.getArea()}`);

console.log(Employee.calculateYears(42));

interface IUser {
    id: number;
    name: string;
}

let employee: IUser = {
    id: 1,
    name: "Tom"
}

interface ICar{
    id: number;
    name: string;
    showInfo(): void;
}

class Sedan implements ICar{
    id: number;
    name: string;
    weight: number;

    constructor(id: number, name: string, weight: number){
        this.id = id;
        this.name = name;
        this.weight = weight;
    }

    showInfo(): void{
        console.log(`${this.name}`);
    }
}

class Vehicle implements ICar {
    id: number;
    name: string;
    weight: number;

    constructor(id: number, name: string, weight: number){
        this.id = id;
        this.name = name;
        this.weight = weight;
    }

    showInfo(): void{
        console.log(`${this.name}`);
    }
}

let car1 = new Sedan(1, "Ford", 1340);
let car2 = new Vehicle(2, "Mersedes", 15000);


function showCarInfo(car: ICar){
    car.showInfo();
}

showCarInfo(car1);
showCarInfo(car2);

interface IFullNameBuilder {
    (name: string, surname: string): string;
}

let simpleBuilder: IFullNameBuilder = function(name: string, surname: string): string {
    return `${name} ${surname}`;
}

console.log(simpleBuilder("Edgar", "Zhiznevskij"));

interface IStringArray{
    [index: number]: string;
}

let addresses: IStringArray = ["Адрес 1", "Адрес 2"];

interface IDictionary {
    [index: string]: string;
}

/*let colors: IDictionary;

colors["red"] = "#ff0000";
colors["green"] = "#00ff00";
colors["blue"] = "#0000ff";*/


let tom: User = new Employee("Tom Soyer", "male");

let employeeTom: Employee = <Employee>tom;

employeeTom.company = "Amazon";

function getId<T>(id: T): T {
    return id;
}

console.log(getId<number>(5));
console.log(getId<string>("String"));

class Man<T> {
    private _id: T;
    
    constructor(id: T){
        this._id = id;
    }

    getId(): T{
        return this._id;
    }
}

let m: Man<number> = new Man<number>(5);
let n = new Man<string>("kasdjhfaksdhfalsdfas7851y53475r");

console.log(m.getId());
console.log(n.getId());

type Person = {
    name: string
}

function compareNames<T extends Person>(user1: T, user2: T): void{
    if(user1.name === user2.name) {
        console.log("Имена совпадают");
    } else {
        console.log("Имена не совпадают");
    }
}

let p: Person = {
    name: "Ivan"
};

let pp: Person = {
    name: "Petr"
};

let ppp: {age: number} = {
    age: 25
};

compareNames(p, pp);
//console.log(compareNames(p, ppp));