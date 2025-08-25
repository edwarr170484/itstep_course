/*let n = +prompt('Введите число больше 2');

while(n < 2) {
    n = +prompt('Неверное число. Введите число больше 2');
}

let m = +prompt('Введите степень числа');

console.log(`Результат равен ${n**m}`);*/

/* Task1 */
let count = 10;

while(count > 0) {
    console.log(`${count} - #`);
    count--;
}

/* Task 2 */
let num = 56;

while(num >= 0) {
    console.log(`Число - ${num}`);
    num--;
}

/* Task 3 */
let n = 3;//число
let m = 4;//степень
let result = 1;
 
let i = 1;

while(i <= m){
    result = result * n;
    console.log(`Промежуточный - ${result}`);
    i++;
}

console.log(`Результат - ${result}`);

/* Task 5 */
num = 5;
result = 1;
i = 1;

while(i <= num){
    result = result * i;
    i++;
}
console.log(`Факториал числа ${num} равен ${result}`);


/*num = 45;

do{
    result = +prompt("Я загадал число, отгодай его");
} while(result != num)*/

for(let j = 1; j <= 10; j+=2) {
    console.log(j);
}

/* Task 6 */
num = 1000;

do {
    num = num / 2;
}while(num >= 50)

console.log(num);

let start = 10;
let end = 150;

for(let i = start; i <= end; i += 4){
    console.log(`Элемент - ${i}`);
}

