// JavaScript Document
console.log("hi");




let imgkl1 = document.querySelector(".kop2Home div img:nth-of-type(1)");
let imgkl2 = document.querySelector(".kop2Home div img:nth-of-type(2)");
let imgkl3 = document.querySelector(".kop2Home div img:nth-of-type(3)");

imgkl1.addEventListener("click", veranderimg);
imgkl2.addEventListener("click", veranderimg2);
imgkl3.addEventListener("click", veranderimg3);

function veranderimg(){ 
    imgkl2.src = "images/monthlyMood12.jpg";
    imgkl3.src = "images/monthlyMood32.jpg";
}

function veranderimg2(){
     imgkl3.src = "images/monthlyMood3.jpg";
     imgkl1.src = "images/monthlyMood22.jpg";
    }

function veranderimg3(){ 
    imgkl1.src = "images/monthlyMood2.jpg";
    imgkl2.src = "images/monthlyMood1.jpg";
}

const ding = document.querySelector(".ding");
let shirt2 = document.querySelector(".kop3Home img:nth-of-type(2)");

ding.addEventListener("mouseover",achterkantShirt);
ding.addEventListener("mouseout",achterkantShirt2);

function achterkantShirt(){
    shirt2.classList.add('visible');
}

function achterkantShirt2(){
    shirt2.classList.remove('visible');    
}


/* https://chatgpt.com/c/66f59f6f-e034-8012-9cdc-fe5267bc7cd3
https://www.w3schools.com/howto/howto_js_popup_form.asp*/


function openPopup() {
    document.getElementById("popup").style.display = "block";
    document.getElementById("overlay").style.display = "block";
}

// Functie om de pop-up te sluiten
function closePopup() {
    document.getElementById("popup").style.display = "none";
    document.getElementById("overlay").style.display = "none";
}

/* Stap: 1;Hier komt een nodelist uit aka featuring lijstje van alle like buttons */
var hartjes = document.querySelectorAll(".like");

/* Stap 2: Dan moet je daar eerst overheen foreachen */
hartjes.forEach(hartje => {
    hartje.addEventListener('click', addToFavorites);
})

/* De rest aka featuring; class toevoegen */

function addToFavorites(){
    console.log('Hartje geklikt!');

    let shirt = hartje.closest("li");

    shirt.classList.toggle("liked")
}

let icoontjes = document.querySelectorAll(".icoon")

icoontjes.forEach(icoontje =>{
    icoontje.addEventListener("click", gekliktIcoon); 
      
})

function gekliktIcoon(){

    this.classList.toggle("geklikt");
}






