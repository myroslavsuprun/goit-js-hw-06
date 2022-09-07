let counterValue = 0;

const ref = {
  btnIncrement: document.querySelector('[data-action="increment"]'),
  btnDecrement: document.querySelector('[data-action="decrement"]'),
  counterSpan: document.querySelector('[id="value"]'),
};

ref.btnDecrement.addEventListener("click", onClickValueDecrement);
ref.btnIncrement.addEventListener("click", onClickValueIncrement);

function onClickValueDecrement() {
  counterValue -= 1;
  ref.counterSpan.textContent = counterValue;
}

function onClickValueIncrement() {
  counterValue += 1;
  ref.counterSpan.textContent = counterValue;
}
