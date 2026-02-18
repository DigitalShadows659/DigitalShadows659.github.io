/* Typewriter */
const texts = [
    "Merhaba.",
    "Ben Mehmet.",
    "Web Developer.",
    "Security Meraklısı."
];

let textIndex = 0;
let charIndex = 0;
const speed = 80;
const target = document.getElementById("type");

function typeEffect() {
    if (charIndex < texts[textIndex].length) {
        target.textContent += texts[textIndex].charAt(charIndex);
        charIndex++;
        setTimeout(typeEffect, speed);
    } else {
        setTimeout(() => {
            target.textContent = "";
            charIndex = 0;
            textIndex = (textIndex + 1) % texts.length;
            typeEffect();
        }, 1200);
    }
}

typeEffect();

/* Section Navigation */
let step = 0;
const sections = [
    document.getElementById("about"),
    document.getElementById("work"),
    document.getElementById("project")
];

function nextSection() {
    document.querySelector(".hero").classList.add("hidden");
    if (step < sections.length) {
        sections[step].classList.remove("hidden");
        step++;
    }
}

/* External Project */
function goGame() {
    window.open("http://oyun.archever.qzz.io", "_blank");
}
