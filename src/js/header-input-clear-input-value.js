// Ambil elemen input dan tombol "X" menggunakan ID
const clearHeaderSearchInput = document.getElementById('header-search-input');
const clearHeaderInputBtn = document.getElementById('clear-header-search-input-btn');

// Tambahkan event listener pada tombol "X"
clearHeaderInputBtn.addEventListener('click', () => {
  // Ketika tombol diklik, kosongkan nilai input
  clearHeaderSearchInput.value = '';
  // Opsional: Fokuskan kembali ke input setelah dikosongkan
  clearHeaderSearchInput.focus();
});
