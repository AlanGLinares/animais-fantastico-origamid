// NAVEGACÃO POR TABS
export default class ativaNavegacao {
  // ISOLANDO O CODIGO NO ESCOPO DA FUNCITION
    constructor (menu,content) {
      this.tabMenu = document.querySelectorAll(menu);
      this.tabContent = document.querySelectorAll(content)
      this.classActive = "ativo"
    }

    activeTab(index) {
    this.tabContent.forEach((content) => {
      // FAZ UM LOOP E REMOVE A CLASS ATIVO NO QUAIS TIVER A CLASS ATIVO
      content.classList.remove(this.classActive);
    });
    
    const direcao = this.tabContent[index].dataset.anime;
    this.tabContent[index].classList.add(this.classActive, direcao); // ADICIONA A CLASS ATIVO
  }

    addTabEvent () {
      this.tabMenu.forEach((item, index) => {
        // FAZ UM LOOP POR CADA ELEMENTO DA LISTA PEGA O ITEM E ADICIONA UM EVENTO DE CLICK E UMA FUNCAO QUE ATIVA A FUNCÁO ACTIVETAB
        item.addEventListener("click", () =>  this.activeTab(index))
      });
    }

  // iniciar função
    init () {
      if (this.tabMenu.length && this.tabContent.length) {
        this.tabContent[0].classList.add(this.classActive)
        this.addTabEvent()
      }
    }
 }
