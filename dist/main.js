/*
 * ATTENTION: The "eval" devtool has been used (maybe by default in mode: "development").
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
/******/ (() => { // webpackBootstrap
/******/ 	"use strict";
/******/ 	var __webpack_modules__ = ({

/***/ "./main/js/index.js":
/*!**************************!*\
  !*** ./main/js/index.js ***!
  \**************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _module_scrollsuave_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./module/scrollsuave.js */ \"./main/js/module/scrollsuave.js\");\n/* harmony import */ var _module_animation_scroll_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./module/animation.scroll.js */ \"./main/js/module/animation.scroll.js\");\n/* harmony import */ var _module_accordion_list_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./module/accordion-list.js */ \"./main/js/module/accordion-list.js\");\n/* harmony import */ var _module_navegaocaotab_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./module/navegaocaotab.js */ \"./main/js/module/navegaocaotab.js\");\n/* harmony import */ var _module_modal_js__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./module/modal.js */ \"./main/js/module/modal.js\");\n/* harmony import */ var _module_tooltip_js__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./module/tooltip.js */ \"./main/js/module/tooltip.js\");\n/* harmony import */ var _module_dropdown_menu_js__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./module/dropdown-menu.js */ \"./main/js/module/dropdown-menu.js\");\n/* harmony import */ var _module_menu_moblie_js__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./module/menu-moblie.js */ \"./main/js/module/menu-moblie.js\");\n/* harmony import */ var _module_funcionamento_js__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./module/funcionamento.js */ \"./main/js/module/funcionamento.js\");\n/* harmony import */ var _module_fetch_animais_js__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ./module/fetch.animais.js */ \"./main/js/module/fetch.animais.js\");\n\r\n\r\n\r\n\r\n\r\n\r\n\r\n\r\n\r\n\r\n\r\n// import {testando , testando123} from './module/teste.js'\r\n// testando()\r\n// testando123()\r\n\r\nconst accordion = new _module_accordion_list_js__WEBPACK_IMPORTED_MODULE_2__[\"default\"](\"[data-anime-accordion] dt\")\r\naccordion.init()\r\n\r\n\r\nconst tabNav = new _module_navegaocaotab_js__WEBPACK_IMPORTED_MODULE_3__[\"default\"](\"[data-tab] li\" ,  \"[data-tab] section\")\r\ntabNav.init()\r\n\r\nconst modal = new _module_modal_js__WEBPACK_IMPORTED_MODULE_4__[\"default\"] ('[data-modal=\"abrir\"]','[data-modal=\"fechar\"]','[data-modal=\"modal-container\"]')\r\nmodal.init()\r\n\r\n\r\nconst tooltip = new _module_tooltip_js__WEBPACK_IMPORTED_MODULE_5__[\"default\"] (\"[data-tooltip]\")\r\ntooltip.init()\r\n\r\nconst animascroll = new _module_animation_scroll_js__WEBPACK_IMPORTED_MODULE_1__[\"default\"] (\"[data-anime='scroll']\")\r\nanimascroll.init()\r\n\r\nconst dropmenu = new _module_dropdown_menu_js__WEBPACK_IMPORTED_MODULE_6__[\"default\"] ('[data-dropdown=\"\"]')\r\ndropmenu.init()\r\n\r\nconst menumoblie = new _module_menu_moblie_js__WEBPACK_IMPORTED_MODULE_7__[\"default\"] ('[data-menu=\"button\"]','[data-menu=\"list\"]')\r\nmenumoblie.init()\r\n\r\nconst funcionamento = new _module_funcionamento_js__WEBPACK_IMPORTED_MODULE_8__[\"default\"] ('[data-semana]', \"aberto\") \r\nfuncionamento.init()\r\n\r\n;(0,_module_fetch_animais_js__WEBPACK_IMPORTED_MODULE_9__[\"default\"])()\r\n;(0,_module_scrollsuave_js__WEBPACK_IMPORTED_MODULE_0__[\"default\"])()\r\n\r\nconsole.log(\"Teste\")\n\n//# sourceURL=webpack://animais/./main/js/index.js?");

/***/ }),

/***/ "./main/js/module/accordion-list.js":
/*!******************************************!*\
  !*** ./main/js/module/accordion-list.js ***!
  \******************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (/* binding */ Accordion)\n/* harmony export */ });\n// ACCORDION-LIST\r\nclass Accordion {\r\n  constructor(list) {\r\n    this.accordionList = document.querySelectorAll(list);\r\n    this.activeClass = \"ativo\";\r\n  }\r\n\r\n  ToggleAccordion(item) {\r\n    item.classList.toggle(this.activeClass);\r\n    item.nextElementSibling.classList.toggle(this.activeClass);\r\n  }\r\n\r\n  // adicionar evento ao accordion\r\n  addAccordionEvent() {\r\n    this.accordionList.forEach((item) => {\r\n      item.addEventListener(\"click\", () => this.ToggleAccordion);\r\n    });\r\n  }\r\n  // iniciar funcao\r\n  init() {\r\n    if (this.accordionList.length) {\r\n      // ativar primeiro item\r\n      this.ToggleAccordion(this.accordionList[0]);\r\n      this.addAccordionEvent();\r\n    }\r\n    // colocar o return this para poder linkar os métodos se não vai da undefined\r\n    return this;\r\n  }\r\n}\n\n//# sourceURL=webpack://animais/./main/js/module/accordion-list.js?");

