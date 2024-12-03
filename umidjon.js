import './style.css';

function duplicateSlides() {
  const track = document.querySelector('.slideshow-track');
  const slides = document.querySelectorAll('.slide');
  
  // Clone slides and append them to create seamless loop
  slides.forEach(slide => {
    const clone = slide.cloneNode(true);
    track.appendChild(clone);
  });
}

document.querySelectorAll('a[href^="#"]').forEach(anchor => {
  anchor.addEventListener('click', function (e) {
      e.preventDefault();
      document.querySelector(this.getAttribute('href')).scrollIntoView({
          behavior: 'smooth'
      });
  });
});

// Add animation to stats on page load
window.addEventListener('load', () => {
  const stats = document.querySelectorAll('.stats__value');
  stats.forEach(stat => {
      stat.style.opacity = '0';
      setTimeout(() => {
          stat.style.transition = 'opacity 0.5s ease-in-out';
          stat.style.opacity = '1';
      }, 300);
  });
});