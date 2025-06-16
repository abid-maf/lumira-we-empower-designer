window.addEventListener("scroll", function () {
  const nav = document.getElementById("NavTop");

  if (window.scrollY > 0) {
    nav.classList.add("scroll");
  } else {
    nav.classList.remove("scroll");
  }
});
