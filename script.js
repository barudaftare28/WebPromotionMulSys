// script.js

// Fade-in saat scroll
document.addEventListener("DOMContentLoaded", () => {
  const elements = document.querySelectorAll(
    ".hero, .sinopsis, .pemeran, .dokumentasi"
  );

  const observer = new IntersectionObserver(
    (entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          entry.target.style.animationPlayState = "running";
          observer.unobserve(entry.target); // hanya animasi sekali
        }
      });
    },
    {
      threshold: 0.1,
    }
  );

  elements.forEach((el) => {
    el.style.animationPlayState = "paused";
    observer.observe(el);
  });
});

function toggleMenu() {
  const nav = document.querySelector(".navbar-nav");
  nav.classList.toggle("active");
}
