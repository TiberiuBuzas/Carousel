const slides = document.getElementsByClassName("carousel-item");
const dots = document.getElementsByClassName("dot");
let prevBtn = document.getElementById("btn-prev");
let nextBtn = document.getElementById("btn-next");
let currentSlide = 0;
let totalSlides = slides.length;

console.log(dots);
nextBtn.addEventListener("click", moveToNextSlide);
prevBtn.addEventListener("click", moveToPreviousSlide);


function hideAllSlides() {
    for(let slide of slides) {
        slide.classList.remove("visible-item");
        slide.classList.add("hidden-item");
    }
    for(let dot of dots) {
        dot.classList.remove("currentDot");
    }
}


function moveToNextSlide() {
    hideAllSlides();
     if(currentSlide === totalSlides - 1) {
         currentSlide = 0;
     } else {
         currentSlide++;
     }

     slides[currentSlide].classList.add("visible-item");
     dots[currentSlide].classList.add("currentDot");
}

function moveToPreviousSlide() {
    hideAllSlides();

    if(currentSlide === 0) {
        currentSlide = totalSlides - 1;
    } else {
        currentSlide--;
    }

    slides[currentSlide].classList.add("visible-item");
    dots[currentSlide].classList.add("currentDot");
}

