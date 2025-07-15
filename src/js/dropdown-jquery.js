$(() => {
  // Ini artinya: Jalankan kode di dalam sini setelah seluruh halaman web selesai dimuat.
  // Ini mirip dengan document.addEventListener('DOMContentLoaded', ...) tapi versi jQuery.

  // Cari semua tombol yang punya atribut 'data-expand'.
  // 'on("click", ...)' artinya: Ketika salah satu tombol ini diklik...
  $('[data-expand]').on('click', function () {
    // 1. Persiapan: Cari tahu apa yang diklik dan apa targetnya

    // '$(this)' merujuk pada tombol yang baru saja diklik.
    const $tombolYangDiklik = $(this);

    // Ambil nilai dari atribut 'data-expand' pada tombol yang diklik.
    // Nilai ini adalah ID dari bagian konten yang ingin dibuka/ditutup.
    const idTargetKonten = $tombolYangDiklik.data('expand');

    // Cari elemen konten (misalnya, sebuah paragraf atau div)
    // yang ID-nya sama dengan 'idTargetKonten' tadi.
    const $kontenTarget = $(`#${idTargetKonten}`);

    // Cari ikon SVG (biasanya panah atau plus/minus) di dalam tombol yang diklik.
    const $ikonSVG = $tombolYangDiklik.find('svg');

    // 2. Tutup semua bagian konten 'accordion' yang sedang terbuka (selain yang baru diklik)

    // 'each(function() { ... })' artinya: Lakukan ini untuk setiap tombol 'data-expand' yang ada.
    $('[data-expand]').each(function () {
      const $tombolLain = $(this);
      const idKontenLain = $tombolLain.data('expand');

      // Jika ID konten ini BUKAN yang baru saja kita klik...
      if (idKontenLain !== idTargetKonten) {
        // Sembunyikan bagian konten tersebut dengan efek 'slide-up'.
        // Ini memastikan hanya satu bagian yang terbuka pada satu waktu.
        $(`#${idKontenLain}`).slideUp();

        // Hapus kelas CSS yang membuat ikon berputar atau berubah warna.
        // Ini mereset ikon ke tampilan awal (misal: panah kembali menunjuk ke bawah).
        $tombolLain.find('svg').removeClass('-rotate-180 text-white');
      }
    });

    // 3. Buka/Tutup bagian konten yang baru saja diklik, dan ubah ikonnya

    // 'slideToggle()' akan membuka konten jika tertutup, dan menutupnya jika terbuka.
    $kontenTarget.slideToggle();

    // 'toggleClass()' akan menambahkan kelas CSS jika belum ada, atau menghapusnya jika sudah ada.
    // Ini memutar ikon 180 derajat dan mengubah warnanya menjadi putih (misalnya),
    // Memberi tahu pengguna bahwa bagian ini sedang aktif/terbuka.
    $ikonSVG.toggleClass('-rotate-180 text-white');
  });
});
