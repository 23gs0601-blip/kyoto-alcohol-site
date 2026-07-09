const slides = document.querySelectorAll(".slide-link");
const dots = document.querySelectorAll(".dot");

const prev = document.querySelector(".prev");
const next = document.querySelector(".next");

let current = 0;
let interval;

// Show a specific slide
function showSlide(index) {

    slides.forEach(slide => slide.classList.remove("active"));
    dots.forEach(dot => dot.classList.remove("active"));

    slides[index].classList.add("active");
    dots[index].classList.add("active");

    current = index;
}

// Next slide
function nextSlide() {
    let index = current + 1;

    if (index >= slides.length)
        index = 0;

    showSlide(index);
}

// Previous slide
function prevSlide() {
    let index = current - 1;

    if (index < 0)
        index = slides.length - 1;

    showSlide(index);
}

// Arrow buttons
next.addEventListener("click", () => {
    nextSlide();
    restartAutoPlay();
});

prev.addEventListener("click", () => {
    prevSlide();
    restartAutoPlay();
});

// Clickable dots
dots.forEach((dot, index) => {

    dot.addEventListener("click", () => {
        showSlide(index);
        restartAutoPlay();
    });

});

// Auto play
function startAutoPlay() {
    interval = setInterval(nextSlide, 5000);
}

function stopAutoPlay() {
    clearInterval(interval);
}

function restartAutoPlay() {
    stopAutoPlay();
    startAutoPlay();
}

// Pause when hovering
const carousel = document.querySelector(".carousel");

carousel.addEventListener("mouseenter", stopAutoPlay);
carousel.addEventListener("mouseleave", startAutoPlay);

// Start
showSlide(0);
startAutoPlay();
