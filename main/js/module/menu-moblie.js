import outsideClick from "./outsideclick.js";

export default class MenuMoblie {
  constructor(menuButton, menuList, eventos) {
    this.menuButton = document.querySelector(menuButton);
    this.menuList = document.querySelector(menuList);
    
    this.openMenu = this.openMenu.bind(this)

    if (eventos === undefined) {
      this.eventos = ["touchstart", "click"];
    } else {
      this.eventos = eventos;
    }

    this.classeAtivo = "ativo";
  }

  openMenu() {
    this.menuList.classList.add(this.classeAtivo)
    this.menuButton.classList.add(this.classeAtivo);
    outsideClick(this.menuList, this.eventos, () => {
      this.menuList.classList.remove(this.classeAtivo);
      this.menuButton.classList.remove(this.classeAtivo);
    });
  }

  addEventMenu() {
    this.eventos.forEach((e) => {
      this.menuButton.addEventListener(e, this.openMenu);
    });
  }

  init() {
    if (this.menuButton && this.menuList) {
      this.addEventMenu();
    }
    return this;
  }
}
