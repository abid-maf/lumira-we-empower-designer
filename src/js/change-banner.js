  document.addEventListener('DOMContentLoaded', function() {
    const uploadImageBtn = document.getElementById('uploadImageBtn');
    const removeImageBtn = document.getElementById('removeImageBtn');
    const bannerImageInput = document.getElementById('bannerImageInput');
    const bannerPreview = document.getElementById('bannerPreview'); // Opsional

    // Fungsi untuk menangani unggahan gambar
    uploadImageBtn.addEventListener('click', function() {
      bannerImageInput.click(); // Memicu klik pada input file tersembunyi
    });

    // Fungsi yang berjalan ketika file dipilih
    bannerImageInput.addEventListener('change', function(event) {
      const file = event.target.files[0]; // Ambil file pertama yang dipilih

      if (file) {
        const reader = new FileReader();

        reader.onload = function(e) {
          // Tampilkan pratinjau gambar (opsional)
          bannerPreview.src = e.target.result;
          bannerPreview.classList.remove('hidden');
          console.log('Gambar berhasil diunggah:', file.name);

          // Di sini kamu bisa menambahkan logika untuk mengunggah file ke server
          // Misalnya:
          // uploadFileToServer(file);
        };

        reader.readAsDataURL(file); // Baca file sebagai URL data
      }
    });

    // Fungsi untuk menghapus gambar
    removeImageBtn.addEventListener('click', function() {
      // Hapus pratinjau gambar (opsional)
      bannerPreview.src = '';
      bannerPreview.classList.add('hidden');
      bannerImageInput.value = ''; // Hapus file yang dipilih dari input

      console.log('Gambar berhasil dihapus.');

      // Di sini kamu bisa menambahkan logika untuk menghapus gambar dari server
      // Misalnya:
      // deleteImageFromServer();
    });
  });

  // Contoh fungsi untuk mengunggah ke server (placeholder)
  function uploadFileToServer(file) {
    // Di sini kamu akan menggunakan Fetch API atau XMLHttpRequest
    // untuk mengirim file ke backend.
    // Contoh sederhana:
    /*
    const formData = new FormData();
    formData.append('banner', file);

    fetch('/api/upload-banner', {
      method: 'POST',
      body: formData
    })
    .then(response => response.json())
    .then(data => {
      console.log('Upload sukses:', data);
      alert('Gambar banner berhasil diunggah!');
    })
    .catch(error => {
      console.error('Error saat mengunggah:', error);
      alert('Gagal mengunggah gambar banner.');
    });
    */
    console.log('Mengunggah file ke server (fungsi placeholder):', file.name);
  }

  // Contoh fungsi untuk menghapus dari server (placeholder)
  function deleteImageFromServer() {
    // Di sini kamu akan menggunakan Fetch API atau XMLHttpRequest
    // untuk memberitahu backend agar menghapus gambar.
    // Contoh sederhana:
    /*
    fetch('/api/delete-banner', {
      method: 'POST', // Atau DELETE, tergantung API-mu
      headers: {
        'Content-Type': 'application/json'
      },
      body: JSON.stringify({ /* data yang mungkin diperlukan untuk identifikasi gambar */ // })
    /*
    })
    .then(response => response.json())
    .then(data => {
      console.log('Hapus sukses:', data);
      alert('Gambar banner berhasil dihapus!');
    })
    .catch(error => {
      console.error('Error saat menghapus:', error);
      alert('Gagal menghapus gambar banner.');
    });
    */
    console.log('Menghapus gambar dari server (fungsi placeholder).');
  }