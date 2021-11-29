//https://github.com/apietryga/frontEnd/blob/master/cw8/script.js
const imgsinfo = [
{
    title : "Widok 1",
    src : "https://github.com/apietryga/kurs-Front-end/blob/master/materialy/lekcjajs/img/1.jpg?raw=true"
},

{
    title : "Widok 2",
    src : "https://github.com/apietryga/kurs-Front-end/blob/master/materialy/lekcjajs/img/2.jpg?raw=true"

},

{
    title : "Widok 3",
    src : "https://github.com/apietryga/kurs-Front-end/blob/master/materialy/lekcjajs/img/3.jpg?raw=true"
},
];

function changeImg(nr)
{
    const img = document.querySelector("img");
    img.src = imgsinfo[nr].src;
    img.alt = imgsinfo[nr].title;
}

let currentSlide = 0;

changeImg(currentSlide);

function changeCurrentSlide(direction)
{
    if(direction == "left"){
        currentSlide--;
        if(currentSlide == -1){
            currentSlide = 2;
        }
    }else{
        currentSlide++;
        if(currentSlide == 3){
            currentSlide = 0;
        }
    }
    changeImg(currentSlide);
}

// dodaj wydarzenia do strzałek (po kliknieciu...)

const left = document.querySelector(".left");

left.onclick = function(){changeCurrentSlide('left')};

const right = document.querySelector(".right");

right.onclick = function(){changeCurrentSlide('right')};
