document.addEventListener('DOMContentLoaded', () => {
  const minPriceInput = document.querySelector('.min-price');
  const maxPriceInput = document.querySelector('.max-price');
  const resetButton = document.querySelector('.buttons-range-reset');
  const applyButton = document.querySelector('.buttons-range-apply');
  const dropdownTitlePrice = document.querySelector('.button-dropdown-title-price');

  // Reset Button Logic
  resetButton.addEventListener('click', () => {
    minPriceInput.value = '';
    maxPriceInput.value = '';
    // Optional: Reset the dropdown title as well
    dropdownTitlePrice.innerHTML = 'Price';
  });

  // Apply Button Logic
  applyButton.addEventListener('click', () => {
    let minPrice = minPriceInput.value;
    let maxPrice = maxPriceInput.value;

    // Function to format the price
    const formatPrice = price => {
      if (!price) return '';
      price = parseInt(price);
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