/***/ }),

/***/ "./main/js/module/anima-numeros.js":
/*!*****************************************!*\
  !*** ./main/js/module/anima-numeros.js ***!
  \*****************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (/* binding */ AnimaNumeros)\n/* harmony export */ });\nclass AnimaNumeros {\r\n  constructor(numeros, observeTarget, observerClass) {\r\n    this.numeros = document.querySelectorAll(numeros);\r\n    this.observeTarget = document.querySelector(observeTarget);\r\n    this.observerClass = observerClass;\r\n\r\n    // bind o this do objeto ao call da mutação\r\n    this.handleMutation = this.handleMutation.bind(this)\r\n  }\r\n\r\n  // Recebe um elemento do dom, com numero em seu texto\r\n  // incrementa a partir de 0 até o número final\r\n  // static porque a função não precisa diretamente do objeto para funcionar , porem tenho que define constructor\r\n  static incrementarNumero(numero) {\r\n    const total = +numero.innerText;\r\n    const incremento = Math.floor(total / 100);\r\n    let start = 0;\r\n    const timer = setInterval(() => {\r\n      start = start + incremento;\r\n      numero.innerText = start;\r\n      if (start > total) {\r\n        numero.innerText = total;\r\n        clearInterval(timer);\r\n      }\r\n    }, 25 * Math.random());\r\n  }\r\n\r\n  // ativa incrementar numero para cada numero selecionado do dom\r\n  animaNumeros() {\r\n    this.numeros.forEach((numero) => {\r\n      this.constructor.incrementarNumero(numero)\r\n    })\r\n  }\r\n\r\n\r\n  handleMutation(mutation) {\r\n    if (mutation[0].target.classList.contains(this.observerClass)) {\r\n      this.observer.disconnect();\r\n      this.animaNumeros();\r\n    }\r\n  }\r\n\r\n\r\n  // quando a classe ativarS é ativado ao animar o scroll , vai observar se caso for true vai ativar a função handleMutation() , e assim ativar a função animaNumeros()\r\n  addMutationObserver() {\r\n    this.observer = new MutationObserver (this.handleMutation);\r\n    this.observer.observe(this.observeTarget, { attributes: true });\r\n  }\r\n\r\n  init() {\r\n    if (this.numeros.length && this.observeTarget) {\r\n      this.addMutationObserver();\r\n    }\r\n    return this;\r\n  }\r\n}\r\n\n\n//# sourceURL=webpack://animais/./main/js/module/anima-numeros.js?");

/***/ }),

