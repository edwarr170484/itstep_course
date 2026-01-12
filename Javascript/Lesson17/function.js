let a = 5;
let b = 6;
let counter = 0;

//let c = (a + b) * 7;

function summ(a, b){
    counter++;
    return a + b;
}

function mul(a, b){
    return a * b;
}

let c = mul(summ(a, b), b);

function fff(a, b){
    return (a + b) / Math.PI;
}

/*for(let i = 0; i < 10; i++){
    console.log(i);
}*/

let show = function(i){
    console.log(i);
}

function cicle(counter, func){
    if(counter < 0){
        return;
    }
    func(counter);
    counter--;
    cicle(counter, func);
}

cicle(10, show);

let mass = [1, 2, 4, -1, 6, 9];

/*newMass = mass.map(function(item){
    return item * 2;
});

let negative = [];
for(let num of mass){
    if(num < 0){
        negative.push(num);
    }
}

let odd = [];
for(let num of mass){
    if(num % 2 === 0) {
        odd.push(num);
    }
}*/

let filtered = [];

let negativeCodition = function(n) {
    return n < 0;
};

let oddCondition = function(n){
    return n % 2 === 0;
}

filtered = mass.filter((item) => {
    return negativeCodition(item);
});

console.log(filtered);

function filter(elements, condition) {
    let result = [];

    elements.forEach(function(element){
        condition(element) ? result.push(element) : null;
    });

    return result;
}

/*console.log(filter(mass, negativeCodition));
console.log(filter(mass, oddCondition));*/

let cart = [
    {
        name: "Товар 1",
        count: 2,
        price: 120
    },
    {
        name: "Товар 2",
        count: 1,
        price: 10
    },
    {
        name: "Товар 3",
        count: 10,
        price: 1
    },
];

let totalPrice = cart.reduce(function(acc, item){
    acc += item.price * item.count;
    return acc;
}, 0);

let totalCount = cart.reduce(function(acc, item){
    acc += item.count;
    return acc;
}, 0);

/*for(let item of cart) {
    totalCount += item.count;
    totalPrice += item.count * item.price;
}*/

/*cart.forEach(function(item){
    totalCount += item.count;
    totalPrice += item.count * item.price;
});*/

console.log(totalCount);
console.log(totalPrice);

function render(message){
    console.log(message);
};

render('Это сообщение');

(function(message){
    console.log(message);
})(`Сумма чисел равна ${5 + 6}`);