"use strict" ;


const toggle = document.querySelector(".menu__toggle");
const menu = document.querySelector(".menu");
const linkList=document.querySelector(".menu_list")
const link = document.querySelectorAll(".menu__el")

if (toggle){

    toggle.addEventListener("click",MenuOpen);
    

}

    for(let i of link){
            i.addEventListener("click", MenuOpen); 
    }





function MenuOpen(){
    menu.classList.toggle("menu--open");
}

