const ref = {
  nameInput: document.querySelector("input"),
  nameSpan: document.querySelector("span"),
};

ref.nameInput.addEventListener("input", onInputSpanChange);

function onInputSpanChange(event) {
  ref.nameSpan.textContent = event.currentTarget.value;
}

ref.nameInput.addEventListener("blur", onBlurEmptyChecker);

function onBlurEmptyChecker(event) {
  if ((event.currentTarget.value = " ")) {
    ref.nameSpan.textContent = "Anonymous";
  }
}
