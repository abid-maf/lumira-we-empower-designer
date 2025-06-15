const formatter = new Intl.NumberFormat("en-US", {
  style: "currency",
  currency: "IDR",
  minimumFractionDigits: 0,
  currencyDisplay: "code",
}).format;

function formatCurrency(element) {
  const price = parseInt(element.textContent.replace(/[^\d]/g, ""));
  if (!isNaN(price)) {
    element.textContent = formatter(price).replace("IDR", "IDR ");
  }
}

// Format all old prices
document.querySelectorAll(".old-price").forEach(formatCurrency);

// Format all new prices
document.querySelectorAll(".new-price").forEach(formatCurrency);
