/*let button  = document.querySelector("button");

button.addEventListener('click', function(){
    let div = document.getElementById("text");
    div.remove();
});

button.addEventListener('click', function(){
    this.hidden = true;
});*/

const ball = document.querySelector(".ball");

function moveBall(event) {
    let clientX = event.clientX;
    let clientY = event.clientY;

    console.dir(ball);

    ball.style.left = clientX - Math.floor(ball.offsetWidth / 2) + "px";
    ball.style.top = clientY - Math.floor(ball.offsetHeight / 2) + "px";
}

document.body.addEventListener('click', moveBall);