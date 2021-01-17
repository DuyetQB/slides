let virtualWrap = document.querySelector(".virtual-wrap-slide");
let virtualSlide = document.querySelectorAll(".virtual-slide");
let virtualPrev = document.querySelector("#virtual-prev");
let virtualNext = document.querySelector("#virtual-next");

let virtualCounter  = 0;
let virtualSize = virtualSlide[0].clientWidth;
virtualPrev.disabled = true;
virtualPrev.style.opacity = "0.4";

 virtualWrap.style.transform = 'translateX(' + (-virtualSize * virtualCounter) + 'px)';

 virtualNext.addEventListener("click" , () =>{
     
  virtualWrap.style.transition = "transform 0.4s ease-in-out";
  virtualCounter++;
virtualWrap.style.transform = 'translateX(' + (-virtualSize * virtualCounter) + 'px)';
if(virtualSlide[virtualCounter].id === "lastvirtual"){
    virtualNext.disabled = true;
   

};
});





virtualPrev.addEventListener("click" , () =>{
    virtualWrap.style.transition = "transform 0.4s ease-in-out";
    virtualCounter--;
    virtualWrap.style.transform = 'translateX(' + (-virtualSize *virtualCounter) + 'px)';
    if(virtualSlide[virtualCounter].id === "firstvirtual"){
        virtualPrev.disabled = true;
    }
    });

    virtualWrap.addEventListener("transitionend", ()=>{
if(virtualSlide[virtualCounter].id === "lastvirtual"){
    virtualWrap.style.transition = "none";
    virtualNext.style.opacity = "0.4" ;
    virtualNext.style.cursor = "default";
   
}
else{
    virtualNext.style.opacity = "1";
    virtualNext.style.cursor = "pointer";
    virtualNext.disabled = false;
}

if(virtualSlide[virtualCounter].id === "firstvirtual"){
    virtualWrap.style.transition = "none";
    virtualPrev.style.opacity = "0.4";
    virtualPrev.style.cursor = "default";
}
else{
    virtualPrev.style.opacity = "1";
    virtualPrev.style.cursor = "pointer";
    virtualPrev.disabled = false;
}
})