"use strict" ;

const previous = document.querySelector(".slider__btn--previous");
const next = document.querySelector(".slider__btn--next");



    next.addEventListener("click", nextslide)
    previous.addEventListener("click",prevslide)
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





function prevslide (){
    const slideractive = document.querySelector(".slider__el--active")
    const prevelement = slideractive.previousElementSibling;
    console.log(prevelement)
    slideractive.classList.remove("slider__el--active");

    if (prevelement){
        slideractive.classList.remove("slider__el--active");
        prevelement.classList.add("slider__el--active");
    } else {
            slideractive.classList.remove("slider__el--active");
            const slidelast = slideractive.parentElement.lastElementChild;
            slidelast.classList.add("slider__el--active")
    }
}
document.addEventListener("keydown", function(event){
    if(event.code=="ArrowLeft"){
        prevslide();
    
    }else if(event.code=="ArrowRight"){
        nextslide();
    }
});