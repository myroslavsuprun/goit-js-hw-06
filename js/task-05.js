const ref = {
  nameInput: document.querySelector("input"),
  nameSpan: document.querySelector("span"),
};

ref.nameInput.addEventListener("input", onInputSpanChange);
ref.nameInput.addEventListener("input", onEmptyInputSpanChange);

function onInputSpanChange(event) {
  ref.nameSpan.textContent = event.currentTarget.value;
}

function onEmptyInputSpanChange(event) {
  if (event.currentTarget.value === "") {
    ref.nameSpan.textContent = "Anonymous";
  }
}
