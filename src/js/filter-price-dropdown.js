document.addEventListener('DOMContentLoaded', () => {
  const minPriceInput = document.querySelector('.min-price');
  const maxPriceInput = document.querySelector('.max-price');
  const resetButton = document.querySelector('.buttons-range-reset');
  const applyButton = document.querySelector('.buttons-range-apply');
  const dropdownTitlePrice = document.querySelector('.button-dropdown-title-price');
  const errorPriceDropdown = document.getElementById('ErrorPriceDropdown');

  // Reset Button Logic
  resetButton.addEventListener('click', () => {
    minPriceInput.value = '';
    maxPriceInput.value = '';
    // Optional: Reset the dropdown title as well
    dropdownTitlePrice.innerHTML = 'Price';
    // Hapus kelas error saat tombol reset diklik
    errorPriceDropdown.classList.remove('error');
  });

  // Apply Button Logic
  applyButton.addEventListener('click', () => {
    let minPrice = parseInt(minPriceInput.value) || 0;
    let maxPrice = parseInt(maxPriceInput.value) || 0;

    // Tambahkan logika pengecekan
    if (minPrice > maxPrice && maxPrice !== 0) {
      errorPriceDropdown.classList.add('error');
      return; // Hentikan eksekusi selanjutnya
    } else {
      errorPriceDropdown.classList.remove('error');
    }

    // Function to format the price
    const formatPrice = price => {
      if (!price) return '';
      if (price >= 1000) {
        return price / 1000 + 'K';
      }
      return price;
    };

    const formattedMinPrice = formatPrice(minPrice);
    const formattedMaxPrice = formatPrice(maxPrice);

    // Set the dropdown title
    if (formattedMinPrice && formattedMaxPrice) {
      dropdownTitlePrice.innerHTML = `IDR ${formattedMinPrice} - IDR ${formattedMaxPrice}`;
    } else if (formattedMinPrice) {
      dropdownTitlePrice.innerHTML = `> IDR ${formattedMinPrice}`;
    } else if (formattedMaxPrice) {
      dropdownTitlePrice.innerHTML = `< IDR ${formattedMaxPrice}`;
    } else {
      dropdownTitlePrice.innerHTML = 'Price';
    }
  });
});
