let currentSlideIndex = 0;
const slides = document.querySelector('.slides');
const dots = document.querySelectorAll('.dot');

function showSlides(index) {
    const totalSlides = slides.children.length;

    if (index >= totalSlides) currentSlideIndex = 0;
    if (index < 0) currentSlideIndex = totalSlides - 1;

    slides.style.transform = `translateX(${-currentSlideIndex * 100}vw)`;

    dots.forEach((dot, i) => {
        dot.classList.remove('active-dot');
        if (i === currentSlideIndex) {
            dot.classList.add('active-dot');
        }
    });
}

function moveSlides(step) {
    currentSlideIndex += step;
    showSlides(currentSlideIndex);
}

function currentSlide(index) {
    currentSlideIndex = index - 1;
    showSlides(currentSlideIndex);
}

setInterval(() => {
    moveSlides(1);
}, 5000);

showSlides(currentSlideIndex);

// Dropdown filter functionality
document.querySelector('.selected-option').addEventListener('click', function () {
    document.querySelector('.dropdown-options').classList.toggle('show');
});

document.querySelectorAll('.option').forEach(option => {
    option.addEventListener('click', function () {
        const selected = document.querySelector('.selected-option');
        const selectedCategory = this.getAttribute('data-value');
        selected.textContent = this.textContent;
        selected.setAttribute('data-value', selectedCategory);
        document.querySelector('.dropdown-options').classList.remove('show');
        
        // Filter items based on category
        filterItems(selectedCategory);
    });
});

// Close dropdown when clicking outside
document.addEventListener('click', function (event) {
    if (!event.target.closest('.custom-dropdown')) {
        document.querySelector('.dropdown-options').classList.remove('show');
    }
});

// Function to filter items by category
function filterItems(category) {
    const items = document.querySelectorAll('.image-grid .item');
    items.forEach(item => {
        const itemCategory = item.getAttribute('data-category');
        if (category === 'All' || itemCategory === category) {
            item.style.display = 'block';
        } else {
            item.style.display = 'none';
        }
    });
}
