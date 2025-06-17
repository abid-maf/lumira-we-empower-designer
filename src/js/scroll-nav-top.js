window.addEventListener("scroll", function () {
  const nav = document.getElementById("NavTop");
  const navContainer = document.getElementById("NavTopContainer");

  if (window.scrollY > 814) {
    nav.classList.add("scroll");
    navContainer.classList.remove("top-[60px]");
    navContainer.classList.add("top-[12px]");
  } else {
    nav.classList.remove("scroll");
    navContainer.classList.add("top-[60px]");
    navContainer.classList.remove("top-[12px]");
  }
});