/***/ "./main/js/module/animation.scroll.js":
/*!********************************************!*\
  !*** ./main/js/module/animation.scroll.js ***!
  \********************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (/* binding */ ScrollAnima)\n/* harmony export */ });\n/* harmony import */ var _debounce_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./debounce.js */ \"./main/js/module/debounce.js\");\n\r\n\r\n\r\n\r\n\r\n// ANIMACAO DE SCROLL\r\nclass ScrollAnima {\r\n  constructor(sections) {\r\n    this.sections = document.querySelectorAll(sections);\r\n    this.windowMetade = window.innerHeight * 0.4;\r\n\r\n    this.checkDistance = (0,_debounce_js__WEBPACK_IMPORTED_MODULE_0__[\"default\"])(this.checkDistance.bind(this), 50)\r\n  }\r\n\r\n  // o [...this.sections] é uma nodelist que está sendo destrurado pelo o spread e se transformando numa array e utilizando o método map \r\n  getDistance () {\r\n    this.distance = [...this.sections].map((section) => {\r\n      const offset = section.offsetTop;\r\n      return {\r\n        element: section,\r\n        offset: Math.floor(offset - this.windowMetade),\r\n      };\r\n    });\r\n  }\r\n\r\n  // verifica a distancia em cada objeto em relacao ao scroll do site\r\n  checkDistance () {\r\n    this.distance.forEach((item) => {\r\n      if (window.pageYOffset > item.offset) {\r\n        item.element.classList.add(\"ativarS\");\r\n      } else if (item.element.classList.contains(\"ativarS\")) {\r\n        item.element.classList.remove(\"ativarS\");\r\n      }\r\n    })\r\n  }\r\n\r\n  // mesma função do codigo acima , porem o getBoundingClientRect ele faz mais checkagem a cada vez no DOM e o checkDistance verifica o pageYOffSet somente.\r\n  // animaScroll() {\r\n  //   this.sections.forEach((section) => {\r\n  //     const sectionTop = section.getBoundingClientRect().top;\r\n  //     const isSectionVisible = (sectionTop - this.windowMetade) < 0;\r\n  //     if (isSectionVisible) {\r\n  //       section.classList.add(\"ativarS\");\r\n  //     } else if (section.classList.contains(\"ativarS\")) {\r\n  //       section.classList.remove(\"ativarS\");\r\n  //     }\r\n  //   });\r\n  // }\r\n\r\n  init() {\r\n    if (this.sections.length) {\r\n      this.getDistance()\r\n      this.checkDistance()\r\n      window.addEventListener(\"scroll\", this.checkDistance);\r\n    }\r\n    return this\r\n  }\r\n}\n\n//# sourceURL=webpack://animais/./main/js/module/animation.scroll.js?");

/***/ }),

/***/ "./main/js/module/debounce.js":
/*!************************************!*\
  !*** ./main/js/module/debounce.js ***!
  \************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (/* binding */ DebounceScroll)\n/* harmony export */ });\nfunction DebounceScroll (callback,delay) {\r\n  let timer\r\n    return (...args) => {\r\n      if (timer) {\r\n        clearTimeout(timer)\r\n      }\r\n      timer = setTimeout (() => {\r\n        callback(...args)\r\n        timer = null\r\n      }, delay)\r\n    };\r\n  }\r\n\n\n//# sourceURL=webpack://animais/./main/js/module/debounce.js?");

/***/ }),

/***/ "./main/js/module/dropdown-menu.js":
/*!*****************************************!*\
  !*** ./main/js/module/dropdown-menu.js ***!
  \*****************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (/* binding */ DropdownMenu)\n/* harmony export */ });\n/* harmony import */ var _outsideclick_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./outsideclick.js */ \"./main/js/module/outsideclick.js\");\n\r\n\r\nclass DropdownMenu {\r\n  constructor(datadrop, events) {\r\n    this.dropdownMenu = document.querySelectorAll(datadrop);\r\n\r\n    // define o touchstart e click como argumento padrão de events\r\n    if (events === undefined) {\r\n      this.events = [\"touchstart\", \"click\"];\r\n    } else {\r\n      this.events = events;\r\n    }\r\n\r\n    this.activeClass = \"active\";\r\n    this.activeDropDown = this.activeDropDown.bind(this);\r\n  }\r\n\r\n  // ativa o dropmenu e ativa a função outsideClick que observa o click fora dele.\r\n  activeDropDown(event) {\r\n    const eventTarget = event.currentTarget;\r\n    event.preventDefault();\r\n    eventTarget.classList.add(this.activeClass);\r\n    (0,_outsideclick_js__WEBPACK_IMPORTED_MODULE_0__[\"default\"])(eventTarget, this.events, () => {\r\n      eventTarget.classList.remove(this.activeClass);\r\n    });\r\n  }\r\n\r\n  // adiciona os eventos ao dropdownmenu\r\n  addDropdownMenusEvent() {\r\n    this.dropdownMenu.forEach((menu) => {\r\n      // menu.addEventListener('touchstart', handleClick)\r\n      // menu.addEventListener('click', handleClick)\r\n      this.events.forEach((userEvent) => {\r\n        menu.addEventListener(userEvent, this.activeDropDown);\r\n      });\r\n    });\r\n  }\r\n\r\n\r\n  init() {\r\n    if (this.dropdownMenu.length) {\r\n      this.addDropdownMenusEvent();\r\n    }\r\n    return this;\r\n  }\r\n}\r\n\r\n//\r\n\n\n//# sourceURL=webpack://animais/./main/js/module/dropdown-menu.js?");

