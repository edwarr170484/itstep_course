/*function user(name, age) {
    let obj = {};

    obj.name = name;
    obj.age = age;

    return obj;
}

let anna = user('Anna', 45);
let petr = user('Petr', 55);

console.log(anna.name);*/

function User(name, age) {
    this.firstname = name;
    this.vozrast = age;

    this.hello = function() {
        console.log(`Привет, я ${this.firstname}`);
    }
}

const anna = new User('Анна', 35);

console.log(anna.hello());

//<div class="block"></div>
/*let div = {
    name: 'div',
    attribute: {
        name: 'class',
        value: 'block'
    },
    innerHtml: '' 
}*/

//<a href="https://google.com">Ссылка</a>
/*let a = {
    name: 'a',
    attribute: {
        name: 'href',
        value: 'https://google.com'
    },
    innerHtml: 'Ссылка'
}*/

//<input type="text" />
/*let input = {
    name: 'input',
    attribute: {
        name: 'type',
        value: 'text'
    },
    innerHtml: null
}*/

/*class HTMLElement {
    constructor(param1, param2, param3) {
        this.name = param1;
        this.attribute = param2;
        this.innerHtml = param3;
    }

    renderHTML(){
        return `<${this.name} ${this.attribute.name}="${this.attribute.value}">${this.innerHtml}</${this.name}>`;
    }
}*/

function HTMLElement(param1, param2, param3) {
    this.name = param1;
    this.attribute = param2;
    this.innerHtml = param3;

    this.renderHTML = function() {
        if(this.attribute != null && this.attribute.name != undefined && this.attribute.value != undefined) {
            return `<${this.name} ${this.attribute.name}="${this.attribute.value}">${this.innerHtml}</${this.name}>`;
        }

        return `<${this.name}>${this.innerHtml}</${this.name}>`;
    }

    this.addToPage = function() {
        document.body.insertAdjacentHTML('afterbegin', this.renderHTML());
    }
}

const a = new HTMLElement('a', {name: 'href', value: 'https://google.com'}, 'Это ссылка на Google');
a.addToPage();

const p = new HTMLElement('p', {}, 'Это текстовый абзац');
p.addToPage();




function Calculator() {
    this.num1 = 0;
    this.num2 = 0;

    this.read = function(){
        this.num1 = +prompt('Введите первое число', 0);
        this.num2 = +prompt('Введите второе число', 0);
    };

    this.sum = function(){
        return this.num1 + this.num2;
    }

    this.mul = function() {
        return this.num1 * this.num2;
    }
}

let calculator = new Calculator();
let calc1 = new Calculator();

function Accumulator(startingValue){
    this.value = startingValue;

    this.read = function() {
        let num = +prompt("Введите число");
        this.value += num;
    }
}

let accumulator = new Accumulator(1); 