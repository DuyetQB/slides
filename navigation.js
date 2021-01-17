let navigationWrap = document.querySelector(".navigation-wrap-slide");
let navigationSlide = document.querySelectorAll(".navigation-slide");
let prev = document.querySelector("#navigation-prev");
let next = document.querySelector("#navigation-next");

let counter  = 0;
let size = navigationSlide[0].clientWidth;
prev.disabled = true;
 prev.style.opacity = "0.4";

navigationWrap.style.transform = 'translateX(' + (-size * counter) + 'px)';

    next.addEventListener("click" , () =>{
     
navigationWrap.style.transition = "transform 0.4s ease-in-out";
counter++;
navigationWrap.style.transform = 'translateX(' + (-size * counter) + 'px)';
if(navigationSlide[counter].id === "lastdiv"){
    next.disabled = true;
   

};
});





prev.addEventListener("click" , () =>{
    navigationWrap.style.transition = "transform 0.4s ease-in-out";
    counter--;
    navigationWrap.style.transform = 'translateX(' + (-size * counter) + 'px)';
    if(navigationSlide[counter].id === "firstdiv"){
        prev.disabled = true;
    }
    });

navigationWrap.addEventListener("transitionend", ()=>{
if(navigationSlide[counter].id === "lastdiv"){
    navigationWrap.style.transition = "none";
    next.style.opacity = "0.4" ;
  next.style.cursor = "default";
   
}
else{
    next.style.opacity = "1";
    next.style.cursor = "pointer";
    next.disabled = false;
}

if(navigationSlide[counter].id === "firstdiv"){
    navigationWrap.style.transition = "none";
    prev.style.opacity = "0.4";
    prev.style.cursor = "default";
}
else{
    prev.style.opacity = "1";
    prev.style.cursor = "pointer";
    prev.disabled = false;
}
})