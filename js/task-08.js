const ref = {
  submitForm: document.querySelector("form.login-form"),
};

ref.submitForm.addEventListener("submit", onSubmit);

function onSubmit(event) {
  event.preventDefault();
  if (
    event.currentTarget.email.value === "" ||
    event.currentTarget.password.value === ""
  ) {
    alert("All fields must be completed");
  }

  const element = {
    email: event.currentTarget.email.value,
    password: event.currentTarget.password.value,
  };
  console.log(element);

  event.currentTarget.reset();
}
