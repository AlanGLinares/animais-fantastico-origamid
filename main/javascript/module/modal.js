export default class Modal {
  constructor(botaoAbrir, botaoFechar, containerModal) {
    this.botaoAbrir = document.querySelector(botaoAbrir);
    this.botaoFechar = document.querySelector(botaoFechar);
    this.containerModal = document.querySelector(containerModal);
    this.classActive = "ativo";


    // com bind voce força o objeto fazer referencia a ele mesmo no método.
    this.botaoAbrir = this.botaoAbrir.bind(this)
    this.botaoFechar = this.botaoFechar.bind(this)
    this.containerModal = this.containerModal.bind(this)
  }

  abrirModal(event) {
    event.preventDefault();
    this.containerModal.classList.add(this.classActive);
  }

  fecharModal(event) {
    event.preventDefault();
    this.containerModal.classList.remove(this.classActive);
  }

  cliqueForaModal(event) {
    if (event.target === this.containerModal) {
      this.fecharModal(event);
    }
  }

  addEventModal () {
    this.botaoAbrir.addEventListener("click", this.abrirModal);
    this.botaoFechar.addEventListener("click", this.fecharModal);
    this.containerModal.addEventListener("click", this.cliqueForaModal);
  }


  init () {
    if (this.botaoAbrir && this.botaoFechar && this.containerModal) {
      this.addEventModal()
    }
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
