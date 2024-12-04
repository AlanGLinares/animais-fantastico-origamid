export default function initTooltip() {
  const toolTip = document.querySelectorAll("[data-tooltip]");

  function onMouseOver(event) {
    const tooltipBox = criarTooltipBox(this);
    tooltipBox.style.top = event.pageY + "px";
    tooltipBox.style.left = event.pageX + "px";

    onMouseMove.tooltipBox = tooltipBox;
    this.addEventListener("mousemove", onMouseMove);

    onMouseLeave.tooltipBox = tooltipBox;
    onMouseLeave.element = this;
    this.addEventListener("mouseleave", onMouseLeave);
  }

  toolTip.forEach((item) => {
    item.addEventListener("mouseover", onMouseOver);
  });

  const onMouseMove = {
    handleEvent(e) {
      this.tooltipBox.style.top = e.pageY + 20 + "px";
      this.tooltipBox.style.left = e.pageX + 20 + "px";
    },
  };

  const onMouseLeave = {
    tooltipBox: "",
    element: "",
    handleEvent() {
      this.tooltipBox.remove();
      this.element.removeEventListener("mouseleave", onMouseLeave);
      this.element.removeEventListener("mousemove", onMouseMove);
    },
  };

  function criarTooltipBox(e) {
    const tooltipBox = document.createElement("div");
    const text = e.getAttribute("aria-label");
    tooltipBox.classList.add("tooltip");
    tooltipBox.innerText = text;
    document.body.appendChild(tooltipBox);
    return tooltipBox;
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
