const body =document.querySelector("body");
const button = document.querySelector("button");
const colors = ["black","yellow","green","#323ac2","#8730c9","#e64747","#4791e6","#71e647"];
button.addEventListener("click",changeBackground);

let order = 0;
function changeBackground(){
    if(order ==colors.length) order=0;
    const selectedColor = colors[order];
    body.style.backgroundColor =selectedColor;
    order++;
}