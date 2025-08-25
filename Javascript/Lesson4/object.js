/*function summ(start, end) {
    let result = 0;

    for(let i = start;i <= end;i++) {
        if(i % 2 == 0) {
            result += i;
        }
    }

    console.log(`Сумма четных чисел диапазона от ${start} до ${end} равна ${result}`);
}*/

/*const summ = function(start, end) {
    let result = 0;

    for(let i = start;i <= end;i++) {
        if(i % 2 == 0) {
            result += i;
        }
    }

    console.log(`Сумма четных чисел диапазона от ${start} до ${end} равна ${result}`);
}*/

/*const arr = (name) => {
    console.log(`Hello, ${name}`);
}*/
const car = {
    name: "Mersedes",
    type: "Legkovoi",
}

car.engine = "electric";

const user = {
    name: 'Petr',
    age: 35,
    job: {
        name: 'Developer',
        stage: 15
    },
    gender: "man",
    hello() {
        console.log(`Hello!! My name is ${this.name}. I'm ${this.age} years old.`);
        console.log(`У меня есть ${car.name}`);
    },
}

user.hello();

console.log(`Пользователь ${user.name} работает на должности ${user.job.name} ${user.job.stage} лет`);

user.login = "Dev";
user.password = "qwerty";

console.log(user);

console.log(user["first name"]);
console.log(user["age"]);
console.log(user["job"]["name"]);

let vozrast = "age";

console.log(user[vozrast]);

if("gender" in user) {
    console.log(user.gender);
}

if(user.age !== undefined) {
    
}

for(key in user) {
    console.log(`Ключ - ${key}`);
    console.log(`Значение - ${user[key]}`);
}



/*delete user.job.name;

console.log(user);*/

let isEmpty = function(obj) {
    for(key in obj) {
        return false;
    }

    return true;
}

let schedule = {};

console.log( isEmpty(schedule) );

schedule["8:30"] = "get up";

console.log( isEmpty(schedule) );


const obj1 = {
    a: 1
}

/*const obj2 = obj1;

console.log(obj1.a);
console.log(obj2.a);

obj2.a = 34;

console.log(obj1.a);
console.log(obj2.a);*/

/*const obj2 = {
    a: obj1.a
}*/

const obj2 = {}

/*for(key in obj1) {
    obj2[key] = obj1[key];
}*/

Object.assign(obj2, obj1);

let salaries = {
    John: 100,
    Ann: 160,
    Pete: 130
}

function salarySumm(obj) {
    let result = 0;

    for(key in obj) {
        result += obj[key];
    }

    return result;
}

console.log(`Сумма равна ${salarySumm(salaries)}`);

let ladder = {
    step: 0,
    up() {
      this.step++;
      return this;
    },
    down() {
      this.step--;
      return this;
    },
    showStep: function() { 
      alert( this.step );
      return this;
    }
};

ladder.up().up().down().showStep();