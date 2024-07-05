  // Toggle style switcher
  document.querySelector('.s-icon').addEventListener('click', () => {
    document.querySelector('.style-switcher').classList.toggle('open');
});

// Hide style switcher on scroll
window.addEventListener('scroll', () => {
    if (document.querySelector('.style-switcher').classList.contains('open')) {
        document.querySelector('.style-switcher').classList.remove('open');
    }
});

// Function to set active style
function setActiveStyle(color) {
    document.querySelectorAll('.alternate-style').forEach(style => {
        if (style.getAttribute('title') === color) {
            style.removeAttribute('disabled');
        } else {
            style.setAttribute('disabled', 'true');
        }
    });
}

// Event listeners for navigation links
document.querySelectorAll('.nav a').forEach(link => {
    link.addEventListener('click', function(event) {
        event.preventDefault(); // Prevent the default link behavior
        const targetSection = document.querySelector(this.getAttribute('href'));
        document.querySelectorAll('.section').forEach(section => {
            section.style.display = 'none';
        });
        targetSection.style.display = 'block';
    });
});