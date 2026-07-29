const hamburger = document.querySelector(".hamburger");
const menu = document.querySelector(".menu");

hamburger.addEventListener("click", () => {

    menu.classList.toggle("active");

    if(menu.classList.contains("active")){

        hamburger.innerHTML = '<i class="fa-solid fa-xmark"></i>';

    }else{

        hamburger.innerHTML = '<i class="fa-solid fa-bars"></i>';

    }

});