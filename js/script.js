// Banner AutoSlide
function replaceName() {
    let name = prompt("What's your name?", "");
    document.getElementById('name').innerHTML = name;
}
replaceName();

let slideIndex = 0;
const slides = document.querySelector('.banner-slides');
const totalSlides = document.querySelectorAll('.banner-slides img').length;

function showSlides() {
    slideIndex++;
    if (slideIndex >= totalSlides) {
        slideIndex = 0;
    }
    slides.style.transform = `translateX(-${slideIndex * 100}%)`;
}

setInterval(showSlides, 3000);

// Form Validation
document.addEventListener('DOMContentLoaded', function() {
    const form = document.querySelector('form.main-content-item');

    form.addEventListener('submit', function(event) {
        const name = document.getElementById('names').value.trim();
        const email = document.getElementById('email').value.trim();
        const interest = document.getElementById('interest').value;

        if (name === '' || email === '' || interest === '') {
            event.preventDefault();
            alert('Please fill out all fields.');
        }
    });
});