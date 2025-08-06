const openModalBtns = document.querySelectorAll('.navbar-top-open-modal-btn');
const closeModalBtn = document.getElementById('navbar-top-close-modal-btn');
const navbarTopModal = document.getElementById('navbar-top-modal');
const modalSearchInput = document.getElementById('modal-search-input');

// Fungsi untuk menampilkan modal
function openModal() {
  navbarTopModal.classList.remove('hidden');
  modalSearchInput.focus();
}

// Fungsi untuk menyembunyikan modal
function closeModal() {
  navbarTopModal.classList.add('hidden');
  // Tambahkan baris ini untuk mengosongkan nilai input
  modalSearchInput.value = '';
}

// Tambahkan event listener pada setiap tombol "Search"
openModalBtns.forEach(btn => {
  btn.addEventListener('click', openModal);
});

// Tambahkan event listener pada tombol "X"
closeModalBtn.addEventListener('click', closeModal);
