import $ from 'jquery';
import '../scss/custom.scss';

let conn = new XMLHttpRequest();

conn.onerror = function() {
    console.log(`Не могу соединится с целевым сервером`);
}

conn.onload = function() {
    if(this.status !== 200) {
        console.log(`Получен статус ответа ${this.status}. Ошибка!`);
        return;
    }

    renderBeerCard(this.response);
}

setInterval(() => {
    conn.open('GET', 'https://punkapi.online/v3/beers/random');
    conn.responseType = 'json';
    conn.send();
}, 5000);

function renderBeerCard(beer) {
    document.body.innerHTML = `<img style="width:100px" src="https://punkapi.online/v3/images/${beer.image}" alt="${beer.name}" />`;
}