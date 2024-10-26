
// Toggle dropdown when clicking on selected option
document.querySelector('.selected-option').addEventListener('click', function () {
    document.querySelector('.dropdown-options').classList.toggle('show');
});

// Event listeners for each dropdown option
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
    const items = document.querySelectorAll('.product-grid .item');
    items.forEach(item => {
        const itemCategory = item.getAttribute('data-category');
        if (category === 'All' || itemCategory === category) {
            item.style.display = 'block';
        } else {
            item.style.display = 'none';
        }
    });
}

