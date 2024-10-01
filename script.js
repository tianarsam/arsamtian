// script.js
// Add event listener to navigation menu
document.addEventListener("DOMContentLoaded", function() {
    const navLinks = document.querySelectorAll("nav a");
    navLinks.forEach(function(link) {
        link.addEventListener("click", function(event) {
            event.preventDefault();
            const targetSection = document.querySelector(link.getAttribute("href"));
            targetSection.scrollIntoView({ behavior: "smooth" });
        });
    });
});