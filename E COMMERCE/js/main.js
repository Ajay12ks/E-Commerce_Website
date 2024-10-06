document.addEventListener("DOMContentLoaded", () => {
    // Image Slider
    const slides = document.querySelectorAll(".slide");
    let currentSlide = 0;

    // Function to show the current slide
    function showSlide(index) {
        slides.forEach((slide, i) => {
            slide.style.display = i === index ? "block" : "none";
        });
    }

    // Function to change slide every 5 seconds
    function nextSlide() {
        currentSlide = (currentSlide + 1) % slides.length; // Loop back to the first slide
        showSlide(currentSlide);
    }

    // Show the first slide initially
    showSlide(currentSlide);

    // Change slide every 5 seconds
    setInterval(nextSlide, 5000);

    // Product Filter
    const filterSelect = document.getElementById("categoryFilter");
    const products = document.querySelectorAll(".product");

    filterSelect.addEventListener("change", function() {
        const selectedCategory = this.value;

        products.forEach(product => {
            if (selectedCategory === "all" || product.dataset.category === selectedCategory) {
                product.style.display = "block"; // Show product
            } else {
                product.style.display = "none"; // Hide product
            }
        });
    });
});
