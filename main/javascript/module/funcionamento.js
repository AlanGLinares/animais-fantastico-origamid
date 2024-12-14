export default class Funcionamento {
  constructor (funcionamento, activeClasse) {
  this.funcionamento = document.querySelector (funcionamento)
  this.activeClasse = activeClasse

  }

  dadosFuncionamento () {
   this.diasSemanas = this.funcionamento.dataset.semana.split(',').map(Number)
   this.horarioSemana = this.funcionamento.dataset.horario.split(',').map(Number)
  }
  
  
  dadosAgora () {
  this.dataAgora = new Date() // seleciona opçao de trabalhar com data
  
  this.diaAgora = this.dataAgora.getDay() // seleciona a dia da semana seg , terça , quart , 
  this.horarioAgora = this.dataAgora.getHours() // horario atual do computador
  }
  
  estaAberto () {
  this.semanaAberto = this.diasSemanas.indexOf(this.diaAgora) !== -1;
  this.horarioAberto = (this.horarioAgora >= this.horarioSemana[0] && this.horarioAgora < this.horarioSemana[1]); // operador ternario 

    return this.semanaAberto && this.horarioAberto
  }

  ativaAberto () {
    if (this.estaAberto()) {
    this.funcionamento.classList.add(this.activeClasse)
    }
  }

  init () {
    if (this.funcionamento) {
      this.dadosFuncionamento()
      this.dadosAgora()
      this.ativaAberto()
    }
    return this
  }
}