/***/ }),

/***/ "./main/js/module/fetch.animais.js":
/*!*****************************************!*\
  !*** ./main/js/module/fetch.animais.js ***!
  \*****************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (/* binding */ fetchAnimais)\n/* harmony export */ });\n/* harmony import */ var _anima_numeros_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./anima-numeros.js */ \"./main/js/module/anima-numeros.js\");\n\r\n\r\nfunction fetchAnimais() {\r\n  // criar div contendo informações com total de animais\r\n  function createAnimal(animal) {\r\n    const div = document.createElement(\"div\");\r\n    div.classList.add(\"numero-animal\");\r\n    div.innerHTML = `<h3>${animal.specie} </h3><span data-numero>${animal.total}</span>`;\r\n    return div;\r\n  }\r\n\r\n  const numerosGrid = document.querySelector(\".numeros-grid\");\r\n  function preencherAnimais(animal) {\r\n    const divAnimal = createAnimal(animal);\r\n    numerosGrid.appendChild(divAnimal);\r\n  }\r\n\r\n  function animaAnimaisNumeros() {\r\n    const animarNumeros = new _anima_numeros_js__WEBPACK_IMPORTED_MODULE_0__[\"default\"]( \"[data-numero]\", \".numeros\", \"ativarS\");\r\n    animarNumeros.init()\r\n\r\n    // voce pode usar a classe para varios elemento do seu site ,\r\n    // o incrementarnumero está dentro do prótotipo da constructora\r\n    // AnimaNumeros.incrementarNumero(document.querySelector(\".numeral\"))\r\n\r\n  }\r\n\r\n  async function criarAnimais(url) {\r\n    try {\r\n      const animaisResponse = await fetch(url);\r\n      const animaisJson = await animaisResponse.json();\r\n\r\n      animaisJson.forEach((animal) => {\r\n        preencherAnimais(animal);\r\n      });\r\n      animaAnimaisNumeros();\r\n    } catch (erro) {\r\n      console.log(erro);\r\n    }\r\n  }\r\n  criarAnimais(\"./animaisapi.json\");\r\n}\r\n\r\n\r\n// API do bitcoin\r\nasync function bitCoin() {\r\n  try {\r\n    // usando o try (tentar).\r\n    const dadosbtc = await fetch(\"https://blockchain.info/ticker\"); // fazendo requisição da APi pelo http\r\n    const infobtc = await dadosbtc.json(); // usando await para transformar api em arquivo json\r\n\r\n    const btcapi = document.querySelector(\".btcAPI\"); // selecionando a UL\r\n    const total = 100 / infobtc.BRL.sell; // dividindo o valor de venda do btc em 100 reais\r\n    const cleanTotal = total.toFixed(7).replace(\".\", \",\"); // limpando o numero com toFixed(7) com 7 caracterer , trocando o .(ponto) por virgulando utilizando o replace\r\n\r\n    btcapi.innerHTML = `Doe em bitcoin <span style=\"background-color: #3f4; padding: .2rem .5rem; border-radius: 3px; font-weight: bold;\">${cleanTotal} R$</span>`; // estilizando e chamando a API\r\n  } catch (erro) {\r\n    // erro se caso der erro em cima vai aparece msg de erro no console\r\n    console.log(` ${erro} deu erro `);\r\n  }\r\n}\r\n\r\nbitCoin(); // executando a função async\r\n\n\n//# sourceURL=webpack://animais/./main/js/module/fetch.animais.js?");

/***/ }),

