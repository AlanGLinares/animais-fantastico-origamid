export default function initFuncionamento() {

  const funcionamento = document.querySelector ('[data-semana]')
  const diasSemanas = funcionamento.dataset.semana.split(',').map(Number)
  const horarioSemana = funcionamento.dataset.horario.split(',').map(Number)
  
  
  
  
  const dataAgora = new Date() // seleciona opçao de trabalhar com data
  
  const diaAgora = dataAgora.getDay() // seleciona a dia da semana seg , terça , quart , 
  const horarioAgora = dataAgora.getHours() // horario atual do computador
  
  
  const semanaAberto = diasSemanas.indexOf(diaAgora) !== -1;
  const horarioAberto = (horarioAgora >= horarioSemana[0] && horarioAgora < horarioSemana[1]); // operador ternario 
    
  
  if (semanaAberto && horarioAberto ) {
    funcionamento.classList.add('aberto')
  } 
  
}


