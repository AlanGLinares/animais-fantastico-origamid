// NAVEGACÃO POR TABS
export default function ativaNavegacao() {
  // ISOLANDO O CODIGO NO ESCOPO DA FUNCITION
  const tabMenu = document.querySelectorAll("[data-tab] li");
  const tabContent = document.querySelectorAll("[data-tab] section");
  
  if (tabMenu.length && tabContent.length) {
    tabContent[0].classList.add("ativo");
    // VERIFICA SE TEM TABMENU OU TABCONTENT E SE DENTRO DELES TEM CONTEUDO
    function activeTab(index) {
      tabContent.forEach((content) => {
        // FAZ UM LOOP E REMOVE A CLASS ATIVO NO QUAIS TIVER A CLASS ATIVO
        content.classList.remove("ativo");
      });
      const direcao = tabContent[index].dataset.anime;
      tabContent[index].classList.add("ativo", direcao); // ADICIONA A CLASS ATIVO
    }

    tabMenu.forEach((item, index) => {
      // FAZ UM LOOP POR CADA ELEMENTO DA LISTA PEGA O ITEM E ADICIONA UM EVENTO DE CLICK E UMA FUNCAO QUE ATIVA A FUNCÁO ACTIVETAB
      item.addEventListener("click", function () {
        activeTab(index);
      });
    });
  }
}
