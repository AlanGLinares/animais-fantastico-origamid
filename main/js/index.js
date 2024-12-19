import InitScrollSmooth from './module/scrollsuave.js'
import ScrollAnima from './module/animation.scroll.js'
import Accordion from './module/accordion-list.js'
import TabNav from './module/navegaocaotab.js'
import Modal from './module/modal.js'
import Tooltip from './module/tooltip.js'
import DropdownMenu  from './module/dropdown-menu.js'
import MenuMoblie from './module/menu-moblie.js'
import Funcionamento from './module/funcionamento.js'
import initfetchAnimais from  './module/fetch.animais.js'

// import {testando , testando123} from './module/teste.js'
// testando()
// testando123()

const accordion = new Accordion("[data-anime-accordion] dt")
accordion.init()


const tabNav = new TabNav("[data-tab] li" ,  "[data-tab] section")
tabNav.init()

const modal = new Modal ('[data-modal="abrir"]','[data-modal="fechar"]','[data-modal="modal-container"]')
modal.init()


const tooltip = new Tooltip ("[data-tooltip]")
tooltip.init()

const animascroll = new ScrollAnima ("[data-anime='scroll']")
animascroll.init()

const dropmenu = new DropdownMenu ('[data-dropdown=""]')
dropmenu.init()

const menumoblie = new MenuMoblie ('[data-menu="button"]','[data-menu="list"]')
menumoblie.init()

const funcionamento = new Funcionamento ('[data-semana]', "aberto") 
funcionamento.init()

initfetchAnimais()
InitScrollSmooth()