/***/ "./main/js/module/funcionamento.js":
/*!*****************************************!*\
  !*** ./main/js/module/funcionamento.js ***!
  \*****************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (/* binding */ Funcionamento)\n/* harmony export */ });\nclass Funcionamento {\r\n  constructor (funcionamento, activeClasse) {\r\n  this.funcionamento = document.querySelector (funcionamento)\r\n  this.activeClasse = activeClasse\r\n\r\n  }\r\n\r\n  dadosFuncionamento () {\r\n   this.diasSemanas = this.funcionamento.dataset.semana.split(',').map(Number)\r\n   this.horarioSemana = this.funcionamento.dataset.horario.split(',').map(Number)\r\n  }\r\n  \r\n  \r\n  dadosAgora () {\r\n  this.dataAgora = new Date() // seleciona opçao de trabalhar com data\r\n  \r\n  this.diaAgora = this.dataAgora.getDay() // seleciona a dia da semana seg , terça , quart , \r\n  this.horarioAgora = this.dataAgora.getHours() // horario atual do computador\r\n  }\r\n  \r\n  estaAberto () {\r\n  this.semanaAberto = this.diasSemanas.indexOf(this.diaAgora) !== -1;\r\n  this.horarioAberto = (this.horarioAgora >= this.horarioSemana[0] && this.horarioAgora < this.horarioSemana[1]); // operador ternario \r\n\r\n    return this.semanaAberto && this.horarioAberto\r\n  }\r\n\r\n  ativaAberto () {\r\n    if (this.estaAberto()) {\r\n    this.funcionamento.classList.add(this.activeClasse)\r\n    }\r\n  }\r\n\r\n  init () {\r\n    if (this.funcionamento) {\r\n      this.dadosFuncionamento()\r\n      this.dadosAgora()\r\n      this.ativaAberto()\r\n    }\r\n    return this\r\n  }\r\n}\r\n\r\n\r\n\n\n//# sourceURL=webpack://animais/./main/js/module/funcionamento.js?");

/***/ }),

/***/ "./main/js/module/menu-moblie.js":
/*!***************************************!*\
  !*** ./main/js/module/menu-moblie.js ***!
  \***************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (/* binding */ MenuMoblie)\n/* harmony export */ });\n/* harmony import */ var _outsideclick_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./outsideclick.js */ \"./main/js/module/outsideclick.js\");\n\r\n\r\nclass MenuMoblie {\r\n  constructor(menuButton, menuList, eventos) {\r\n    this.menuButton = document.querySelector(menuButton);\r\n    this.menuList = document.querySelector(menuList);\r\n    \r\n    this.openMenu = this.openMenu.bind(this)\r\n\r\n    if (eventos === undefined) {\r\n      this.eventos = [\"touchstart\", \"click\"];\r\n    } else {\r\n      this.eventos = eventos;\r\n    }\r\n\r\n    this.classeAtivo = \"ativo\";\r\n  }\r\n\r\n  openMenu() {\r\n    this.menuList.classList.add(this.classeAtivo)\r\n    this.menuButton.classList.add(this.classeAtivo);\r\n    (0,_outsideclick_js__WEBPACK_IMPORTED_MODULE_0__[\"default\"])(this.menuList, this.eventos, () => {\r\n      this.menuList.classList.remove(this.classeAtivo);\r\n      this.menuButton.classList.remove(this.classeAtivo);\r\n    });\r\n  }\r\n\r\n  addEventMenu() {\r\n    this.eventos.forEach((e) => {\r\n      this.menuButton.addEventListener(e, this.openMenu);\r\n    });\r\n  }\r\n\r\n  init() {\r\n    if (this.menuButton && this.menuList) {\r\n      this.addEventMenu();\r\n    }\r\n    return this;\r\n  }\r\n}\r\n\n\n//# sourceURL=webpack://animais/./main/js/module/menu-moblie.js?");

/***/ }),

