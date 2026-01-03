"use strict" ;
const control = document.querySelector(".slider__control");
const btn__next = document.querySelector(".slider__btn--next");
const btn__prev = document.querySelector(".slider__btn--previous");
const slides = document.querySelectorAll(".slider__el");


btn__next.addEventListener("click", nextslide);

btn__prev.addEventListener("click", prevslide);



function nextslide(event) {
    event.preventDefault();
    const activeslide = document.querySelector(".slider__el--active");
    let cible = activeslide;
    let next = cible.nextElementSibling;
    if (next) {   
        next.classList.add("slider__el--active");
    }else{
        let firstchild = cible.parentElement.firstElementChild;
        firstchild.classList.add("slider__el--active")
    }
    cible.classList.remove("slider__el--active");
    console.log(activeslide);
}

function prevslide(event) {
    event.preventDefault();
    const activeslide = document.querySelector(".slider__el--active");
    let cible = activeslide;
    let prev = cible.previousElementSibling;
    if (prev) {   
        prev.classList.add("slider__el--active");
    }else{
        let lastchild = cible.parentElement.lastElementChild;
        lastchild.classList.add("slider__el--active")
    }
    cible.classList.remove("slider__el--active");
}










