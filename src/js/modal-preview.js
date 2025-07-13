document.addEventListener('DOMContentLoaded', () => {
  // Dapatkan referensi ke elemen-elemen yang dibutuhkan
  const previewBtn = document.getElementById('PreviewBtn');
  const modalPreview = document.getElementById('ModalPreview');
  const modalPreviewClose = document.getElementById('ModalPreviewClose');
  const modalPreviewToggleZoom = document.getElementById('ModalPreviewToggleZoom');
  const modalPreviewContent = document.getElementById('ModalPreviewContent');
  const modalPreviewButtons = document.getElementById('ModalPreviewButtons');

  // 1. Logika untuk membuka modal
  if (previewBtn) {
    // Pastikan elemen ada
    previewBtn.addEventListener('click', () => {
      if (modalPreview) {
        // Pastikan elemen modal ada
        document.body.classList.add('overflow-hidden');
        modalPreview.classList.add('open');
      }
    });
  }

  // 2. Logika untuk menutup modal
  if (modalPreviewClose) {
    // Pastikan elemen ada
    modalPreviewClose.addEventListener('click', () => {
      if (modalPreview) {
        // Pastikan elemen modal ada
        document.body.classList.remove('overflow-hidden');
        modalPreview.classList.remove('open');
        // Opsional: Hapus juga kelas 'zoom' saat modal ditutup
        if (modalPreviewContent && modalPreviewContent.classList.contains('zoom')) {
          modalPreviewContent.classList.remove('zoom');
        }
      }
    });
  }

  // 3. Logika untuk toggle zoom pada konten modal
  if (modalPreviewToggleZoom) {
    // Pastikan elemen ada
    modalPreviewToggleZoom.addEventListener('click', () => {
      if (modalPreviewContent && modalPreviewButtons) {
        // Pastikan elemen konten modal ada
        modalPreviewContent.classList.toggle('zoom');
        modalPreviewButtons.classList.toggle('zoom');
      }
    });
  }
});
