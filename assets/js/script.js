document.addEventListener("DOMContentLoaded", () => {

  // Footer year
  document.getElementById("currentYear").textContent =
    new Date().getFullYear();

  // Card animation
  const cards = document.querySelectorAll(".project-card");
  const observer = new IntersectionObserver(entries => {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        entry.target.style.opacity = "1";
        entry.target.style.transform = "translateY(0)";
        entry.target.style.transition = "0.6s ease";
        observer.unobserve(entry.target);
      }
    });
  }, { threshold: 0.1 });

  cards.forEach(card => observer.observe(card));
});