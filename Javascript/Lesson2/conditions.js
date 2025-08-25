/*let n = +prompt("Введите число");
let m = +prompt("Введите значение степени");*/

/*if(n == 0) {
    alert("Результат оперции равен 0");
}

if(n == 1){
    alert("Результат операции равен 1");
}

if(n > 1){
    let result = n ** m;

    alert(`Результат операции равен ${result}`);
}*/

/*if(n == 0) {
    alert("Результат оперции равен 0");
} else if(n == 1){
    alert("Результат операции равен 1");
} else if(n == 2) {
    alert("Не могу вычислить результат");
} else {
    let result = n ** m;
    alert(`Результат операции равен ${result}`);
}*/

/*
    >
    <
    >=
    <=
    ==
    ===
*/

/*if(n >= 0) {
    let result = n ** m;
    alert(`Результат операции равен ${result}`);
} else {
    alert('Вы ввели отрицательное число');
}*/

/*let a = 10;

let b = !a;

console.log(b);

if(a != null) {
    alert('Ура, неопределенности нет');
}*/

/*if(n >= 5 && n <= 10 && n != 4) {
    if(m <=2 || m >=4) {
        let result = n ** m;
        alert(`Результат операции равен ${result}`);
    }
}*/

/*let num = 4;

if(num == 0) {
    console.log(0);
} else if(num > 0){
    console.log(1);
} else {
    console.log(-1);
}

let mm = 5;

if(mm > 0) {
    console.log("Число положительное");
} else {
    console.log("Число отрицательное");
}*/

/* Task1 1 */
console.log('Task 1');
let num = 4;

if(num == 0) {
    console.log('Число равно 0');
} else if(num > 0){
    console.log('Число положительное');
} else {
    console.log('Число отрицательное');
}

/* Task 2 */
console.log('Task 2');

let age = -34;

/*if(age > 0 && age <= 120) {
    console.log('Возраст верный');
} else {
    console.log('Возраст неверный');
}*/

if(age <= 0 || age > 120) {
    console.log('Возраст неверный');
}

/* Task3 */
console.log('Task 3');
let nm = -56;

if(nm < 0) {
    nm = -nm;
}

console.log(nm);

/* Task 4 */
console.log('Task 4');

let hours = 32;
let minutes = 43;
let seconds = 56;

if( (hours < 0 || hours > 24) || (minutes < 0 || minutes > 60) || (seconds < 0 || seconds > 60) ) {
    console.log('Данные введены неверно');
}

/* Task 5 */
console.log('Task 5');
let month = 'Январь';

switch(month > '') {
    case true:
        console.log('Зима');
    break;
    
    case false:
        console.log('Весна');
    break;
    
    default:
        console.log('Месяц не определен');
}

/* Task 6 */
console.log('Task 6');
let num1 = 45;
let num2 = 4;
let action = '*';

switch(action) {
    case '+':
        console.log(num1 + num2);
    break;

    case '-':
        console.log(num1 - num2);
    break;

    case '*':
        console.log(num1 * num2);
    break;

    case '/':
        console.log(num1 / num2);
    break;

    default:
        console.log('Такая операция не поддерживается');
}