document.addEventListener('DOMContentLoaded', function () {
  // Get all password fields
  const passwordFields = document.querySelectorAll('.password-field');

  passwordFields.forEach(field => {
    const input = field.querySelector('.password-input');
    const toggleBtn = field.querySelector('.password-toggle');

    if (input && toggleBtn) {
      toggleBtn.addEventListener('click', function () {
        // Toggle password visibility
        const type = input.type === 'password' ? 'text' : 'password';
        input.type = type;

        // Toggle button state
        this.classList.toggle('active');
      });
    }
  });
});
