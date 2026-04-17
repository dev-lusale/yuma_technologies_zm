console.log("Website Loaded");

/* MOBILE MENU */
document.addEventListener("DOMContentLoaded", () => {

const menuToggle = document.getElementById("menu-toggle");
const navLinks = document.querySelector(".nav-links");

if (menuToggle && navLinks) {
    menuToggle.addEventListener("click", () => {
        navLinks.classList.toggle("active");
    });
}

/* DARK MODE */
const toggle = document.getElementById("darkModeToggle");
if (toggle) {
    toggle.addEventListener("click", () => {
        document.body.classList.toggle("dark-mode");
    });
}

/* CONTACT FORM */
const contactForm = document.querySelector(".contact-form");
if (contactForm) {
    contactForm.addEventListener("submit", e => {
        e.preventDefault();
        alert("Message Sent Successfully!");
    });
}

/* SUBSCRIBE */
const subscribeForm = document.querySelector(".subscribe-form");
if (subscribeForm) {
    subscribeForm.addEventListener("submit", e => {
        e.preventDefault();
        alert("Subscribed Successfully!");
    });
}

});

/* PROJECT FILTER */
function filterProjects(category) {
    let projects = document.querySelectorAll(".project");
    projects.forEach(project => {
        project.style.display =
            category === "all" || project.classList.contains(category)
                ? "block"
                : "none";
    });
}
