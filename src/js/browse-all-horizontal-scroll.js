const container = document.querySelector('.tag-container');
const gradLeft = document.querySelector('.gradient-left');
const gradRight = document.querySelector('.gradient-right');

function updateGradientVisibility() {
  const scrollLeft = container.scrollLeft;
  const maxScrollLeft = container.scrollWidth - container.clientWidth;

  // Toleransi kecil untuk memastikan ujung kanan terdeteksi
  const tolerance = 1;

  // Jika scroll di paling kiri, sembunyikan gradient kiri
  if (scrollLeft <= 0) {
    gradLeft.style.visibility = 'hidden';
  } else {
    gradLeft.style.visibility = 'visible';
  }

  // Jika scroll di paling kanan (dengan toleransi), sembunyikan gradient kanan
  if (scrollLeft >= maxScrollLeft - tolerance) {
    // Menggunakan visibility: hidden
    gradRight.style.visibility = 'hidden';
  } else {
    gradRight.style.visibility = 'visible';
  }
}

updateGradientVisibility();

container.addEventListener('scroll', updateGradientVisibility);
