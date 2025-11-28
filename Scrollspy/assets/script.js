"use strict" ;

const spyOption ={
    root:null,
    rootMargin:"0px",
    treshold:0.8    
};

const observer = new IntersectionObserver(ScrollSpy, spyOption);
function ScrollSpy(entries,_observer){
    for(let entry of entries){
        //savoir si la fonction est a 80% dans le viewport//
        if (entry.isIntersecting){
            const sectionId = entry.target.getAttribute("id");
            const active = document.querySelector(".menu__el--active");
            if(active){
                active.classList.remove("menu__el--active");
            }
            const navActive = document.querySelector('a[href="#'+ sectionId + '"]');
            navActive.parentElement.classList.add("menu__el--active"); 
        }
    }
}

const sections = document.querySelectorAll(".section");
for(let section of sections){
    observer.observe(section);
}