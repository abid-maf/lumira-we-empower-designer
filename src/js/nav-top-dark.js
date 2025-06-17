window.addEventListener("scroll", function () {
  const navContainerDark = document.getElementById("NavTopContainerDark");

  if (window.scrollY > 814) {
    navContainerDark.classList.add("dark-show");
  } else {
    navContainerDark.classList.remove("dark-show");
  }
});
