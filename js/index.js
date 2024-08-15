/*Logica del video del header*/
document.getElementById('bgVideo').addEventListener('ended', function() {
  document.getElementById('banner-content').style.opacity = 1;
});

/*Logica de los Integrantes*/
const slider = document.querySelector('.slider');
const slides = document.querySelectorAll('.slide-integrante');
let currentIndex = 0;
const totalSlides = slides.length;

document.querySelector('.next').addEventListener('click', () => {
    currentIndex = (currentIndex + 1) % slides.length;
    updateSlider();
});

document.querySelector('.prev').addEventListener('click', () => {
    currentIndex = (currentIndex - 1 + slides.length) % slides.length;
    updateSlider();
});

function updateSlider() {
    slider.style.transform = `translateX(-${currentIndex * 100}%)`;
}
  
  /*Logica del Carrusel*/
  let currentSlide = 0;

function showSlide(index) {
  const slides = document.querySelectorAll('.slide');
  if (index >= slides.length) {
    currentSlide = 0;
  } else if (index < 0) {
    currentSlide = slides.length - 1;
  } else {
    currentSlide = index;
  }

  const offset = -currentSlide * 100;
  document.querySelector('.carrusel-container').style.transform = `translateX(${offset}%)`;

  slides.forEach(slide => slide.classList.remove('active'));
  slides[currentSlide].classList.add('active');
}

function moveSlide(n) {
  showSlide(currentSlide + n);
}

function openEvent(url) {
  window.open(url, '_blank');
}

showSlide(currentSlide);

/*Logica del concurso*/
document.querySelector('form').addEventListener('submit', function(event) {
  const nombre = document.getElementById('nombre').value;
  const email = document.getElementById('email').value;
  const concurso = document.getElementById('concurso').value;

  if (!nombre || !email || !concurso) {
    event.preventDefault();  // Prevenir el envío del formulario
    alert('Por favor, completa todos los campos.');
  }
});

/*Audio*/
function PlayAudio(){
  document.getElementById("bgAudio").play();
}
window.onload = function(){
  document.getElementById("bgAudio").play();
} 

/*Logica de la seccion de historia de crystal
document.addEventListener('DOMContentLoaded', () => {
  const groupHistory = document.getElementById('group-history');

  function checkScroll() {
      const rect = groupHistory.getBoundingClientRect();
      const windowHeight = window.innerHeight;

      if (rect.top < windowHeight && rect.bottom > 0) {
          groupHistory.classList.add('show');
      }
  }

  window.addEventListener('scroll', checkScroll);
  checkScroll(); // Verifica al cargar la página
});*/