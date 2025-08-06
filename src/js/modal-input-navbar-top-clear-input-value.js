// Ambil elemen input dan tombol "X" menggunakan ID
const clearModalSearchInput = document.getElementById('modal-search-input');
const clearInputBtn = document.getElementById('clear-modal-search-input-btn');


// Tambahkan event listener pada tombol "X"
clearInputBtn.addEventListener('click', () => {
  // Ketika tombol diklik, kosongkan nilai input
  clearModalSearchInput.value = '';
  // Opsional: Fokuskan kembali ke input setelah dikosongkan
  clearModalSearchInput.focus();
});
