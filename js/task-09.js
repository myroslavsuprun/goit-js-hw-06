function getRandomHexColor() {
  return `#${Math.floor(Math.random() * 16777215).toString(16)}`;
}

const ref = {
  btnColorChanger: document.querySelector("button.change-color"),
  spanColorValue: document.querySelector("span.color"),
  body: document.querySelector("body"),
};

ref.btnColorChanger.addEventListener("click", onClickColorChange);

function onClickColorChange(event) {
  const colorValue = getRandomHexColor();
  ref.spanColorValue.textContent = colorValue;
  ref.body.style.backgroundColor = colorValue;
}
