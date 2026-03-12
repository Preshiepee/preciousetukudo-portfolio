// Dark mode toggle
const darkModeBtn = document.getElementById("darkModeBtn");
darkModeBtn.addEventListener("click", () => {
  document.body.classList.toggle("dark-mode");
});

// Typing animation
const text = "Front-End Developer & Data Analyst";
let index = 0;
function typeEffect() {
  if(index < text.length){
    document.getElementById("typing").innerHTML += text.charAt(index);
    index++;
    setTimeout(typeEffect, 80);
  }
}
typeEffect();

// Fade-in sections on scroll
const sections = document.querySelectorAll(".section");
function checkSections(){
  const triggerBottom = window.innerHeight * 0.85;
  sections.forEach(section => {
    const sectionTop = section.getBoundingClientRect().top;
    if(sectionTop < triggerBottom){
      section.classList.add("visible");
    }
  });
}
window.addEventListener("scroll", checkSections);
window.addEventListener("load", checkSections);

// Hero image fade-in
const heroImg = document.querySelector(".hero-image img");
window.addEventListener("load", () => {
  heroImg.classList.add("visible");
});
document.getElementById("downloadCV").addEventListener("click", () => {
  const link = document.createElement("a");
  link.href = "Precious_CV.pdf"; // path to your CV
  link.download = "Precious_CV.pdf";
  link.click();
});