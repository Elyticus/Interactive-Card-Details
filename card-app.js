const cardInfo = document.querySelector(".card__info");
const finalInfo = document.querySelector(".final__section");
const confirmButton = document.querySelector(".confirm__btn");

const inputNameElement = document.querySelector(".input__name");
const inputCardElement = document.querySelector(".input__card");
const inputYear = document.querySelector(".input__year");
const inputMonth = document.querySelector(".input__month");
const inputCvc = document.querySelector(".input__cvc");

const printName = document.getElementById("display__name");
const printExpDate = document.getElementById("display__exp__date");
const printCard = document.getElementById("display__card");
const printYear = document.getElementById("display__exp__year");
const printCVC = document.getElementById("display__cvc");

const validateName = () => {
  const displayError = document.querySelectorAll(".blank__class")[0];

  const regex = /^[a-zA-Z\s]*$/;

  if (inputNameElement.value.trim() === "") {
    inputNameElement.classList.add("redError");
    inputNameElement.classList.remove("greenValid");
    displayError.style.display = "block";
    displayError.textContent = "Can't be blank!";
    displayError.style.color = "red";
    cardInfo.style.display = "block";
  } else if (!regex.test(inputNameElement.value)) {
    inputNameElement.classList.add("redError");
    inputNameElement.classList.remove("greenValid");
    displayError.style.display = "block";
    displayError.style.color = "red";
    displayError.textContent = "Invalid characters!";
    cardInfo.style.display = "block";
    finalInfo.style.display = "none";
  } else {
    inputNameElement.classList.remove("redError");
    inputNameElement.classList.add("greenValid");
    displayError.style.color = "green";
    displayError.textContent = "Your registration name has accepted.";
    displayError.style.display = "block";
    cardInfo.style.display = "none";
  }

  confirmButton.style.marginTop = "0px";
};

const validateCard = () => {
  const regex = /^[0-9]+$/;
  const displayError = document.querySelectorAll(".blank__class")[1];

  if (inputCardElement.value.trim() === "") {
    inputCardElement.classList.add("redError");
    inputCardElement.classList.remove("greenValid");
    displayError.style.display = "block";
    displayError.textContent = "Can't be blank!";
    displayError.style.color = "red";
    cardInfo.style.display = "block";
  } else if (!inputCardElement.value.match(regex)) {
    inputCardElement.classList.remove("greenValid");
    inputCardElement.classList.add("redError");
    displayError.style.display = "block";
    displayError.style.color = "red";
    displayError.textContent = "Wrong characters! Only numbers accepted!";
    cardInfo.style.display = "block";
  } else {
    inputCardElement.classList.remove("redError");
    inputCardElement.classList.add("greenValid");
    displayError.style.color = "green";
    displayError.textContent = "Your registration card number has accepted.";
    displayError.style.display = "block";
    finalInfo.style.display = "none";
  }
};

const validateExpMmAndYy = () => {
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
    cardInfo.style.display = "block";
  } else if (!inputYear.value.match(regex) || !inputMonth.value.match(regex)) {
    inputYear.classList.remove("greenValid");
    inputMonth.classList.remove("greenValid");
    inputYear.classList.add("redError");
    inputMonth.classList.add("redError");
    displayError.style.display = "block";
    displayError.style.color = "red";
    displayError.textContent = "Only numbers accepted!";
    expirationFlex.style.gap = "45px";
    cardInfo.style.display = "block";
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
};

const validateCVC = () => {
  const displayError = document.querySelectorAll(".blank__class")[3];

  const regex = /^[0-9]+$/;

  if (inputCvc.value.trim() === "") {
    inputCvc.classList.remove("greenValid");
    inputCvc.classList.add("redError");
    displayError.style.display = "block";
    displayError.textContent = "Can't be blank!";
    displayError.style.color = "red";
    cardInfo.style.display = "block";
  } else if (!inputCvc.value.match(regex)) {
    inputYear.classList.remove("greenValid");
    inputCvc.classList.add("redError");
    displayError.style.display = "block";
    displayError.style.color = "red";
    displayError.textContent = "Only numbers accepted!";
    cardInfo.style.display = "block";
  } else if (
    inputCvc.value === inputCvc.value &&
    inputYear.value.trim() === ""
  ) {
    inputCvc.classList.add("greenValid");
    inputCvc.classList.remove("redError");
    displayError.textContent = "";
  } else if (
    inputCvc.value === inputCvc.value &&
    inputCardElement.value.trim() === ""
  ) {
    inputCvc.classList.add("greenValid");
    inputCvc.classList.remove("redError");
    displayError.textContent = "";
  } else if (
    inputCvc.value === inputCvc.value &&
    inputNameElement.value.trim() === ""
  ) {
    inputCvc.classList.add("greenValid");
    inputCvc.classList.remove("redError");
    displayError.textContent = "";
  } else if (
    inputCvc.value === inputCvc.value &&
    inputMonth.value.trim() === ""
  ) {
    inputCvc.classList.add("greenValid");
    inputCvc.classList.remove("redError");
    displayError.textContent = "";
  } else {
    finalInfo.style.display = "block";
  }
};

confirmButton.addEventListener("click", validateName);
confirmButton.addEventListener("click", validateCard);
confirmButton.addEventListener("click", validateExpMmAndYy);
confirmButton.addEventListener("click", validateCVC);

inputMonth.addEventListener("input", (event) => {
  const maxLength = 2;

  const input = event.target;
  let numericValue = input.value.replace(/\D/g, "");

  if (numericValue.length > maxLength) {
    numericValue = numericValue.slice(0, maxLength);
  }

  input.value = numericValue;
});

inputYear.addEventListener("input", (event) => {
  const maxLength = 2;

  const input = event.target;
  let numericValue = input.value.replace(/\D/g, "");

  if (numericValue.length > maxLength) {
    numericValue = numericValue.slice(0, maxLength);
  }

  input.value = numericValue;
});

inputCvc.addEventListener("input", (event) => {
  const maxLength = 3;

  const input = event.target;
  let numericValue = input.value.replace(/\D/g, "");

  if (numericValue.length > maxLength) {
    numericValue = numericValue.slice(0, maxLength);
  }

  input.value = numericValue;
});

inputNameElement.addEventListener("keyup", () => {
  const typedText = inputNameElement.value;
  let displayedText = "";

  displayedText = typedText;
  printName.textContent = displayedText;
});

inputMonth.addEventListener("keyup", () => {
  const typedText = inputMonth.value;
  let displayedText = "/";

  displayedText = typedText;
  printExpDate.textContent = displayedText;
});

inputYear.addEventListener("keyup", () => {
  const typedText = inputYear.value;
  let displayedText = "/";

  displayedText += typedText;
  printYear.textContent = displayedText;
});

inputCardElement.addEventListener("keyup", () => {
  const typedText = inputCardElement.value;
  let displayedText = "";

  displayedText += typedText;
  printCard.textContent = displayedText;
});

inputCvc.addEventListener("keyup", () => {
  const typedText = inputCvc.value;
  let displayedText = "";

  displayedText = typedText;
  printCVC.textContent = displayedText;
});
