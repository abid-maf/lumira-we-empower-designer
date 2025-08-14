const passwordToggle = document.getElementById('PasswordToggle')
const passwordInput = document.getElementById('PasswordInput');
    
    passwordToggle.addEventListener('click', function () {
      // Toggle kelas 'open' pada tombol itu sendiri
      this.classList.toggle('active');

      // Dapatkan elemen input password

      // Periksa apakah input saat ini berjenis 'password'
      if (passwordInput.type === 'password') {
        // Jika 'password', ubah menjadi 'text'
        passwordInput.type = 'text';
      } else {
        // Jika 'text', ubah kembali menjadi 'password'
        passwordInput.type = 'password';
      }
    });
