let loopWrap = document.querySelector(".loop-wrap-slide");
let loopSlide = document.querySelectorAll(".loop-slide");
let nextLoop = document.querySelector("#loop-next");
let prevLoop = document.querySelector("#loop-prev");
let loopCounter  = 1;
let loopSize = loopSlide[0].clientWidth;

loopWrap.style.transform = 'translateX('+(-loopSize *loopCounter)+'px)';

nextLoop.addEventListener("click",()=>{
    if(loopCounter>=loopSlide.length-1) return;
    loopWrap.style.transition = 'transform 0.3s ease-in-out';
    loopCounter++;
    loopWrap.style.transform = 'translateX('+(-loopSize *loopCounter)+'px)';
 
});

prevLoop.addEventListener("click",()=>{
    if(loopCounter<=0) return;
    loopWrap.style.transition = 'transform 0.3s ease-in-out';
    loopCounter--;
    loopWrap.style.transform = 'translateX('+(-loopSize *loopCounter)+'px)';

});

loopWrap.addEventListener("transitionend", ()=>{
 
    if(loopSlide[loopCounter].id === "lastloop"){
        loopWrap.style.transition= "none";
     loopCounter = loopSlide.length - 2;
  
    }
    loopWrap.style.transform = 'translateX('+(-loopSize *loopCounter)+'px)';

    if(loopSlide[loopCounter].id === "firstloop"){
        loopWrap.style.transition= "none";
     loopCounter = loopSlide.length - loopCounter;
  
    }
    loopWrap.style.transform = 'translateX('+(-loopSize *loopCounter)+'px)';
})