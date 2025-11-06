document.addEventListener('DOMContentLoaded', function() {
  AOS.init({
    duration: 1000,
    once: false,
    mirror: true
  });

  // Force reset animations when elements leave viewport
  const elements = document.querySelectorAll('[data-aos]');

  const observer = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
      if (!entry.isIntersecting) {
        // Remove AOS classes to allow re-animation
        entry.target.classList.remove('aos-animate');
      }
    });
  }, { threshold: 0.1 });

  elements.forEach(el => observer.observe(el));
});
