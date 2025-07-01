// Fungsi untuk menginisialisasi semua dropdown
function initializeDropdowns() {
    // Ambil semua container dropdown
    const dropdownContainers = document.querySelectorAll('.container-dropdown');
    
    dropdownContainers.forEach(container => {
        const button = container.querySelector('.button-dropdown');
        const dropdownContent = container.querySelector('.dropdown-content');
        const dropdownTitle = container.querySelector('.button-dropdown-title');
        const dropdownIcon = container.querySelector('.button-dropdown-icon');
        const dropdownItems = container.querySelectorAll('.dropdown-content-list');
        
        // Event listener untuk toggle dropdown
        button.addEventListener('click', function(e) {
            e.stopPropagation();
            
            // Tutup semua dropdown lain
            closeAllDropdowns(container);
            
            // Toggle dropdown saat ini
            toggleDropdown(dropdownContent, dropdownIcon);
        });
        
        // Event listener untuk setiap item dalam dropdown
        dropdownItems.forEach(item => {
            item.addEventListener('click', function(e) {
                e.stopPropagation();
                
                // Ambil teks dari item yang diklik
                const selectedText = this.querySelector('p').textContent;
                
                // Update title dropdown
                dropdownTitle.textContent = selectedText;
                
                // Tutup dropdown
                closeDropdown(dropdownContent, dropdownIcon);
            });
        });
    });
    
    // Tutup dropdown ketika klik di luar
    document.addEventListener('click', function() {
        closeAllDropdowns();
    });
}

// Fungsi untuk toggle dropdown
function toggleDropdown(dropdownContent, dropdownIcon) {
    if (dropdownContent.classList.contains('hidden')) {
        showDropdown(dropdownContent, dropdownIcon);
    } else {
        closeDropdown(dropdownContent, dropdownIcon);
    }
}

// Fungsi untuk menampilkan dropdown
function showDropdown(dropdownContent, dropdownIcon) {
    dropdownContent.classList.remove('hidden');
    dropdownContent.classList.add('block');
    dropdownIcon.classList.add('rotate-180');
}

// Fungsi untuk menutup dropdown
function closeDropdown(dropdownContent, dropdownIcon) {
    dropdownContent.classList.remove('block');
    dropdownContent.classList.add('hidden');
    dropdownIcon.classList.remove('rotate-180');
}

// Fungsi untuk menutup semua dropdown kecuali yang dikecualikan
function closeAllDropdowns(excludeContainer = null) {
    const allDropdownContents = document.querySelectorAll('.dropdown-content');
    const allDropdownIcons = document.querySelectorAll('.button-dropdown-icon');
    
    allDropdownContents.forEach((content, index) => {
        const container = content.closest('.container-dropdown');
        
        // Skip container yang dikecualikan
        if (excludeContainer && container === excludeContainer) {
            return;
        }
        
        const icon = allDropdownIcons[index];
        closeDropdown(content, icon);
    });
}

// Inisialisasi ketika DOM sudah loaded
document.addEventListener('DOMContentLoaded', function() {
    initializeDropdowns();
});