/***/ "./main/js/module/modal.js":
/*!*********************************!*\
  !*** ./main/js/module/modal.js ***!
  \*********************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (/* binding */ Modal)\n/* harmony export */ });\nclass Modal {\r\n  constructor(botaoAbrir, botaoFechar, containerModal) {\r\n    this.botaoAbrir = document.querySelector(botaoAbrir);\r\n    this.botaoFechar = document.querySelector(botaoFechar);\r\n    this.containerModal = document.querySelector(containerModal);\r\n    this.classActive = \"ativo\";\r\n\r\n\r\n    // com bind voce força o objeto fazer referencia a ele mesmo no método.\r\n    this.eventToggleModal = this.eventToggleModal.bind(this)\r\n    this.cliqueForaModal = this.cliqueForaModal.bind(this)\r\n  }\r\n\r\n  ToggleModal () {\r\n    this.containerModal.classList.toggle(this.classActive);\r\n  }\r\n\r\n  eventToggleModal (event) {\r\n    event.preventDefault()\r\n    this.ToggleModal()\r\n  }\r\n\r\n  cliqueForaModal (event) {\r\n    if (event.target === this.containerModal) {\r\n      this.ToggleModal(event);\r\n    }\r\n  }\r\n\r\n  addEventModal() {\r\n    this.botaoAbrir.addEventListener(\"click\", this.eventToggleModal);\r\n    this.botaoFechar.addEventListener(\"click\", this.eventToggleModal);\r\n    this.containerModal.addEventListener(\"click\", this.cliqueForaModal);\r\n  }\r\n\r\n  init() {\r\n    if (this.botaoAbrir && this.botaoFechar && this.containerModal) {\r\n      this.addEventModal();\r\n    }\r\n    // colocar o return this para poder linkar os métodos se não vai da undefined\r\n    return this;\r\n  }\r\n}\r\n\r\n// SIMPLIFICANDO O CODIGO A CIMA COM TOGGLE\r\n// export function initmodalToggle ( ) {\r\n//   const botaoAbrir = document.querySelector('[data-modal=\"abrir\"]');\r\n//   const botaoFechar = document.querySelector('[data-modal=\"fechar\"]');\r\n//   const containerModal = document.querySelector('[data-modal=\"modal-container\"]');\r\n\r\n//   if (botaoAbrir && botaoFechar && containerModal) {\r\n//     function toggleModal(event) {\r\n//       event.preventDefault();\r\n//       containerModal.classList.toggle(\"ativo\");\r\n//     }\r\n\r\n//     function cliqueForaModal(event) {\r\n//       if (event.target === this) {\r\n//         toggleModal(event);\r\n//       }\r\n//     }\r\n\r\n//     botaoAbrir.addEventListener(\"click\", toggleModal);\r\n//     botaoFechar.addEventListener(\"click\", toggleModal);\r\n//     containerModal.addEventListener(\"click\", cliqueForaModal);\r\n//   }\r\n// }\r\n\n\n//# sourceURL=webpack://animais/./main/js/module/modal.js?");

/***/ }),

/***/ "./main/js/module/navegaocaotab.js":
/*!*****************************************!*\
  !*** ./main/js/module/navegaocaotab.js ***!
  \*****************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (/* binding */ ativaNavegacao)\n/* harmony export */ });\n// NAVEGACÃO POR TABS\r\nclass ativaNavegacao {\r\n\r\n    constructor (menu,content) {\r\n      this.tabMenu = document.querySelectorAll(menu);\r\n      this.tabContent = document.querySelectorAll(content)\r\n      this.classActive = \"ativo\"\r\n    }\r\n\r\n    activeTab(index) {\r\n    this.tabContent.forEach((content) => {\r\n      // FAZ UM LOOP E REMOVE A CLASS ATIVO NO QUAIS TIVER A CLASS ATIVO\r\n      content.classList.remove(this.classActive);\r\n    });\r\n    \r\n    const direcao = this.tabContent[index].dataset.anime;\r\n    this.tabContent[index].classList.add(this.classActive, direcao); // ADICIONA A CLASS ATIVO\r\n  }\r\n\r\n    addTabEvent () {\r\n      this.tabMenu.forEach((item, index) => {\r\n        // FAZ UM LOOP POR CADA ELEMENTO DA LISTA PEGA O ITEM E ADICIONA UM EVENTO DE CLICK E UMA FUNCAO QUE ATIVA A FUNCÁO ACTIVETAB\r\n        item.addEventListener(\"click\", () =>  this.activeTab(index))\r\n      });\r\n    }\r\n\r\n  // iniciar função\r\n    init () {\r\n      if (this.tabMenu.length && this.tabContent.length) {\r\n        this.tabContent[0].classList.add(this.classActive)\r\n        this.addTabEvent()\r\n      }\r\n      // colocar o return this para poder linkar os métodos se não vai da undefined\r\n      return this;\r\n    }\r\n  }\r\n\n\n//# sourceURL=webpack://animais/./main/js/module/navegaocaotab.js?");

/***/ }),

