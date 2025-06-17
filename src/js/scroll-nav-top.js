window.addEventListener("scroll", function () {
  const navContainerDark = document.getElementById("NavTopContainerDark");

  if (window.scrollY > 814) {
    navContainerDark.classList.remove("opacity-0");
    navContainerDark.classList.remove("-z-50");
    navContainerDark.classList.add("z-50");
  } else {
    navContainerDark.classList.add("opacity-0");
    navContainerDark.classList.add("-z-50");
    navContainerDark.classList.remove("z-50");
  }
});
