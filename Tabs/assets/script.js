"use strict" ;

const Tabs = document.querySelectorAll(".Tabs__element");

let bloc = document.querySelector("#tab1");




if(Tabs){
    for(let i of Tabs){
        i.addEventListener("click", Opentabs);
    }

}

function Opentabs(event){
    event.preventDefault();
    const Active=document.querySelector(".Tabs__element--active");

    Active.classList.remove("Tabs__element--active");
    bloc.classList.remove("text__bloc--active");


    event.currentTarget.classList.add("Tabs__element--active");

    const selector = event.currentTarget.getAttribute("href")
    
    bloc = document.querySelector(selector);

    bloc.classList.add("text__bloc--active");

    

}