/***/ "./main/js/module/outsideclick.js":
/*!****************************************!*\
  !*** ./main/js/module/outsideclick.js ***!
  \****************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (/* binding */ outsideClick)\n/* harmony export */ });\nfunction outsideClick(element, events, callback) {\r\n  const html = document.documentElement;\r\n  const dataoutisde = \"data-outside\";\r\n\r\n  if (!element.hasAttribute(dataoutisde)) {\r\n    events.forEach((userEvent) => {\r\n      setTimeout(() => {html.addEventListener(userEvent, handleOutsideClick)});\r\n    });\r\n    element.setAttribute(dataoutisde, \"\");\r\n  }\r\n\r\n  function handleOutsideClick(event) {\r\n    if (!element.contains(event.target)) {\r\n      element.removeAttribute(dataoutisde);\r\n      events.forEach((userEvent) => {\r\n        html.removeEventListener(userEvent, handleOutsideClick);\r\n      });\r\n      callback();\r\n    }\r\n  }\r\n}\r\n\n\n//# sourceURL=webpack://animais/./main/js/module/outsideclick.js?");

/***/ }),

/***/ "./main/js/module/scrollsuave.js":
/*!***************************************!*\
  !*** ./main/js/module/scrollsuave.js ***!
  \***************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (/* binding */ InitScrollSmooth)\n/* harmony export */ });\n// scroll suave\r\nfunction InitScrollSmooth() {\r\n  const linkInternos = document.querySelectorAll('[data-menu] a[href^=\"#\"]');\r\n\r\n  function scrollToSection(event) {\r\n    event.preventDefault();\r\n    const href = event.currentTarget.getAttribute(\"href\");\r\n    const section = document.querySelector(href);\r\n    section.scrollIntoView({\r\n      behavior: \"smooth\",\r\n      block: \"start\",\r\n    });\r\n\r\n    //FORMA ALTERNATIVA DE SCROLL\r\n    // const topo = section.offsetTop;\r\n    // window.scrollTo({\r\n    //   top: topo,\r\n    //   behavior: \"smooth\",\r\n    // });\r\n  }\r\n\r\n  linkInternos.forEach((link) => {\r\n    link.addEventListener(\"click\", scrollToSection);\r\n  });\r\n}\r\n\r\n\n\n//# sourceURL=webpack://animais/./main/js/module/scrollsuave.js?");

/***/ }),

/***/ "./main/js/module/tooltip.js":
/*!***********************************!*\
  !*** ./main/js/module/tooltip.js ***!
  \***********************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (/* binding */ Tooltip)\n/* harmony export */ });\nclass Tooltip {\r\n  constructor(tooltip) {\r\n    this.toolTip = document.querySelectorAll(tooltip);\r\n\r\n    this.onMouseLeave = this.onMouseLeave.bind(this);\r\n    this.onMouseMove = this.onMouseMove.bind(this);\r\n    this.onMouseOver = this.onMouseOver.bind(this);\r\n  }\r\n\r\n  // criar tooltipbox e adiciona os evento de MouseMove e MouseLeave ao target\r\n  onMouseOver({currentTarget}) {\r\n    this.criarTooltipBox(currentTarget)\r\n    currentTarget.addEventListener(\"mousemove\", this.onMouseMove);\r\n    currentTarget.addEventListener(\"mouseleave\", this.onMouseLeave);\r\n  }\r\n\r\n  // Adiciona os eventos onMouseMove a cada tooltip\r\n  addTooltipEvent() {\r\n    this.toolTip.forEach((item) => {\r\n      item.addEventListener(\"mouseover\", this.onMouseOver);\r\n    });\r\n  }\r\n \r\n  // muda a tooltip conforme a posição\r\n  onMouseMove(e) {\r\n    this.tooltipBox.style.top = `${e.pageY + 20}px`\r\n    if ((e.pageX + 240 > window.innerWidth)) {\r\n      this.tooltipBox.style.left = `${e.pageX - 190}px`;\r\n    } else {\r\n      this.tooltipBox.style.left = `${e.pageX + 20}px`;\r\n    }\r\n  }\r\n\r\n  // destruturar o event {currentTarget}\r\n  // remove os evento \r\n  onMouseLeave({ currentTarget }) {\r\n    this.tooltipBox.remove();\r\n    currentTarget.removeEventListener(\"mouseleave\", this.onMouseLeave);\r\n    currentTarget.removeEventListener(\"mousemove\", this.onMouseMove);\r\n  }\r\n\r\n  // cria a tooltip e coloca no body \r\n  criarTooltipBox(e) {\r\n    const tooltipBox = document.createElement(\"div\");\r\n    const text = e.getAttribute(\"aria-label\");\r\n    tooltipBox.classList.add(\"tooltip\");\r\n    tooltipBox.innerText = text;\r\n    document.body.appendChild(tooltipBox);\r\n    this.tooltipBox = tooltipBox;\r\n  }\r\n\r\n\r\n  // inicia o evento de criação da tooltip assim que o hover passa em cima do map. \r\n  init() {\r\n    if (this.toolTip.length) {\r\n      this.addTooltipEvent();\r\n    }\r\n    return this;\r\n  }\r\n}\r\n\r\n// const toolTip = document.querySelectorAll(\"[data-tooltip]\");\r\n\r\n// toolTip.forEach((item) => {\r\n//   item.addEventListener(\"mouseover\", onMouseOver);\r\n// });\r\n\r\n// function onMouseOver(event) {\r\n//   const tooltipBox =criarTooltipBox(this);\r\n//   tooltipBox.style.top = event.pageY + 'px';\r\n//   tooltipBox.style.left = event.pageX + 'px';\r\n\r\n//   onMouseMove.tooltipBox = tooltipBox\r\n//   this.addEventListener('mousemove', onMouseMove)\r\n\r\n//   onMouseLeave.tooltipBox = tooltipBox;\r\n//   onMouseLeave.element = this;\r\n//   this.addEventListener('mouseleave', onMouseLeave)\r\n// }\r\n\r\n// const onMouseMove = {\r\n//   handleEvent(e) {\r\n//     this.tooltipBox.style.top = e.pageY + 20 + 'px';\r\n//     this.tooltipBox.style.left = e.pageX + 20 + 'px';\r\n//   }\r\n// }\r\n\r\n// const onMouseLeave = {\r\n//   tooltipBox: '',\r\n//   element: '',\r\n//   handleEvent() {\r\n//    this.tooltipBox.remove()\r\n//    this.element.removeEventListener('mouseleave', onMouseLeave)\r\n//    this.element.removeEventListener('mousemove', onMouseMove)\r\n//   }\r\n// }\r\n\r\n// function criarTooltipBox(e) {\r\n//   const tooltipBox = document.createElement(\"div\");\r\n//   const text = e.getAttribute(\"aria-label\");\r\n//   tooltipBox.classList.add(\"tooltip\");\r\n//   tooltipBox.innerText = text\r\n//   document.body.appendChild(tooltipBox)\r\n//   return tooltipBox\r\n// }\r\n\n\n//# sourceURL=webpack://animais/./main/js/module/tooltip.js?");

/***/ })

