const cardInfo = document.querySelector(".card__info");
const confirmButton = document.querySelector(".confirm__btn");
const inputCardElement = document.querySelector(".input__card");
const inputYear = document.querySelector(".input__year");
const inputMonth = document.querySelector(".input__month");
const inputCvc = document.querySelector(".input__cvc");

function validateName() {
  const inputNameElement = document.querySelector(".input__name");
  const displayError = document.querySelectorAll(".blank__class")[0];

  const regex = /^[a-zA-Z]*$/g;

  if (inputNameElement.value.trim() === "") {
    inputNameElement.classList.add("redError");
    inputNameElement.classList.remove("greenValid");
    displayError.style.display = "block";
    displayError.textContent = "Can't be blank!";
    displayError.style.color = "red";
  } else if (!regex.test(inputNameElement.value)) {
    inputNameElement.classList.add("redError");
    inputNameElement.classList.remove("greenValid");
    displayError.style.color = "red";
    displayError.textContent = "Invalid characters!";
  } else {
    inputNameElement.classList.remove("redError");
    inputNameElement.classList.add("greenValid");
    displayError.style.color = "green";
    displayError.textContent = "Your registration name has accepted.";
    displayError.style.display = "block";
  }

  confirmButton.style.marginTop = "0px";
}

inputCardElement.addEventListener("input", function (event) {
  const maxLength = 16;

  const input = event.target;
  let numericValue = input.value.replace(/\D/g, "");

  if (numericValue.length > maxLength) {
    numericValue = numericValue.slice(0, maxLength);
  }

  input.value = numericValue;
});

function validateCard() {
  const regex = /^[0-9]+$/;
  const displayError = document.querySelectorAll(".blank__class")[1];

  if (inputCardElement.value.trim() === "") {
    inputCardElement.classList.add("redError");
    inputCardElement.classList.remove("greenValid");
    displayError.style.display = "block";
    displayError.textContent = "Can't be blank!";
    displayError.style.color = "red";
  } else if (!inputCardElement.value.match(regex)) {
    inputCardElement.classList.remove("greenValid");
    inputCardElement.classList.add("redError");
    displayError.style.display = "block";
    displayError.style.color = "red";
    displayError.textContent = "Only numbers accepted!";
  } else {
    inputCardElement.classList.remove("redError");
    inputCardElement.classList.add("greenValid");
    displayError.style.color = "green";
    displayError.textContent = "Your registration card number has accepted.";
    displayError.style.display = "block";
  }
}

function validateExpMmAndYy() {
  const expirationFlex = document.querySelector(".exp__info");

  const displayError = document.querySelectorAll(".blank__class")[2];

  const regex = /^[0-9]+$/;

  if (inputYear.value.trim() === "" || inputMonth.value.trim() === "") {
    inputYear.classList.remove("greenValid");
    inputMonth.classList.remove("greenValid");
    inputYear.classList.add("redError");
    inputMonth.classList.add("redError");
    displayError.style.color = "red";
    displayError.style.display = "block";
    displayError.textContent = "Can't be blank!";
    expirationFlex.style.gap = "95px";
  } else if (!inputYear.value.match(regex) || !inputMonth.value.match(regex)) {
    inputYear.classList.remove("greenValid");
    inputMonth.classList.remove("greenValid");
    inputYear.classList.add("redError");
    inputMonth.classList.add("redError");
    displayError.style.display = "block";
    displayError.style.color = "red";
    displayError.textContent = "Only numbers accepted!";
    expirationFlex.style.gap = "45px";
  } else {
    inputYear.classList.add("greenValid");
    inputMonth.classList.add("greenValid");
    inputYear.classList.remove("redError");
    inputMonth.classList.remove("redError");
    displayError.style.color = "green";
    displayError.textContent = "Your expiration date is valid";
    displayError.style.display = "block";
    expirationFlex.style.gap = "30px";
  }
}

inputMonth.addEventListener("input", function (event) {
  const maxLength = 2;

  const input = event.target;
  let numericValue = input.value.replace(/\D/g, "");

  if (numericValue.length > maxLength) {
    numericValue = numericValue.slice(0, maxLength);
  }

  input.value = numericValue;
});

inputYear.addEventListener("input", function (event) {
  const maxLength = 2;

  const input = event.target;
  let numericValue = input.value.replace(/\D/g, "");

  if (numericValue.length > maxLength) {
    numericValue = numericValue.slice(0, maxLength);
  }

  input.value = numericValue;
});

function ValidateCVC() {
  const displayError = document.querySelectorAll(".blank__class")[3];

  const regex = /^[0-9]+$/;

  if (inputCvc.value.trim() === "") {
    inputCvc.classList.remove("greenValid");
    inputCvc.classList.add("redError");
    displayError.style.display = "block";
    displayError.textContent = "Can't be blank!";
    displayError.style.color = "red";
  } else if (!inputCvc.value.match(regex)) {
    inputYear.classList.remove("greenValid");
    inputCvc.classList.add("redError");
    displayError.style.display = "block";
    displayError.style.color = "red";
    displayError.textContent = "Only numbers accepted!";
  } else {
    inputCvc.classList.add("greenValid");
    inputCvc.classList.remove("redError");
    displayError.textContent = "";
  }
}

inputCvc.addEventListener("input", function (event) {
  const maxLength = 3;

  const input = event.target;
  let numericValue = input.value.replace(/\D/g, "");

  if (numericValue.length > maxLength) {
    numericValue = numericValue.slice(0, maxLength);
  }

  input.value = numericValue;
});

confirmButton.addEventListener("click", validateName);
confirmButton.addEventListener("click", validateCard);
confirmButton.addEventListener("click", validateExpMmAndYy);
confirmButton.addEventListener("click", ValidateCVC);
