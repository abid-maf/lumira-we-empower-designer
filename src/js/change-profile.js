const profileImage = document.getElementById('profileImage');
const toggleImageProfileButton = document.getElementById('toggleImageProfileButton');
const fileInput = document.getElementById('imageUploadInput');

toggleImageProfileButton.addEventListener('click', () => {
  // Langsung buka file picker setiap kali tombol diklik
  fileInput.click();
});

fileInput.addEventListener('change', () => {
  const file = fileInput.files[0];
  if (file) {
    const imageUrl = URL.createObjectURL(file);
    profileImage.setAttribute('src', imageUrl);
  }
});
