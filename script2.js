

/* Stap: 1;Hier komt een nodelist uit aka featuring lijstje van alle like buttons */
let hartjes = document.querySelectorAll(".like");

/* Stap 2: Dan moet je daar eerst overheen foreachen */
hartjes.forEach(hartje => {
    hartje.addEventListener('click', addToFavorites);
})

/* De rest aka featuring; class toevoegen */

function addToFavorites(){
    console.log('Hartje geklikt!');

    let shirt = event.target.closest("li");

    shirt.classList.toggle("liked")
}

let icoontjes = document.querySelectorAll(".icoon")

icoontjes.forEach(icoontje =>{
    icoontje.addEventListener("click", gekliktIcoon); 
      
})

function gekliktIcoon(){

    this.classList.toggle("geklikt");
}


function openPopup() {
    document.getElementById("popup").style.display = "block";
    document.getElementById("overlay").style.display = "block";
}

// Functie om de pop-up te sluiten
function closePopup() {
    document.getElementById("popup").style.display = "none";
    document.getElementById("overlay").style.display = "none";
}


