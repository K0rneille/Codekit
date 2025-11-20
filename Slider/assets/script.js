"use strict" ;

const previous = document.querySelector(".slider__btn--previous");
const next = document.querySelector(".slider__btn--next");



    next.addEventListener("click", nextslide)
   /* previous.addEventListener("click", prevslide)*/


function nextslide (){
    const slideractive = document.querySelector(".slider__el--active")
    const nextelement = slideractive.nextElementSibling;
    console.log(nextelement)
    slideractive.classList.remove("slider__el--active");

    if (nextelement){
        slideractive.classList.remove("slider__el--active");
        nextelement.classList.add("slider__el--active");
    } else {
            slideractive.classList.remove("slider__el--active");
            const slidefirst = slideractive.parentElement.firstElementChild;
            slidefirst.classList.add("slider__el--active")
    }


}