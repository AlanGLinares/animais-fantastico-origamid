import AnimaNumeros from "./anima-numeros.js";

export default function fetchAnimais() {
  // criar div contendo informações com total de animais
  function createAnimal(animal) {
    const div = document.createElement("div");
    div.classList.add("numero-animal");
    div.innerHTML = `<h3>${animal.specie} </h3><span data-numero>${animal.total}</span>`;
    return div;
  }

  const numerosGrid = document.querySelector(".numeros-grid");
  function preencherAnimais(animal) {
    const divAnimal = createAnimal(animal);
    numerosGrid.appendChild(divAnimal);
  }

  function animaAnimaisNumeros() {
    const animarNumeros = new AnimaNumeros( "[data-numero]", ".numeros", "ativarS");
    animarNumeros.init()

    // voce pode usar a classe para varios elemento do seu site ,
    // o incrementarnumero está dentro do prótotipo da constructora
    // AnimaNumeros.incrementarNumero(document.querySelector(".numeral"))

  }

  async function criarAnimais(url) {
    try {
      const animaisResponse = await fetch(url);
      const animaisJson = await animaisResponse.json();

      animaisJson.forEach((animal) => {
        preencherAnimais(animal);
      });
      animaAnimaisNumeros();
    } catch (erro) {
      console.log(erro);
    }
  }
  criarAnimais("./animaisapi.json");
}


// API do bitcoin
async function bitCoin() {
  try {
    // usando o try (tentar).
    const dadosbtc = await fetch("https://blockchain.info/ticker"); // fazendo requisição da APi pelo http
    const infobtc = await dadosbtc.json(); // usando await para transformar api em arquivo json

    const btcapi = document.querySelector(".btcAPI"); // selecionando a UL
    const total = 100 / infobtc.BRL.sell; // dividindo o valor de venda do btc em 100 reais
    const cleanTotal = total.toFixed(7).replace(".", ","); // limpando o numero com toFixed(7) com 7 caracterer , trocando o .(ponto) por virgulando utilizando o replace

    btcapi.innerHTML = `Doe em bitcoin <span style="background-color: #3f4; padding: .2rem .5rem; border-radius: 3px; font-weight: bold;">${cleanTotal} R$</span>`; // estilizando e chamando a API
  } catch (erro) {
    // erro se caso der erro em cima vai aparece msg de erro no console
    console.log(` ${erro} deu erro `);
  }
}

bitCoin(); // executando a função async
