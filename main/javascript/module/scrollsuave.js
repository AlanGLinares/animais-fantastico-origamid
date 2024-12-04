// scroll suave
export default function InitScrollSmooth() {
  const linkInternos = document.querySelectorAll('[data-menu] a[href^="#"]');

  function scrollToSection(event) {
    event.preventDefault();
    const href = event.currentTarget.getAttribute("href");
    const section = document.querySelector(href);
    section.scrollIntoView({
      behavior: "smooth",
      block: "start",
    });

    //FORMA ALTERNATIVA DE SCROLL
    // const topo = section.offsetTop;
    // window.scrollTo({
    //   top: topo,
    //   behavior: "smooth",
    // });
  }

  linkInternos.forEach((link) => {
    link.addEventListener("click", scrollToSection);
  });
}

