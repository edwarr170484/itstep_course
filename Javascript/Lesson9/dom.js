//console.log(window);

//alert('fsdfsdf');

/*function my_super_func() {
    console.log(`Версия браузера ${window.navigator.appVersion}`);

    for(let plugin of window.navigator.plugins){
        console.log(`Плагин ${plugin.name}`);
    }
}

my_super_func();*/

/*let url = prompt("Введите URL");

if(confirm(`Вы действительно хотите перейти по адресу ${url}?`)){
    window.location.href = url;
}*/

/*let reload = function(){location.replace('https://mail.ru')}

setInterval(reload, 5000);*/

/*console.dir(document);

document.body.style.backgroundColor="red";

console.log(document.title);

let text = document.children[0].children[1].children[0].innerText;

console.log(text);*/

/*let url =  document.body.children[1].href;

location.replace(url);*/

/*console.dir(document.body.children[2]);

let table = document.body.children[2];

for(let row of table.rows) {
    console.log(row.cells[0].innerText);
}*/

//let table = document.body.children[3];

/*for(let i = 0; i < table.rows.length;i++) {
    let row = table.rows[i];

    if(i == 0) {
        table.rows[i].style.backgroundColor = 'green';
    }

    for(let j = 0;j < row.cells.length;j++) {
        if(j == i){
            table.rows[i].cells[j].style.backgroundColor = "red";
            table.rows[i].cells[j].style.color = "white";
            //table.rows[i].cells[j].hidden = true;
        }
    }
}*/