// JavaScript Document
console.log("hi");


let carousel = document.querySelector("carousel");




// // let imgkl1 = document.querySelector("imgkl1");
// // let imgkl2 = document.querySelector("imgkl2");

// // imgkl1.addEventListener("click",veranderimg);

// // function veranderimg(){
// //     imgkl1.classList.toggle('hidden')
// // }

// let imgkl1 = document.querySelector('div:nth-of-type(1)')
// let imgkl2 = document.querySelector('div:nth-of-type(2)')
// let imgkl3 = document.querySelector('div:nth-of-type(3)')

// imgkl2.addEventListener('click', veranderimg);
// imgkl1.addEventListener('click', veranderimg2);
// imgkl3.addEventListener('click', veranderimg3);



// function veranderimg(){
// imgkl1.classList.toggle("overlay-2")
// imgkl3.classList.toggle("overlay-6")
// }

// function veranderimg2(){
//     imgkl2.classList.toggle("overlay-4")
// }

// function veranderimg3(){
//     imgkl3.classList.toggle("overlay-6")
// }


let img1 = document.querySelector(".imgkl1");
let img2 = document.querySelector(".imgkl2");
let img3 = document.querySelector(".imgkl3");


let images = [
    "/images/monthlyMood12.jpg",
    "/images/monthlyMood22.jpg",
    "/images/monthlyMood32.jpg" 
]


function veranderImg(){
    let index = Math.floor(Math.random() * images.length )
    let randomUrl1 = images[index + 1]
    let randomUrl2 = images[index]
    let randomUrl3 = images[index - 1]

    img1.src = randomUrl1
    img2.src = randomUrl2
    img3.src = randomUrl3
}

img1.addEventListener('click', veranderImg)
img2.addEventListener('click', veranderImg)
img3.addEventListener('click', veranderImg)

