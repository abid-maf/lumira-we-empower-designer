document.addEventListener('click', function (event) {
  const allDropdownContainers = document.querySelectorAll('.container-dropdown');
  let clickedInsideAnyDropdown = false;

  allDropdownContainers.forEach(container => {
    if (container.contains(event.target)) {
      clickedInsideAnyDropdown = true;
    }
  });

  const clickedButton = event.target.closest('.button-dropdown');
  const clickedContentListItem = event.target.closest('.dropdown-content-list'); // Menambahkan ini

  // 1. Cek apakah yang diklik adalah tombol "button-dropdown" (atau child-nya)
  if (clickedButton) {
    const targetDropdown = clickedButton.closest('.container-dropdown');

    if (targetDropdown) {
      allDropdownContainers.forEach(container => {
        if (container !== targetDropdown) {
          container.classList.remove('open');
        }
      });
      targetDropdown.classList.toggle('open');
    }
  }
  // 2. Cek apakah yang diklik adalah item di dalam dropdown (dropdown-content-list)
  else if (clickedContentListItem) {
    const parentDropdownContainer = clickedContentListItem.closest('.container-dropdown');
    if (parentDropdownContainer && parentDropdownContainer.classList.contains('open')) {
      const buttonDropdownTitle = parentDropdownContainer.querySelector('.button-dropdown-title');
      const paragraphContent = clickedContentListItem.querySelector('p');

      if (buttonDropdownTitle && paragraphContent) {
        buttonDropdownTitle.textContent = paragraphContent.textContent;
      }
      // Tutup dropdown setelah item dipilih
      parentDropdownContainer.classList.remove('open');
    }
  }
  // 3. Jika klik terjadi di luar SEMUA container-dropdown (dan bukan button-dropdown)
  else if (!clickedInsideAnyDropdown) {
    allDropdownContainers.forEach(container => {
      container.classList.remove('open');
    });
  }
});
