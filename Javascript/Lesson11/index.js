let a = document.createElement("a");
a.href = "https://google.com";
a.innerText = "Это ссылка на Google";
a.classList.add("no-decoration");
a.style.color = "red";

let a1 = document.createElement("a");
a1.href="https://ya.ru";
a1.innerText = "Это ссылка на Яндекс";

let div = document.querySelector("#root");

div.append(a); //вставляет элемент перед закрывающим тегом
div.prepend(a1); //вставляет элемент после открывающего тега
div.before(a); //вставляет перед открывающим тегом
div.after(a1); //вставляет после закрывающего тега

let texts = ['Пункт 1', 'Пункт 2', 'Пункт 3', 'Пункт 4'];

let ul = document.createElement("ul");

texts.forEach(function(elem){
    let li = document.createElement("li");
    li.innerText = elem;
    ul.append(li);
});

div.append(ul);

a1.remove();

let h1 = "<h1>Это заголовок</h1>";

div.textContent = h1;

//div.innerHTML = h1;

//div.insertAdjacentHTML("afterbegin",h1);
//div.insertAdjacentHTML("afterend", h1);
//div.insertAdjacentHTML("beforebegin",h1);
//div.insertAdjacentHTML("beforeend",h1);
//div.insertAdjacentElement("afterend", a);