/*let numbers = [3, 7, 9, 10, -5, 231];

numbers[3] = "fsdfsdfsdf";

[3, 7, 9, "fsdfsdfsdf", -5, 231]

let arr = [3, {name: "Edgar"}, "Всем привет", function(){console.log('Hi!!!')}];

console.log(`Значение массива ${numbers[3]}`);

arr[3]();

for(let i = 0;i < numbers.length;i++) {
    console.log(`${numbers[i]} в квадрате будет ${numbers[i]**2}`);
}*/

class Product{
    constructor(productName, productCount, productsIsBay, productPrice){
        this.name = productName;
        this.count = productCount;
        this.isBay = productsIsBay;
        this.price = productPrice;
    }
}

let productsList = [
    new Product("Хлеб черный", 1, true, 4.50),
    new Product("Хлеб белый", 1, false, 3.20),
    new Product("Молоко", 3, false, 2.46),
    new Product("Сметана", 1, true, 4.55),
    new Product("Водка", 1, false, 8.00),
    new Product("Селедка", 3, true, 10.2),
];

function showBill(massivTovarov) {
    for(tovar of massivTovarov){
        let price = tovar.count * tovar.price;

        console.log(`Товар ${tovar.name}, количество - ${tovar.count}, цена - ${price.toFixed(2)}`);
    }
}

function totalPrice(massivTovarov) {
    let result = 0;

    for(tovar of massivTovarov){
        let price = tovar.count * tovar.price;
        result += price;
    }

    console.log(`Общая цена ${result.toFixed(2)}`);
}

function maxPriceProduct(massivTovarov) {
    let resultProduct = null;
    let totalProductPrice = 0;

    massivTovarov.forEach(function(product){
        let price = product.count * product.price;

        if(price > totalProductPrice) {
            resultProduct = product;
            totalProductPrice = price;
        }
    });

    console.log(`Самая дорогая покупка в чеке это ${resultProduct.name}`);
}

function srednee(massivTovarov){
    let resultPrice = 0;
    let resultCount = 0;

    for(tovar of massivTovarov){
        resultPrice += tovar.price * tovar.count;
        resultCount += tovar.count;
    }

    let result = resultPrice / resultCount;

    console.log(`Средняя стоимость одного товара в чеке ${result.toFixed(2)}`);
}


function showProductsList(massivProductov) {
    console.log(`Некупленные продукты`);
    for(let i = 0;i < massivProductov.length; i++) {
        if(massivProductov[i].isBay === false) {
            console.log(`${massivProductov[i].name}, количество ${massivProductov[i].count}`);
        }
    }

    console.log(`Купленные продукты`);
    for(let i = 0;i < massivProductov.length; i++) {
        if(massivProductov[i].isBay === true) {
            console.log(`${massivProductov[i].name}, количество ${massivProductov[i].count}`);
        }
    }
}

function addProduct(newProduct) {
    let isProductExists = false;

    productsList.forEach(function(product, index){
        if(product.name == newProduct.name) {
            isProductExists = true;
            productsList[index].count += newProduct.count;
        }
    });

    if(!isProductExists){
        productsList.push(newProduct);
    }    
}

function bay(productName) {
    productsList.forEach(function(product, index){
        if(product.name == productName) {
            productsList[index].isBay = true;
        }
    });
}

addProduct(new Product("Йогурт", 3, false, 1.45));

showBill(productsList);
totalPrice(productsList);
maxPriceProduct(productsList);
srednee(productsList);

/*bay("Хлеб белый");
showProductsList(productsList);*/

let str = "Hello, my dear friend!";

console.log(str.toUpperCase());
console.log(str.toLowerCase());
console.log(str.length);

console.log(str.split(' '));
console.log(str.replace('Hello', 'Privet'));

let stroka = new String();

console.log(stroka);