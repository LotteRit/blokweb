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


let hartje = document.querySelectorAll(".like");

hartje.addEventListener("click", addToFavorites);


function addToFavorites(){
    let shirt = hartje.closest("li");

    shirt.classList.toggle("liked")
}

// let wishtlistLike = document.querySelectorAll("button.like");

// for (let i = 0; i <wishtlistLike.length; i++) {
//     wishtlistLike[i].onclick = addToFavorites;
// }

// function addToFavorites(event){
//     let geklikt = event.target;
//     let shirts = geklikHart.closest("li");
//     gekliktHart.classList.toggle("liked");
// }

// function openPopup(){
//     document.getElementById("popup").style.display = "block";
//     document.getElementById("overlay").style.display = "block";

// }

// function cloesePopUp(){
//     document.getElementById("popup").style.display = "none";
//     document.getElementById("overlay").style.display = "none";
// }

// function openPopUp(){
//     document.getElementById(".myPopUp").style.display = 
//     "block";
// }

// function cloesePopUp(){
//     document.getElementById(".myPopUp").style.display = 
//     "none";
// }



// let imgkl1 = document.querySelector("div:nth-of-type(1)");
// let imgkl2 = document.querySelector("div:nth-of-type(2");

// imgkl1.addEventListener("click",veranderimg);

// function veranderimg(){
//     imgkl1.classList.toggle
// }

// let imgkl1 = document.querySelector('div:nth-of-type(1)')
// let imgkl2 = document.querySelector('div:nth-of-type(2)')
// let imgkl3 = document.querySelector('div:nth-of-type(3)')

// imgkl1.addEventListener('click', veranderimg);
// imgkl2.addEventListener('click', veranderimg2);
// imgkl3.addEventListener('click', veranderimg3);



// function veranderimg(){
// imgkl1.classList.toggle
// }

// function veranderimg2(){
//     imgkl2.classList.toggle
// }

// function veranderimg3(){
//     imgkl3.classList.toggle
// }


// let img1 = document.querySelector(".imgkl1");
// let img2 = document.querySelector(".imgkl2");
// let img3 = document.querySelector(".imgkl3");


// let images = [
//     "/images/monthlyMood12.jpg",
//     "/images/monthlyMood22.jpg",
//     "/images/monthlyMood32.jpg" 
// ]


// function veranderImg(){
//     let index = Math.floor(Math.random() * images.length )
//     let randomUrl1 = images[index + 1]
//     let randomUrl2 = images[index]
//     let randomUrl3 = images[index - 1]

//     img1.src = randomUrl1
//     img2.src = randomUrl2
//     img3.src = randomUrl3
// }

// img1.addEventListener('click', veranderImg)
// img2.addEventListener('click', veranderImg)
// img3.addEventListener('click', veranderImg)



