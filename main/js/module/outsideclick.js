export default function outsideClick(element, events, callback) {
  const html = document.documentElement;
  const dataoutisde = "data-outside";

  if (!element.hasAttribute(dataoutisde)) {
    events.forEach((userEvent) => {
      setTimeout(() => {html.addEventListener(userEvent, handleOutsideClick)});
    });
    element.setAttribute(dataoutisde, "");
  }

  function handleOutsideClick(event) {
    if (!element.contains(event.target)) {
      element.removeAttribute(dataoutisde);
      events.forEach((userEvent) => {
        html.removeEventListener(userEvent, handleOutsideClick);
      });
      callback();
    }
  }
}
