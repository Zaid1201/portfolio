// script.js
// Smooth scrolling for navigation links
document.querySelectorAll('.nav-links a').forEach(link => {
    link.addEventListener('click', function(e) {
        e.preventDefault();
        const targetId = this.getAttribute('href').substring(1);
        const targetSection = document.getElementById(targetId);

        window.scrollTo({
            top: targetSection.offsetTop,
            behavior: 'smooth'
        });
    });
});

// Add a back-to-top button
const backToTopButton = document.createElement('button');
backToTopButton.textContent = '↑';
backToTopButton.classList.add('back-to-top');
document.body.appendChild(backToTopButton);

backToTopButton.addEventListener('click', () => {
    window.scrollTo({
        top: 0,
        behavior: 'smooth'
    });
});

window.addEventListener('scroll', () => {
    if (window.scrollY > 300) {
        backToTopButton.style.display = 'block';
    } else {
        backToTopButton.style.display = 'none';
    }
});

// Dark mode toggle
const darkModeToggle = document.createElement('button');
darkModeToggle.textContent = '🌙';
darkModeToggle.classList.add('dark-mode-toggle');
document.body.appendChild(darkModeToggle);

darkModeToggle.addEventListener('click', () => {
    document.body.classList.toggle('dark-mode');
    if (document.body.classList.contains('dark-mode')) {
        darkModeToggle.textContent = '☀️';
    } else {
        darkModeToggle.textContent = '🌙';
    }
});


// Open the modal and display the clicked image
function openModal(img) {
    const modal = document.getElementById("imageModal");
    const modalImg = document.getElementById("fullImage");
    modal.style.display = "block";
    modalImg.src = img.src;
}

// Close the modal
function closeModal() {
    document.getElementById("imageModal").style.display = "none";
}

// Add navigation for new sections dynamically (if needed)
const navLinks = document.querySelector('.nav-links');
navLinks.innerHTML += `
    <li><a href="#education">Education</a></li>
    <li><a href="#certifications">Certifications</a></li>
`;
