/*function loadScript(url, callback) {
    let script = document.createElement('script');
    script.src = url;
    
    script.onload = () => {
        callback();
    }

    document.body.append(script);
}

loadScript('./header.js', function(){
    createHeader('Это заголовок');
});*/

/*setTimeout(() => {
    alert('From timeout');
}, 3000);

let a = document.createElement("a");
a.innerText = 'Это ссылка';
a.href = 'https://google.com';

document.body.prepend(a);*/

/*let promise = new Promise(function(resolve, reject){
    let summ = 14;

    setTimeout(() => {
        if(summ == 12) {
            console.log(`Результат выполнения операции внутри промиса ${summ}`);
            resolve(summ);
        } else {
            console.log("Ошибка выполнения операции промиса");
            let error = new Error("Число слишком не 12");
            reject(error);
        }
        
    }, 3000);
});

console.log("Это пример использования промиса");*/

let num = 4;

let button = document.querySelector("#btn");
let result = document.querySelector("#result");

button.addEventListener('click', () => {
    result.classList.remove("animated");
    let promise = new Promise((resolve, reject) => {
        let input = document.querySelector("#answer");
        if(input.value == num) {
            resolve("Вы угадали!!!");
        } else {
            reject(new Error("Вы не угадали!!"));
        }
    });

    promise.then((message) => {
        result.innerText = message;
        result.classList.add("animated");
        document.body.style.backgroundColor = 'green';
    }).catch((error) => {
        result.innerHTML = error.message;
        result.classList.add("animated");
        document.body.style.backgroundColor = 'red';
    }).finally(() => {
        num = Math.floor(Math.random() * 10) + 1;
    });
});