const revealItems = document.querySelectorAll(
  ".section, .service-card, .hero-content, .hero-visual, .highlight"
);

revealItems.forEach((item) => item.classList.add("reveal"));

const observer = new IntersectionObserver(
  (entries) => {
    entries.forEach((entry) => {
      if (entry.isIntersecting) {
        entry.target.classList.add("visible");
        observer.unobserve(entry.target);
      }
    });
  },
  { threshold: 0.2 }
);

revealItems.forEach((item) => observer.observe(item));

const navLinks = document.querySelectorAll(".nav a[href^='#']");
navLinks.forEach((link) => {
  link.addEventListener("click", (event) => {
    event.preventDefault();
    const target = document.querySelector(link.getAttribute("href"));
    target?.scrollIntoView({ behavior: "smooth" });
  });
});

const contactForm = document.querySelector(".contact-form");
contactForm.addEventListener("submit", (event) => {
  event.preventDefault();
  contactForm.reset();
});

const trigger = document.querySelector(".prank-trigger");
const prankImage = document.querySelector(".prank-image");

let timeout;

trigger.addEventListener("mouseenter", () => {
  prankImage.classList.add("active");

  // Reset after it finishes so it can be triggered again
  clearTimeout(timeout);
  timeout = setTimeout(() => {
    prankImage.classList.remove("active");
  }, 1000);
});
