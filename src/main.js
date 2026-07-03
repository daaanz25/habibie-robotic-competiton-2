import "./assets/css/input.css";

import Alpine from "alpinejs";
import counter from "./js/counter";

// 1. Daftarkan fungsi counter ke window agar dikenali x-data="counter()"
window.counter = counter;
window.Alpine = Alpine;

// 2. Daftarkan Global Store untuk Navbar
Alpine.store("navbar", {
  activeSection: "home",
});

// 3. JALANKAN ALPINE SECARA LANGSUNG (Format ES Module standard)
Alpine.start();

// 4. Jalankan Scroll Spy Menggunakan IntersectionObserver
// Gunakan window.addEventListener agar berjalan tepat setelah elemen HTML dirender
window.addEventListener("layout-ready", () => {}, { once: true }); // Fail-safe tracker

const sections = document.querySelectorAll("section[id]");
const observerOptions = {
  rootMargin: "-30% 0px -60% 0px",
};

const observer = new IntersectionObserver((entries) => {
  entries.forEach((entry) => {
    if (entry.isIntersecting) {
      Alpine.store("navbar").activeSection = entry.target.id;
    }
  });
}, observerOptions);

sections.forEach((section) => observer.observe(section));
