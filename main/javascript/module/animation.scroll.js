import DebounceScroll from "./debounce.js"




// ANIMACAO DE SCROLL
export default class ScrollAnima {
  constructor(sections) {
    this.sections = document.querySelectorAll(sections);
    this.windowMetade = window.innerHeight * 0.4;

    this.checkDistance = DebounceScroll(this.checkDistance.bind(this), 50)
  }

  // o [...this.sections] é uma nodelist que está sendo destrurado pelo o spread e se transformando numa array e utilizando o método map 
  getDistance () {
    this.distance = [...this.sections].map((section) => {
      const offset = section.offsetTop;
      return {
        element: section,
        offset: Math.floor(offset - this.windowMetade),
      };
    });
  }

  // verifica a distancia em cada objeto em relacao ao scroll do site
  checkDistance () {
    this.distance.forEach((item) => {
      if (window.pageYOffset > item.offset) {
        item.element.classList.add("ativarS");
      } else if (item.element.classList.contains("ativarS")) {
        item.element.classList.remove("ativarS");
      }
    })
  }

  // mesma função do codigo acima , porem o getBoundingClientRect ele faz mais checkagem a cada vez no DOM e o checkDistance verifica o pageYOffSet somente.
  // animaScroll() {
  //   this.sections.forEach((section) => {
  //     const sectionTop = section.getBoundingClientRect().top;
  //     const isSectionVisible = (sectionTop - this.windowMetade) < 0;
  //     if (isSectionVisible) {
  //       section.classList.add("ativarS");
  //     } else if (section.classList.contains("ativarS")) {
  //       section.classList.remove("ativarS");
  //     }
  //   });
  // }

  init() {
    if (this.sections.length) {
      this.getDistance()
      this.checkDistance()
      window.addEventListener("scroll", this.checkDistance);
    }
    return this
  }
}