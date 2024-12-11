export default class Tooltip {
  constructor(tooltip) {
    this.toolTip = document.querySelectorAll(tooltip);

    this.onMouseLeave = this.onMouseLeave.bind(this);
    this.onMouseMove = this.onMouseMove.bind(this);
    this.onMouseOver = this.onMouseOver.bind(this);
  }

  // criar tooltipbox e adiciona os evento de MouseMove e MouseLeave ao target
  onMouseOver({currentTarget}) {
    this.criarTooltipBox(currentTarget)
    currentTarget.addEventListener("mousemove", this.onMouseMove);
    currentTarget.addEventListener("mouseleave", this.onMouseLeave);
  }

  // Adiciona os eventos onMouseMove a cada tooltip
  addTooltipEvent() {
    this.toolTip.forEach((item) => {
      item.addEventListener("mouseover", this.onMouseOver);
    });
  }
 
  // muda a tooltip conforme a posição
  onMouseMove(e) {
    this.tooltipBox.style.top = `${e.pageY + 20}px`
    if ((e.pageX + 240 > window.innerWidth)) {
      this.tooltipBox.style.left = `${e.pageX - 190}px`;
    } else {
      this.tooltipBox.style.left = `${e.pageX + 20}px`;
    }
  }

  // destruturar o event {currentTarget}
  // remove os evento 
  onMouseLeave({ currentTarget }) {
    this.tooltipBox.remove();
    currentTarget.removeEventListener("mouseleave", this.onMouseLeave);
    currentTarget.removeEventListener("mousemove", this.onMouseMove);
  }

  // cria a tooltip e coloca no body 
  criarTooltipBox(e) {
    const tooltipBox = document.createElement("div");
    const text = e.getAttribute("aria-label");
    tooltipBox.classList.add("tooltip");
    tooltipBox.innerText = text;
    document.body.appendChild(tooltipBox);
    this.tooltipBox = tooltipBox;
  }


  // inicia o evento de criação da tooltip assim que o hover passa em cima do map. 
  init() {
    if (this.toolTip.length) {
      this.addTooltipEvent();
    }
    return this;
  }
}

// const toolTip = document.querySelectorAll("[data-tooltip]");

// toolTip.forEach((item) => {
//   item.addEventListener("mouseover", onMouseOver);
// });

// function onMouseOver(event) {
//   const tooltipBox =criarTooltipBox(this);
//   tooltipBox.style.top = event.pageY + 'px';
//   tooltipBox.style.left = event.pageX + 'px';

//   onMouseMove.tooltipBox = tooltipBox
//   this.addEventListener('mousemove', onMouseMove)

//   onMouseLeave.tooltipBox = tooltipBox;
//   onMouseLeave.element = this;
//   this.addEventListener('mouseleave', onMouseLeave)
// }

// const onMouseMove = {
//   handleEvent(e) {
//     this.tooltipBox.style.top = e.pageY + 20 + 'px';
//     this.tooltipBox.style.left = e.pageX + 20 + 'px';
//   }
// }

// const onMouseLeave = {
//   tooltipBox: '',
//   element: '',
//   handleEvent() {
//    this.tooltipBox.remove()
//    this.element.removeEventListener('mouseleave', onMouseLeave)
//    this.element.removeEventListener('mousemove', onMouseMove)
//   }
// }

// function criarTooltipBox(e) {
//   const tooltipBox = document.createElement("div");
//   const text = e.getAttribute("aria-label");
//   tooltipBox.classList.add("tooltip");
//   tooltipBox.innerText = text
//   document.body.appendChild(tooltipBox)
//   return tooltipBox
// }
