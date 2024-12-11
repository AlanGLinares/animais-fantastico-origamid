export default class Modal {
  constructor(botaoAbrir, botaoFechar, containerModal) {
    this.botaoAbrir = document.querySelector(botaoAbrir);
    this.botaoFechar = document.querySelector(botaoFechar);
    this.containerModal = document.querySelector(containerModal);
    this.classActive = "ativo";


    // com bind voce força o objeto fazer referencia a ele mesmo no método.
    this.eventToggleModal = this.eventToggleModal.bind(this)
    this.cliqueForaModal = this.cliqueForaModal.bind(this)
  }

  ToggleModal () {
    this.containerModal.classList.toggle(this.classActive);
  }

  eventToggleModal (event) {
    event.preventDefault()
    this.ToggleModal()
  }

  cliqueForaModal (event) {
    if (event.target === this.containerModal) {
      this.ToggleModal(event);
    }
  }

  addEventModal() {
    this.botaoAbrir.addEventListener("click", this.eventToggleModal);
    this.botaoFechar.addEventListener("click", this.eventToggleModal);
    this.containerModal.addEventListener("click", this.cliqueForaModal);
  }

  init() {
    if (this.botaoAbrir && this.botaoFechar && this.containerModal) {
      this.addEventModal();
    }
    // colocar o return this para poder linkar os métodos se não vai da undefined
    return this;
  }
}

// SIMPLIFICANDO O CODIGO A CIMA COM TOGGLE
// export function initmodalToggle ( ) {
//   const botaoAbrir = document.querySelector('[data-modal="abrir"]');
//   const botaoFechar = document.querySelector('[data-modal="fechar"]');
//   const containerModal = document.querySelector('[data-modal="modal-container"]');

//   if (botaoAbrir && botaoFechar && containerModal) {
//     function toggleModal(event) {
//       event.preventDefault();
//       containerModal.classList.toggle("ativo");
//     }

//     function cliqueForaModal(event) {
//       if (event.target === this) {
//         toggleModal(event);
//       }
//     }

//     botaoAbrir.addEventListener("click", toggleModal);
//     botaoFechar.addEventListener("click", toggleModal);
//     containerModal.addEventListener("click", cliqueForaModal);
//   }
// }
