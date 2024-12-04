// ANIMACAO DE SCROLL

export default function InitanimationScroll() {
  const animationScroll = document.querySelectorAll("[data-anime]");
  if (animationScroll.length) {
    const windowMetade = window.innerHeight * 0.6;

    function animaScroll() {
      animationScroll.forEach((section) => {
        const sectionTop = section.getBoundingClientRect().top;
        const isSectionVisible = sectionTop - windowMetade < 0;
        if (isSectionVisible) {
          section.classList.add("ativarS");
        } else if (section.classList.contains('ativarS')) {
          section.classList.remove("ativarS")
        }
      });
    }

    animaScroll();
    window.addEventListener("scroll", animaScroll);
  }
}

