let div = document.getElementById("block");
let button = document.querySelector("#block button");

div.addEventListener('click', function(event){
    this.style.borderColor = "red";
    
    if(event.target.tagName.toLowerCase() == 'button') {
        event.target.classList.toggle("animated");
    }
}); 

button.addEventListener('click', function(event){
    event.stopPropagation();
    this.parentElement.style.backgroundColor = "red";
});

let a = document.getElementById("link");

a.addEventListener('click', function(event){
    event.preventDefault();

    let link = this.href;
    let iframe = document.querySelector("iframe");

    iframe.src = link;
})