/******/ 	});
/************************************************************************/
/******/ 	// The module cache
/******/ 	var __webpack_module_cache__ = {};
/******/ 	
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/ 		// Check if module is in cache
/******/ 		var cachedModule = __webpack_module_cache__[moduleId];
/******/ 		if (cachedModule !== undefined) {
/******/ 			return cachedModule.exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = __webpack_module_cache__[moduleId] = {
/******/ 			// no module.id needed
/******/ 			// no module.loaded needed
/******/ 			exports: {}
/******/ 		};
/******/ 	
/******/ 		// Execute the module function
/******/ 		__webpack_modules__[moduleId](module, module.exports, __webpack_require__);
/******/ 	
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/ 	
/************************************************************************/
/******/ 	/* webpack/runtime/define property getters */
/******/ 	(() => {
/******/ 		// define getter functions for harmony exports
/******/ 		__webpack_require__.d = (exports, definition) => {
/******/ 			for(var key in definition) {
/******/ 				if(__webpack_require__.o(definition, key) && !__webpack_require__.o(exports, key)) {
/******/ 					Object.defineProperty(exports, key, { enumerable: true, get: definition[key] });
/******/ 				}
/******/ 			}
/******/ 		};
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/hasOwnProperty shorthand */
/******/ 	(() => {
/******/ 		__webpack_require__.o = (obj, prop) => (Object.prototype.hasOwnProperty.call(obj, prop))
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/make namespace object */
/******/ 	(() => {
/******/ 		// define __esModule on exports
/******/ 		__webpack_require__.r = (exports) => {
/******/ 			if(typeof Symbol !== 'undefined' && Symbol.toStringTag) {
/******/ 				Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });
/******/ 			}
/******/ 			Object.defineProperty(exports, '__esModule', { value: true });
/******/ 		};
/******/ 	})();
/******/ 	
/************************************************************************/
/******/ 	
/******/ 	// startup
/******/ 	// Load entry module and return exports
/******/ 	// This entry module can't be inlined because the eval devtool is used.
/******/ 	var __webpack_exports__ = __webpack_require__("./main/js/index.js");
/******/ 	
/******/ })()
;