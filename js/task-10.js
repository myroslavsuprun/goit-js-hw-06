function getRandomHexColor() {
  return `#${Math.floor(Math.random() * 16777215).toString(16)}`;
}

const ref = {
  btnCreate: document.querySelector("[data-create]"),
  btnDestroy: document.querySelector("[data-destroy]"),
  boxes: document.querySelector("#boxes"),
  input: document.querySelector('[type="number"]'),
};

ref.btnCreate.addEventListener("click", createBoxes);
ref.btnDestroy.addEventListener("click", destroyBoxes);

function createBoxes() {
  const amount = parseInt(ref.input.value);
  let markup = "";
  for (let i = 1; i <= amount; i++) {
    markup += `<div style="display: block;width:${i * 10 + 20}px;height:${
      i * 10 + 20
    }px; background-color:${getRandomHexColor()};"></div>`;
  }
  ref.boxes.innerHTML = markup;
}

function destroyBoxes() {
  ref.boxes.innerHTML = "";
}
