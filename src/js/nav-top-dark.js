window.addEventListener('scroll', function () {
  // Dapatkan elemen bilah navigasi utama di bagian atas halaman (untuk tampilan desktop).
  const navTopContainerDekstop = document.getElementById('NavTopContainerDekstop');

  // Jika elemen navTopContainerDekstop tidak ditemukan, hentikan fungsi agar tidak error.
  if (!navTopContainerDekstop) {
    return;
  }

  // Definisikan titik gulir penting agar lebih mudah dipahami dan diubah nanti.
  const SCROLL_THRESHOLD_FIX = 414; // Titik gulir untuk membuat nav fixed
  const SCROLL_THRESHOLD_TRANSITION = 514; // Titik gulir untuk menambahkan transisi
  const SCROLL_THRESHOLD_SCROLL_CLASS = 814; // Titik gulir untuk menambahkan kelas 'scroll'

  // Logika 1: Membuat bilah navigasi "lengket" dan mengatur jarak atasnya.
  // Ini akan terjadi ketika kita menggulir ke bawah melewati titik tertentu.
  if (window.scrollY > SCROLL_THRESHOLD_FIX) {
    // Tambahkan kelas CSS untuk membuatnya tetap (fixed), bergeser ke atas sedikit,
    // dan menghilangkan padding atas default.
    navTopContainerDekstop.classList.add('fixed', 'top-[-85px]', 'pt-0');
    // Hapus padding atas yang mungkin ada sebelumnya.
    navTopContainerDekstop.classList.remove('pt-[60px]');

    // Logika 2: Tambahkan efek transisi setelah menggulir lebih jauh lagi.
    // Ini membuat perubahan posisi bilah navigasi terlihat lebih halus.
    if (window.scrollY > SCROLL_THRESHOLD_TRANSITION) {
      navTopContainerDekstop.classList.add('transition-all', 'duration-400');
    }
  } else {
    // Jika kita menggulir kembali ke atas (kurang dari SCROLL_THRESHOLD_FIX),
    // kembalikan bilah navigasi ke posisi aslinya.
    navTopContainerDekstop.classList.remove('transition-all', 'duration-400'); // Hapus transisi
    navTopContainerDekstop.classList.remove('fixed', 'top-[-85px]', 'pt-0'); // Hapus posisi fixed
    navTopContainerDekstop.classList.add('pt-[60px]'); // Kembalikan padding atas default
  }

  // Logika 3: Tambahkan atau hapus kelas 'scroll' berdasarkan posisi gulir.
  // Kelas ini mungkin digunakan untuk efek visual lain seperti bayangan, dll.
  if (window.scrollY > SCROLL_THRESHOLD_SCROLL_CLASS) {
    navTopContainerDekstop.classList.add('scroll');
  } else {
    navTopContainerDekstop.classList.remove('scroll');
  }
});
