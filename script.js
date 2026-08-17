// =========================
// SMOOTH SCROLL
// =========================

const navLinks = document.querySelectorAll(".nav-links a");

navLinks.forEach(function(link) {

    link.addEventListener("click", function(event) {

        event.preventDefault();

        const targetId = this.getAttribute("href");
        const targetSection = document.querySelector(targetId);

        if (targetSection) {
            targetSection.scrollIntoView({
                behavior: "smooth"
            });
        }

    });

});


// =========================
// TYPING ANIMATION
// =========================

const typingText = document.getElementById("typing-text");

const words = [
    "Aspiring AI Engineer",
    "Python Developer",
    "Web Developer",
    "Tech Enthusiast"
];

let wordIndex = 0;
let charIndex = 0;
let deleting = false;

function typeEffect() {

    const currentWord = words[wordIndex];

    if (!deleting) {

        typingText.textContent =
            currentWord.substring(0, charIndex + 1);

        charIndex++;

        if (charIndex === currentWord.length) {

            deleting = true;

            setTimeout(typeEffect, 1500);
            return;
        }

    } else {

        typingText.textContent =
            currentWord.substring(0, charIndex - 1);

        charIndex--;

        if (charIndex === 0) {

            deleting = false;

            wordIndex++;

            if (wordIndex === words.length) {
                wordIndex = 0;
            }

        }
    }

    setTimeout(typeEffect, deleting ? 60 : 100);
}

typeEffect();
