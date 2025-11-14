"use strict" ;

const ProgressBar = document.querySelector(".scrollBar__progress");
console.log(ProgressBar);

if(ProgressBar){
    window.addEventListener("scroll", ScrollProgress);
}

function ScrollProgress(){
    console.log("aa")



    const mxScroll=document.body.scrollHeight - window.innerHeight;
    const CurrentScroll=window.scrollY;
    const ScrollState = (CurrentScroll/mxScroll)*100;
    console.log(ScrollState)
    
    
    ProgressBar.style.setProperty("--width-progression-bar", ScrollState + "%");



}