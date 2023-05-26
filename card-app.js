const cardInfo = document.querySelector(".card__info");
const finalInfo = document.querySelector(".final__section");
const confirmButton = document.querySelector(".confirm__btn");
const finalButtonElement = document.querySelector(".final__button");

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

function handleSubmit() {
  const validateName = () => {
    const displayError = document.querySelectorAll(".blank__class")[0];

    const regexLetter = /^[a-zA-Z\s]*$/;

    if (inputNameElement.value.trim() === "") {
      inputNameElement.classList.add("redError");
      inputNameElement.classList.remove("greenValid");
      displayError.style.display = "block";
      displayError.textContent = "Can't be blank!";
      displayError.style.color = "red";
      cardInfo.style.display = "block";
    } else if (!regexLetter.test(inputNameElement.value)) {
      inputNameElement.classList.add("redError");
      inputNameElement.classList.remove("greenValid");
      displayError.style.display = "block";
      displayError.style.color = "red";
      displayError.textContent = "Invalid characters!";
      cardInfo.style.display = "block";
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

  validateName();

  const validateCard = () => {
    const regex = /[0-9 ]+/;
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
    }
  };
  validateCard();

  const validateExpMmAndYy = () => {
    const expirationFlex = document.querySelector(".exp__info");

    const displayError = document.querySelectorAll(".blank__class")[2];

    const regexMonth = /^[0-9]+$/;

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
    } else if (
      !inputYear.value.match(regexMonth) ||
      !inputMonth.value.match(regexMonth)
    ) {
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

  validateExpMmAndYy();

  const validateCVC = () => {
    const displayError = document.querySelectorAll(".blank__class")[3];

    const regexCvc = /^[0-9]+$/;

    if (inputCvc.value.trim() === "") {
      inputCvc.classList.remove("greenValid");
      inputCvc.classList.add("redError");
      displayError.style.display = "block";
      displayError.textContent = "Can't be blank!";
      displayError.style.color = "red";
      cardInfo.style.display = "block";
    } else if (!inputCvc.value.match(regexCvc)) {
      inputYear.classList.remove("greenValid");
      inputCvc.classList.add("redError");
      displayError.style.display = "block";
      displayError.style.color = "red";
      displayError.textContent = "Only numbers accepted!";
      cardInfo.style.display = "block";
    } else {
      inputCvc.classList.remove("redError");
      inputCvc.classList.add("greenValid");
      displayError.style.color = "green";
      displayError.style.display = "block";
    }
  };
  validateCVC();

  const regexLetter = /^[a-zA-Z\s]*$/;
  const regex = /[0-9 ]+/;
  const regexMonth = /^[0-9]+$/;
  const regexCvc = /^[0-9]+$/;

  if (
    inputNameElement.value &&
    inputCardElement.value &&
    inputMonth.value &&
    inputYear.value &&
    inputCvc.value
  ) {
    finalInfo.style.visibility = "visible";
    cardInfo.style.display = "none";
  } else if (
    (!regexLetter.test(inputNameElement.value) &&
      !inputCardElement.value.match(regex) &&
      !inputYear.value.match(regexMonth)) ||
    (!inputMonth.value.match(regexMonth) && !inputCvc.value.match(regexCvc))
  ) {
    finalInfo.style.visibility = "hidden";
    cardInfo.style.display = "block";
  } else {
    finalInfo.style.visibility = "hidden";
    cardInfo.style.display = "block";
  }
}

confirmButton.addEventListener("click", handleSubmit);

const finalButton = () => {
  const displayErrorName = document.querySelectorAll(".blank__class")[0];
  const displayErrorCard = document.querySelectorAll(".blank__class")[1];
  const displayErrorMonth = document.querySelectorAll(".blank__class")[2];
  const displayErrorYear = document.querySelectorAll(".blank__class")[3];

  finalInfo.style.display = "none";
  cardInfo.style.display = "block";
  inputNameElement.value = "";
  inputCardElement.value = "";
  inputMonth.value = "";
  inputYear.value = "";
  inputCvc.value = "";

  inputNameElement.classList.remove("greenValid");
  inputCardElement.classList.remove("greenValid");
  inputMonth.classList.remove("greenValid");
  inputYear.classList.remove("greenValid");
  inputCvc.classList.remove("greenValid");
  inputNameElement.classList.remove("redError");
  inputCvc.classList.remove("redError");

  displayErrorName.textContent = "";
  displayErrorCard.textContent = "";
  displayErrorMonth.textContent = "";
  displayErrorYear.textContent = "";

  cardInfo.style.display = "block";
};

finalButtonElement.addEventListener("click", finalButton);

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
