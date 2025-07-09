const container = document.querySelector('.tag-container');
const gradLeft = document.querySelector('.gradient-left');
const gradRight = document.querySelector('.gradient-right');

function updateGradientVisibility() {
  const scrollLeft = container.scrollLeft;
  const maxScrollLeft = container.scrollWidth - container.clientWidth;

  // Jika scroll di paling kiri, sembunyikan gradient kiri
  if (scrollLeft <= 0) {
    gradLeft.style.opacity = '0';
  } else {
    gradLeft.style.opacity = '1';
  }

  // Jika scroll di paling kanan, sembunyikan gradient kanan
  if (scrollLeft >= maxScrollLeft) {
    gradRight.style.opacity = '0';
  } else {
    gradRight.style.opacity = '1';
  }
}

// Initial check
updateGradientVisibility();

// Event listener saat scroll
container.addEventListener('scroll', updateGradientVisibility);
