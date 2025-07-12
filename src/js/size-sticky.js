document.addEventListener('DOMContentLoaded', () => {
  const userProfileImageWrapper = document.getElementById('userProfileImageWrapper');
  const scrollThreshold = 242; // Jarak scroll dalam piksel

  window.addEventListener('scroll', () => {
    if (window.scrollY > scrollThreshold) {
      userProfileImageWrapper.classList.add('size-sticky');
    } else {
      userProfileImageWrapper.classList.remove('size-sticky');
    }
  });
});
