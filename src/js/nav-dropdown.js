// Konfigurasi dropdown
const dropdowns = [
  { buttonSelector: '[data-dropdown="ui-kit"]', id: "UiKitDropdown" },
  { buttonSelector: '[data-dropdown="website"]', id: "WebsiteDropdown" },
  { buttonSelector: '[data-dropdown="icon"]', id: "IconDropdown" },
];

class DropdownManager {
  constructor(dropdowns) {
    this.dropdowns = dropdowns;
    this.init();
  }

  init() {
    // Inisialisasi setiap dropdown
    this.dropdowns.forEach((dropdown) => {
      const button = document.querySelector(dropdown.buttonSelector);
      const menu = document.getElementById(dropdown.id);

      if (button && menu) {
        this.setupDropdown(button, menu);
      }
    });

    // Click outside listener
    document.addEventListener("click", () => this.closeAllDropdowns());
  }

  setupDropdown(button, menu) {
    button.addEventListener("click", (e) => {
      e.stopPropagation();
      this.toggleDropdown(menu);
    });

    // Prevent dropdown menu clicks from closing
    menu.addEventListener("click", (e) => e.stopPropagation());
  }

  toggleDropdown(menu) {
    // Close all other dropdowns first
    this.closeAllDropdowns();
    // Toggle current dropdown
    menu.classList.toggle("hidden");
  }

  closeAllDropdowns() {
    this.dropdowns.forEach((dropdown) => {
      const menu = document.getElementById(dropdown.id);
      if (menu) {
        menu.classList.add("hidden");
      }
    });
  }
}

// Initialize dropdowns when DOM is loaded
document.addEventListener("DOMContentLoaded", () => {
  new DropdownManager(dropdowns);
});
