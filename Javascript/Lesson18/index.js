let users = [
    {
        address: {
            street:{
                name: "Ленина"
            }
        },
        isAdmin: function(){
            console.log("Я админ");
        }
    },
    {
        address:{}
    }
];

let addresName = "address";

for(let user of users) {
    let street = user?.[addresName]?.["street"]?.["name"];

    /*let street = user.address?.street?.name;

    if(street){
        console.log(street);
    }*/

    /*if(user.address && user.address.street && user.address.street.name){
        console.log(user.address.street.name);
    }*/

    user.isAdmin?.();
}

function add(n1, n2 = 0) {
    let summ = n1 + n2;

    return summ;
}

console.log(add(3, 3));
console.log(add(3));

let time = new Date("2026-02-17");
time = new Date(2026, 1, 17, 13, 29, 45);

let months = ["Январь", "Февраль", "Март", "Апрель"];

console.dir(months[time.getMonth()]);

console.log(time.setFullYear(2027));
console.log(time);

for(let i = 0; i < 10; i++){
    let day = time.getDate();
    day++;
    time.setDate(day);
    console.log(time);
}

console.log(Date.now());


let m = new Map();

m.set("1", "str1").set(1, "num1");  

let o = {
    prop: "Prop",
    name: "Name",
    age: 25
}

m.set(o, "hksadhjfasdf");


for(let key of Object.entries(o)) {
    //console.log(key);
    //['prop', 'Prop']
    
    let [keyName, keyValue] = key; 
    /*let keyName = key[0];
    let keyValue = key[1];*/

    console.log(keyName);
    console.log(keyValue);
}

let arr = ["1", "1", "2", "3"];
console.log(arr);

let set = new Set(arr);
console.log(set);
set.add("123");
console.log(set);


if( 1 > 0) {
    let k = 9;
}

{
    let h = "Hello";
}


function makeCounter() {
    let count = 0;

    return function() {
        return count++;
    }
}

let counter = makeCounter();
let counter1 = makeCounter();

console.log(counter());
console.log(counter());

console.log(counter1());
console.log(counter1());
console.log(counter1());
console.log(counter1());

/*class User {
    constructor(){
        this.name = null;
        this.age = 0;
    }
}

let user1 = new User();
user1.name = "Ivan";
user1.age = 34;*/

function User() {
    this.name = null;
    this.age = 0;
}

let user = new User();
user.name = "Petr";

function sayHi(helloPhrase, komma) {
    
    let show = () => {
        console.log(`${helloPhrase}, ${this.name}${komma}`);
    }

    show();
}

sayHi.call(user, "Hello", "!");