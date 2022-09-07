const ref = {
  input: document.querySelector("#font-size-control"),
  span: document.querySelector("#text"),
};

ref.input.addEventListener("input", onInputFontSizeChange);

function onInputFontSizeChange(event) {
  ref.span.style.fontSize = `${event.currentTarget.value}px`;
}
