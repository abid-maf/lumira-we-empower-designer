document.getElementById('HamburgerMobileButton').addEventListener('click', function () {
    const navContainer = document.getElementById('NavTopContainerDarkMobile');
  navContainer.classList.toggle('hamburger-mobile-toggle');
  navContainer.classList.remove('notification-mobile-toggle');
  });
document.getElementById('NotificationMobileButton').addEventListener('click', function () {
    const navContainer = document.getElementById('NavTopContainerDarkMobile');
  navContainer.classList.toggle('notification-mobile-toggle');
  navContainer.classList.remove('hamburger-mobile-toggle');
  });
  