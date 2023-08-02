const buttons = document.getElementsByClassName("grrt")[0];
const button = document.getElementById("grrt1");
const container = document.querySelector(".container");
var i = 0;
buttons.addEventListener('click',()=>{
    add(i);
})
button.addEventListener('click',()=>{
    remove();
})
function add(i){   // passing a var creates a copy, which will not change the original value
    i++;
    container.innerHTML += `<div id="${i}">a</div>`
    console.log(i);

}
function remove(){
   const divs = document.getElementById(`${i}`)
   console.log(divs);
   divs.remove();
   i--;
  console.log(i);
}