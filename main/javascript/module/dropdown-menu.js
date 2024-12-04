import outsideClick from './outsideclick.js'





export default function initDropdownMenu() {
  const dropdownMenu = document.querySelectorAll('[data-dropdown=""]');

  dropdownMenu.forEach((menu) => {
    // menu.addEventListener('touchstart', handleClick)
    // menu.addEventListener('click', handleClick)
  
    ["touchstart", "click"].forEach((userEvent) => {
      menu.addEventListener(userEvent, handleClick);
    });
  });
  
  function handleClick(event) {
    event.preventDefault();
    this.classList.add("active");
    outsideClick(this, ["touchstart", "click"], () => {
      this.classList.remove("active");
    });
  }
  
  
  
  function outsideClick(element, events, callback) {
    const html = document.documentElement;
    const dataoutisde = "data-outside";
  
    if (!element.hasAttribute(dataoutisde)) {
      events.forEach((userEvent) => {
        html.addEventListener(userEvent, handleOutsideClick);
      });
      element.setAttribute(dataoutisde, "");
    }
  
    function handleOutsideClick(event) {
      if (!element.contains(event.target)) {
        element.removeAttribute(dataoutisde);
        events.forEach((userEvent) => {
          html.removeEventListener(userEvent, handleOutsideClick);
        });
        callback();
      }
    }
  }

}



//
