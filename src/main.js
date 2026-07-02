import "./assets/css/input.css";

import Alpine from "alpinejs";
import counter from "./js/counter";

window.Alpine = Alpine;
window.counter = counter;

Alpine.store("navbar", {
  activeSection: "home",
});

Alpine.start();

// Scroll Spy
const sections = document.querySelectorAll("section[id]");

window.addEventListener("scroll", () => {
  let current = "";

  sections.forEach((section) => {
    const sectionTop = section.offsetTop - 120;
    const sectionHeight = section.offsetHeight;

    if (
      window.scrollY >= sectionTop &&
      window.scrollY < sectionTop + sectionHeight
    ) {
      current = section.id;
    }
  });

  if (current) {
    Alpine.store("navbar").activeSection = current;
  }
});
