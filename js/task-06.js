const inputArea = document.querySelector("input");

inputArea.addEventListener("input", onBlurQuantityChecker);

function onBlurQuantityChecker(event) {
  const ifEqual =
    event.currentTarget.value.length ===
    parseInt(event.currentTarget.dataset.length);

  if (ifEqual) {
    event.currentTarget.classList.add("valid");
    event.currentTarget.classList.remove("invalid");
  } else {
    event.currentTarget.classList.add("invalid");
    event.currentTarget.classList.remove("valid");
  }
}
