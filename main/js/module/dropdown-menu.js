import outsideClick from "./outsideclick.js";

export default class DropdownMenu {
  constructor(datadrop, events) {
    this.dropdownMenu = document.querySelectorAll(datadrop);

    // define o touchstart e click como argumento padrão de events
    if (events === undefined) {
      this.events = ["touchstart", "click"];
    } else {
      this.events = events;
    }

    this.activeClass = "active";
    this.activeDropDown = this.activeDropDown.bind(this);
  }

  // ativa o dropmenu e ativa a função outsideClick que observa o click fora dele.
  activeDropDown(event) {
    const eventTarget = event.currentTarget;
    event.preventDefault();
    eventTarget.classList.add(this.activeClass);
    outsideClick(eventTarget, this.events, () => {
      eventTarget.classList.remove(this.activeClass);
    });
  }

  // adiciona os eventos ao dropdownmenu
  addDropdownMenusEvent() {
    this.dropdownMenu.forEach((menu) => {
      // menu.addEventListener('touchstart', handleClick)
      // menu.addEventListener('click', handleClick)
      this.events.forEach((userEvent) => {
        menu.addEventListener(userEvent, this.activeDropDown);
      });
    });
  }


  init() {
    if (this.dropdownMenu.length) {
      this.addDropdownMenusEvent();
    }
    return this;
  }
}

//
