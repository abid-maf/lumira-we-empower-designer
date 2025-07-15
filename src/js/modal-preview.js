document.addEventListener('DOMContentLoaded', () => {
  // Dapatkan semua elemen yang kita butuhkan
  const elements = {
    previewBtn: document.getElementById('PreviewBtn'),
    modalPreview: document.getElementById('ModalPreview'),
    modalPreviewClose: document.getElementById('ModalPreviewClose'),
    modalPreviewToggleZoom: document.getElementById('ModalPreviewToggleZoom'),
    modalPreviewContent: document.getElementById('ModalPreviewContent'),
    modalPreviewButtons: document.getElementById('ModalPreviewButtons'),
  };

  // Fungsi untuk membuka modal
  const openModal = () => {
    if (elements.modalPreview) {
      document.body.classList.add('overflow-hidden'); // Sembunyikan scrollbar di body
      elements.modalPreview.classList.add('open'); // Tampilkan modal
    }
  };

  // Fungsi untuk menutup modal
  const closeModal = () => {
    if (elements.modalPreview) {
      document.body.classList.remove('overflow-hidden'); // Tampilkan kembali scrollbar
      elements.modalPreview.classList.remove('open'); // Sembunyikan modal

      // Pastikan semua efek 'zoom' dihilangkan saat modal ditutup
      elements.modalPreviewButtons.classList.remove('zoom');
      if (elements.modalPreviewContent && elements.modalPreviewContent.classList.contains('zoom')) {
        elements.modalPreviewContent.classList.remove('zoom');
      }
    }
  };

  // 1. Tombol 'Preview' untuk membuka modal
  if (elements.previewBtn) {
    elements.previewBtn.addEventListener('click', openModal);
  }

  // 2. Tombol 'Tutup' di modal untuk menutup modal
  if (elements.modalPreviewClose) {
    elements.modalPreviewClose.addEventListener('click', closeModal);
  }

  // 3. Tombol 'Zoom' untuk memperbesar/memperkecil konten modal
  if (elements.modalPreviewToggleZoom && elements.modalPreviewContent && elements.modalPreviewButtons) {
    elements.modalPreviewToggleZoom.addEventListener('click', () => {
      elements.modalPreviewContent.classList.toggle('zoom'); // Ubah status zoom konten
      elements.modalPreviewButtons.classList.toggle('zoom'); // Ubah status zoom tombol
    });
  }
});
