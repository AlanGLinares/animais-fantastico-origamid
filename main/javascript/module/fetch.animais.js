import initanimationNumber from "./anima-numeros.js";

export default function initFetchAnimais() {
  async function fetchAnimais(url) {
    const animaisResponse = await fetch(url);
    const dadosJson = await animaisResponse.json();
    const numerosGrid = document.querySelector(".numeros-grid");

    dadosJson.forEach((animal) => {
      const divAnimal = createAnimal(animal);
      numerosGrid.appendChild(divAnimal);
    });
    initanimationNumber();
  }

  function createAnimal(animal) {
    const div = document.createElement("div");
    div.classList.add("numero-animal");

    div.innerHTML = `<h3>${animal.specie} </h3>     <span data-numero>${animal.total}</span>`;

    return div;
  }

  fetchAnimais("./animaisapi.json");

  // API do bitcoin
  async function bitCoin() {
    try { // usando o try (tentar).
      const dadosbtc = await fetch("https://blockchain.info/ticker"); // fazendo requisição da APi pelo http
      const infobtc = await dadosbtc.json(); // usando await para transformar api em arquivo json

      const btcapi = document.querySelector(".btcAPI"); // selecionando a UL 
      const total = 100 / infobtc.BRL.sell; // dividindo o valor de venda do btc em 100 reais 
      const cleanTotal = total.toFixed(7).replace(".", ","); // limpando o numero com toFixed(7) com 7 caracterer , trocando o .(ponto) por virgulando utilizando o replace

      btcapi.innerHTML = `Doe em bitcoin <span style="background-color: #3f4; padding: .2rem .5rem; border-radius: 3px; font-weight: bold;">${cleanTotal} R$</span>`; // estilizando e chamando a API 
    } catch (erro) { // erro se caso der erro em cima vai aparece msg de erro no console
      console.log(` ${erro} deu erro `);
    }
  }

  bitCoin(); // executando a função async 
}
