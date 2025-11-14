"use strict" ;

const backtotop = document.querySelector(".BackToTop");


if(backtotop){
    window.addEventListener("scroll", ShowBackToTop);
}

function ShowBackToTop(){
    const currentscroll = window.scrollY;
    console.log(currentscroll)
    if (currentscroll > 300) {
        backtotop.classList.add("BackToTop--show")
    } else {
        backtotop.classList.remove("BackToTop--show")
    }

}