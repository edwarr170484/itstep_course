/*let a = 123;

a = Math.sqrt(4);

function summ(param1, param2) {
    return param1 + param2;
}

class Rect{

}*/

let num_three = 3;
let str = "Hello"; //'Hello'
let str_inter = `${str}, world!`;
let is_user = true; 
let empty = null;

console.log(str.toUpperCase());
console.log('Это число ' + num_three.toString());
console.log(num_three);

let n = new Number(3.54273654234);
console.log(n.toFixed(2));

num_three = 34;

let user = {
    name: "Developer Programmer",
    age: 25,
    is_married: false,
    salary: null,
    "has childs": true,
    say_hi: function() {
        console.log(`Hello, my name is ${this.name}`);
    },
    say_age(){
        console.log(`I am ${this.age} years old`);
    }
}

user.say_hi();
user["say_hi"]();

user.say_age();

let arr = [1, 2, 3, 4, 5];
let arr1 = [1, "2", {num: '3'}];

const pi = 3.14;
const obj = {
    title: "Title"
}

console.log(str_inter);

if(num_three > 0) {
    console.log('Положительное');
} else {
    console.log('Отрицательное');
}

(num_three > 0) ? console.log('Положительное') : console.log('Отрицательное');

let color = 'red';

switch(color) {
    case 'blue':
        console.log('Синий');
    break;
    
    case 'black':
        console.log('Черный');
    break;
    
    case 'red':
        console.log('Красный'); 
    break;

    default:
        console.log('Неопределенный');
}

if(color == 'blue') {
    console.log('Синий');
} else {
    if(color == 'black') {
        console.log('Черный');
    } else {
        if(color == 'red') {
            console.log('Красный'); 
        } else {
            console.log('Неопределенный');
        }
    }
}

let hello = "Hello!!!";

let counter = 0;

while(counter < 10) {
    console.log(hello);
    counter += 1;
}

for(let i = 0; i < 10; i++) {
    console.log(hello);
}

function summ(param1, param2) {
    let result = param1 + param2;

    console.log(result);

    return result;
}

function gravity(m1, m2, r) {
    const G = 6.6743e-11;
    let result = G * ((m1 * m2) / (r ** 2));

    return result;
}

let g = gravity(80, 90, 1);

console.log(g);

let perem = 345;
let terem = perem;

console.log(perem);
console.log(terem);

terem = 567;

console.log(perem);
console.log(terem);

let elem = {
    name: "Block"
}

let new_elem = {
    name: elem.name
}

console.log(elem);
console.log(new_elem);

new_elem.name = "Paragraph";

console.log(elem);
console.log(new_elem);

function Car(name, year, factory) {
    this.name = name;
    this.year = year;
    this.factory = factory;
}

let mersedes = new Car("Mersedes", 1995, {name: "Super zavod", address: "Germany"});
let mazda = new Car("Mazda", 1999, {name: "Another zavod", address: "Japan"});

console.log(`${mazda.factory.name}, ${mazda.factory.address}`);

/*function car(name, year) {
    let obj = {};

    obj.name = name;
    obj.year = year;

    return obj;
}

let mersedes = car("Mersedes", 1995);*/

console.log(mersedes);
console.log(mazda);