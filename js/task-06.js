const validationInput = document.querySelector("#validation-input");

const validation = (event) => {
  const validLength = Number(event.currentTarget.getAttribute("data-length"));
  let currentLength = event.currentTarget.value.length;
  if (currentLength === validLength) {
    validationInput.classList.add("valid");
    validationInput.classList.remove("invalid");
  } else {
    validationInput.classList.add("invalid");
    validationInput.classList.remove("valid");
  }
};

validationInput.addEventListener("blur", validation);
