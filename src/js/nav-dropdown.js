// Daftar semua dropdown beserta tombol pemicunya
const dropdownConfig = [
  { trigger: "ui-kit", dropdownId: "UiKitDropdown" },
  { trigger: "website", dropdownId: "WebsiteDropdown" },
  { trigger: "icon", dropdownId: "IconDropdown" },
];

class DropdownManager {
  constructor() {
    this.init(); // langsung jalanin saat class ini dibuat
  }

  init() {
    // Untuk setiap dropdown, pasang event klik di tombolnya
    dropdownConfig.forEach((config) => {
      const triggerButton = document.querySelector(`[data-dropdown="${config.trigger}"]`);
      const dropdownMenu = document.getElementById(config.dropdownId);

      // Kalau tombol dan dropdown-nya ada, lanjut pasang event
      if (triggerButton && dropdownMenu) {
        this.setupDropdownEvents(triggerButton, dropdownMenu);
      }
    });

    // Kalau user klik di luar tombol dropdown, tutup semua dropdown
    document.addEventListener("click", (e) => {
      const isDropdownButton = e.target.closest("[data-dropdown]");
      if (!isDropdownButton) {
        this.closeAllDropdowns();
      }
    });
  }

  setupDropdownEvents(trigger, dropdown) {
    // Pasang event klik di tombolnya
    trigger.addEventListener("click", (e) => {
      e.stopPropagation(); // biar event-nya nggak nyebar ke luar

      this.closeAllDropdowns(); // tutup dropdown lain dulu

      const isHidden = dropdown.classList.contains("hidden");
      dropdown.classList.toggle("hidden"); // toggle buka/tutup menu

      const chevron = trigger.querySelector(".icon-chevron");
      const titleDropdownNav = trigger.querySelector(".title-dropdown-nav");

      // Kalau ada icon dan title, kasih efek rotate + warna saat buka
      if (chevron) {
        if (isHidden) {
          chevron.style.transform = "rotate(180deg)"; // putar icon ke atas
          chevron.classList.add("text-Lumira-Gray-900-important"); // kasih warna penting
          titleDropdownNav.classList.add("text-Lumira-Gray-900-important");
        } else {
          chevron.style.transform = "rotate(0deg)"; // balikin icon ke bawah
          chevron.classList.remove("text-Lumira-Gray-900-important");
          titleDropdownNav.classList.remove("text-Lumira-Gray-900-important");
        }
      }
    });

    // Kalau klik di dalam dropdown-nya sendiri, jangan sampai nutup
    dropdown.addEventListener("click", (e) => {
      e.stopPropagation();
    });
  }

  closeAllDropdowns() {
    // Tutup semua dropdown & reset icon-nya
    dropdownConfig.forEach((config) => {
      const dropdown = document.getElementById(config.dropdownId);
      const trigger = document.querySelector(`[data-dropdown="${config.trigger}"]`);
      const chevron = trigger?.querySelector(".icon-chevron");
      const titleDropdownNav = trigger.querySelector(".title-dropdown-nav");

      if (dropdown) {
        dropdown.classList.add("hidden");
      }

      if (chevron) {
        chevron.style.transform = "rotate(0deg)"; // reset rotasi
        chevron.classList.remove("text-Lumira-Gray-900-important"); // reset warna
        titleDropdownNav.classList.remove("text-Lumira-Gray-900-important");
      }
    });
  }
}

// Jalankan saat semua elemen di halaman udah siap
document.addEventListener("DOMContentLoaded", () => {
  new DropdownManager();
});
