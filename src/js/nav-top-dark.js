window.addEventListener("scroll", function () {
  const navTopContainerDekstop = document.getElementById("NavTopContainerDekstop");

  if (window.scrollY > 414) {
    navTopContainerDekstop.classList.add("fixed", "top-[-85px]", "pt-0");
    navTopContainerDekstop.classList.remove("pt-[60px]");
    if (window.scrollY > 514) {
      navTopContainerDekstop.classList.add("transition-all", "duration-400");
    }
  } else {
    navTopContainerDekstop.classList.remove("transition-all", "duration-400");
    navTopContainerDekstop.classList.remove("fixed", "top-[-85px]", "pt-0");
    navTopContainerDekstop.classList.add("pt-[60px]");
  }

  if (window.scrollY > 814) {
    navTopContainerDekstop.classList.add("scroll");
  } else {
    navTopContainerDekstop.classList.remove("scroll");
  }
});
