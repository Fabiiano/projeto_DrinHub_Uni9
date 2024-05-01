const carrossel = document.querySelector('.carrossel .slider');
const prevBtn = document.querySelector('.carrossel .prev');
const nextBtn = document.querySelector('.carrossel .next');
const burger = document.querySelector('.burger');
const navLinks = document.querySelector('.nav-links');
let currentSlide = 1;

function showSlide(n) {
  carrossel.classList.remove('slide-1', 'slide-2', 'slide-3');
  carrossel.classList.add(`slide-${n}`);
  currentSlide = n;
}

function nextSlide() {
  if (currentSlide === 2) {
    showSlide(0);
  } else {
    showSlide(currentSlide + 1);
  }
}

function prevSlide() {
  if (currentSlide === 0) {
    showSlide(2);
  } else {
    showSlide(currentSlide - 1);
  }
}

prevBtn.addEventListener('click', prevSlide);
nextBtn.addEventListener('click', nextSlide);

// Automatically change slide every 5 seconds
setInterval(nextSlide, 5000);

burger.addEventListener('click', () => {
  navLinks.classList.toggle('active');
  burger.classList.toggle('active');
});