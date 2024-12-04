// ACCORDION-LIST
  export default class Accordion {
    constructor (list) {
      this.accordionList = document.querySelectorAll(list);
      this.activeClass = "ativo";
    }

     ToggleAccordion (item) {
      item.classList.toggle(this.activeClass);
      item.nextElementSibling.classList.toggle(this.activeClass);
    }

    // adicionar evento ao accordion
    addAccordionEvent () {
      this.accordionList.forEach((item) => {
        item.addEventListener("click", () => this.ToggleAccordion);
      });
    }

    // iniciar funcao
    init () {
      if (this.accordionList.length) {
        // ativar primeiro item 
        this.ToggleAccordion(this.accordionList[0])
        this.addAccordionEvent()
      }
     }
} 


