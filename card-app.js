const cardInfo = document.querySelector(".card__info");
const confirmButton = document.querySelector(".confirm__btn");

function validateName() {
  const inputNameElement = document.querySelector(".input__name");
  const displayError = document.querySelectorAll(".blank__class")[0];

  const regex = /^[a-zA-Z]*$/g;

  if (inputNameElement.value.trim() === "") {
    displayError.style.display = "block";
    displayError.textContent = "Can't be blank!";
  } else if (!regex.test(inputNameElement.value)) {
    displayError.style.color = "red";
    displayError.textContent = "Invalid characters";
  } else {
    displayError.style.color = "green";
    displayError.textContent = "Your registration name has accepted";
    displayError.style.display = "block";
  }
}

function validateCard() {
  const inputCardElement = document.querySelector(".input__card");
  const displayError = document.querySelectorAll(".blank__class")[1];

  const regex = /^[0-9]+$/;

  if (inputCardElement.value.trim() === "") {
    displayError.style.display = "block";
    displayError.textContent = "Can't be blank!";
  } else if (!inputCardElement.value.match(regex)) {
    displayError.style.display = "block";
    displayError.style.color = "red";
    displayError.textContent = "Only numbers accepted";
  } else {
    displayError.style.color = "green";
    displayError.textContent = "Your registration card number has accepted";
    displayError.style.display = "block";
  }
}

confirmButton.addEventListener("click", validateName);
confirmButton.addEventListener("click", validateCard);

// const inputMonth = document.querySelector(".input__month");
// const inputYear = document.querySelector(".input__year");
// const inputCvc = document.querySelector(".input__cvc");
