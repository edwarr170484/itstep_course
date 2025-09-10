let ul = document.body.children[2];

console.dir(ul);

ul.firstElementChild.style.textTransform = 'uppercase';
ul.lastElementChild.style.color = 'red';

//ul.innerHTML = '<li>Это только одна строка</li>'

ul.previousElementSibling.style.fontSize="20px";

ul.parentElement.id = "page-body";

console.log(ul.getAttribute('id'));

//ul.setAttribute('class', 'superlist');

ul.classList.add('normalized');

if(ul.classList.contains('underlined')) {
    ul.classList.remove('underlined');
} else {
    ul.classList.add('underlined');
}

let block = document.getElementById('flexbox');

block.innerText = "Hello from founded block!!!";
block.classList.add('bordered', 'd-flex');

let blocks = document.getElementsByClassName('example');
block = blocks[0];
block.classList.add('padding-10');

blocks = document.getElementsByTagName('div');

block = document.querySelector('.example');

block.classList.remove('padding-10');

blocks = document.querySelectorAll('.example');
block = blocks[0];

let head = document.querySelector('h1');
head.style.textAlign = 'center';

let link = document.querySelector('a');

link.innerHTML = '<img src="https://icdn.lenta.ru/images/2021/04/27/16/20210427163138131/square_320_c09ebae17387b7d6eeb9fa0d42afe5ee.jpg" alt=""/>';

ul = document.querySelector('#list');
ul.lastElementChild.style.textAlign = 'right';

//ul.children[1].style.textAlign = 'center';
let li = document.querySelector('#list li:nth-child(2)');
li.style.textAlign = 'center';