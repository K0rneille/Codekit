"use strict" ;

const body = document.querySelector("body");
const toggle = document.querySelector(".menu__toggle");
const menu = document.querySelector(".menu");
const linkList=document.querySelector(".menu_list");
const link = document.querySelectorAll(".menu__el");

if (toggle){

    toggle.addEventListener("click",MenuOpen);
    

}

    for(let i of link){
            i.addEventListener("click", MenuOpen); 
    }





function MenuOpen(event){
    menu.classList.toggle("menu--open");
    document.body.classList.toggle("no-scroll");
}

