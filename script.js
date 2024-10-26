let currentSlideIndex = 0;
const slides = document.querySelector('.slides');
const dots = document.querySelectorAll('.dot');

// Function to display the slides
function showSlides(index) {
    const totalSlides = slides.children.length;

    if (index >= totalSlides) currentSlideIndex = 0; // Loop back to the first slide
    if (index < 0) currentSlideIndex = totalSlides - 1; // Loop to the last slide

    // Move the slides container
    slides.style.transform = `translateX(${-currentSlideIndex * 100}vw)`;

    // Update dots
    dots.forEach((dot, i) => {
        dot.classList.remove('active-dot');
        if (i === currentSlideIndex) {
            dot.classList.add('active-dot');
        }
    });
}

// Function to move slides left or right
function moveSlides(step) {
    currentSlideIndex += step;
    showSlides(currentSlideIndex);
}

// Function to jump to a specific slide
function currentSlide(index) {
    currentSlideIndex = index-1;
    showSlides(currentSlideIndex);
}

// Auto-slide every 5 seconds
setInterval(() => {
    moveSlides(1);
}, 5000); // Change slide every 5 seconds

// Initialize the first slide and dots
showSlides(currentSlideIndex);
