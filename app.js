// Navbar Functionality
const hamburger = document.getElementById('hamburger');
const sidebar = document.getElementById('sidebar');
const closeBtn = document.getElementById('close-btn');
const searchIcons = document.querySelectorAll('.search-icon');

// Toggle Sidebar
hamburger.addEventListener('click', () => {
    sidebar.classList.add('active');
    hamburger.style.display = 'none';
});

closeBtn.addEventListener('click', () => {
    sidebar.classList.remove('active');
    hamburger.style.display = 'block';
});

// Toggle Search
searchIcons.forEach(icon => {
    icon.addEventListener('click', (e) => {
        const container = e.target.closest('.search-container');
        container.classList.toggle('active');
    });
});

// Banner Slideshow
const slides = document.querySelectorAll('.slide');
let currentSlide = 0;

function showNextSlide() {
    slides[currentSlide].classList.remove('active');
    currentSlide = (currentSlide + 1) % slides.length;
    slides[currentSlide].classList.add('active');
}

setInterval(showNextSlide, 3000);

// Close search when clicking outside
document.addEventListener('click', (e) => {
    if (!e.target.closest('.search-container')) {
        document.querySelectorAll('.search-container').forEach(container => {
            container.classList.remove('active');
        });
    }
});

// Search Functionality
const productForms = document.querySelectorAll('.product-item-container form');

function filterProducts(query) {
    productForms.forEach(form => {
        const productName = form.querySelector('.name p').textContent.toLowerCase();
        if (productName.includes(query.toLowerCase())) {
            form.style.display = 'block';
        } else {
            form.style.display = 'none';
        }
    });
}

const navbarSearch = document.getElementById('navbar-search');
const sidebarSearch = document.getElementById('sidebar-search');

navbarSearch.addEventListener('input', (e) => {
    filterProducts(e.target.value);
});

sidebarSearch.addEventListener('input', (e) => {
    filterProducts(e.target.value);
});

// View Page Image Switching
function initializeImageSwitcher() {
    const bigImage = document.querySelector('.product-container-detail .big-img img');
    const smallImages = document.querySelectorAll('.product-container-detail .sml-img');

    if (bigImage && smallImages.length > 0) {
        smallImages.forEach((smallImg, index) => {
            smallImg.addEventListener('click', () => {
                // Remove active class from all thumbnails
                smallImages.forEach(img => img.classList.remove('active'));
                // Add active class to clicked thumbnail
                smallImg.classList.add('active');
                // Change main image source
                bigImage.src = smallImg.querySelector('img').src;
                // Add fade animation
                bigImage.parentElement.style.opacity = 0;
                setTimeout(() => {
                    bigImage.parentElement.style.opacity = 1;
                }, 100);
            });
        });
    }
}

// Initialize when page loads
document.addEventListener('DOMContentLoaded', () => {
    initializeImageSwitcher();
});