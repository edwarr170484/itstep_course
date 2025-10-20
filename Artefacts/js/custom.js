let totalPages = 0;
let currentPageIndex = 1;

function setSliderPagination(){
    $("#slider-pagination").html(`${currentPageIndex} из ${totalPages}`);
}

$(document).ready(function(){
    let options = {
        items: 4,
        margin: 30,
        dots: false,
        slideBy: 4
    }

    let owl = $('.owl-carousel');
    owl.owlCarousel(options);
    
    $("#slider-left").click(function(){
        owl.trigger('prev.owl.carousel');

        if(currentPageIndex > 1){
            currentPageIndex--;
        }

        setSliderPagination();
    });

    $("#slider-right").click(function(){
        owl.trigger('next.owl.carousel');

        if(currentPageIndex < totalPages) {
            currentPageIndex++;
        }

        setSliderPagination();
    });

    let totalCarts = $(".owl-item").length;

    totalPages = Math.ceil(totalCarts / options.items);

    setSliderPagination();

    //$("#form-login").validate();

    const loginForm = document.querySelector('#form-login');

    if(loginForm) {
        loginForm.addEventListener('submit', function(event){
            if (!this.checkValidity()) {
                event.preventDefault()
                event.stopPropagation()
            }
        
            this.classList.add('was-validated');
        });
    }
});


function validate(){
    let isValid = true;
    let form = document.forms[0];

    let name = form.elements[0];
    let email = form.elements[1];

    let name_regex = /^[A-Za-zА-Яа-я]{2,20}\s*[A-Za-zА-Яа-я]{0,20}$/;
    let email_regex = /^[a-z_\-0-9]+@[a-z_\-0-9]+\.[a-z]{2,3}$/;

    name.classList.remove('is-invalid');
    if(!name_regex.test(name.value)){
        name.classList.add('is-invalid');
        isValid = false;
    }

    email.classList.remove('is-invalid');
    if(!email_regex.test(email.value)){
        email.classList.add('is-invalid');
        isValid = false;
    }

    return isValid;
}

