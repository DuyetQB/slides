

let autoWrap = document.querySelector(".auto-wrap-slide");
let autoSlide = document.querySelectorAll(".auto-slide");
let nextAuto = document.querySelector("#auto-next");
let prevAuto = document.querySelector("#auto-prev");
let autoCounter  = 1;
let autoSize = autoSlide[0].clientWidth;

autoWrap.style.transform = 'translateX('+(-autoSize *autoCounter)+'px)';



    nextAuto.addEventListener("click",()=>{
        if(autoCounter>=autoSlide.length-1) return;
        autoWrap.style.transition = 'transform 0.3s ease-in-out';
        autoCounter++;
        autoWrap.style.transform = 'translateX('+(-autoSize *autoCounter)+'px)';
        autoplay();
    
    });
function autoplay(){
    if(autoCounter>=autoSlide.length-1) return;
    autoWrap.style.transition = 'transform 0.3s ease-in-out';
    autoCounter++;
    autoWrap.style.transform = 'translateX('+(-autoSize *autoCounter)+'px)';
}
setInterval(autoplay,2000);




prevAuto.addEventListener("click",()=>{
    if(autoCounter<=0) return;
    autoWrap.style.transition = 'transform 0.3s ease-in-out';
    autoCounter--;
    autoWrap.style.transform = 'translateX('+(-autoSize *autoCounter)+'px)';

});

autoWrap.addEventListener("transitionend", ()=>{
 
    if(autoSlide[autoCounter].id === "lastauto"){
        autoWrap.style.transition= "none";
     autoCounter = autoSlide.length - 2;
  
    }
    autoWrap.style.transform = 'translateX('+(-autoSize *autoCounter)+'px)';

    if(autoSlide[autoCounter].id === "firstauto"){
        autoWrap.style.transition= "none";
     autoCounter = autoSlide.length - autoCounter;
  
    }
    autoWrap.style.transform = 'translateX('+(-autoSize *autoCounter)+'px)';
});




