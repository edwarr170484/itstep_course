let stepen = 2;

function summ(a = 4, b = 10){
    let result = (a + b) ** stepen;

    return result;
}

let number1 = 34;
let number2 = 45;

let rrr = summ(1, 2);
let ddd = summ(45);

console.log(summ());

/* Task 1 */
function minNumber(num1, num2){
    return (num1 < num2) ? num1 : num2;
}

console.log(minNumber(3,4));
