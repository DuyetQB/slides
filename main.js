window.onscroll = function(){ myscroll()};
function myscroll(){
    let footer =document.querySelector(".footer");
    let right =document.querySelector(".main-right");
let left = document.querySelector(".main-left");
let sticky = left.offsetTop;

if(window.pageYOffset >= 230 ){
    left.classList.add("sticky");
    right.style.width = "100%";
   right.style.marginLeft = "245px";
  footer.style.width = "100%";
  footer.style.marginLeft = "245px";
}
    else{
    left.classList.remove("sticky");
    right.style.width = "80%";
    right.style.marginLeft = "0px";
   footer.style.width = "80%";
    footer.style.marginLeft = "0px";
}
}