var swiper = new Swiper('.AuthProductSwiper', {
  // Atur slide per view, misalnya 1 slide per tampilan
  slidesPerView: 1,
  // Atur jarak antar slide
  spaceBetween: 0,
  // Aktifkan mode perulangan
  loop: true,
  // Aktifkan fitur autoplay
  autoplay: {
    delay: 2000, // Durasi dalam milidetik (3 detik)
    disableOnInteraction: false, // Melanjutkan autoplay meskipun user berinteraksi
  },
  // Efek transisi saat berpindah slide
  effect: 'slide',
  // Nonaktifkan drag mouse
  allowTouchMove: false,
});
