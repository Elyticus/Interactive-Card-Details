const cardHolder = document.getElementById("input__name");
const cardNumber = document.getElementById("input__card");
const expMonth = document.getElementById("input__month");
const expYear = document.getElementById("input__year");
const cvcNumber = document.getElementById("input__cvc");

const displayName = document.getElementById("display__name");
const displayExpDate = document.getElementById("display__exp__date");
const displayCard = document.getElementById("display__card");
const displayYear = document.getElementById("display__exp__year");
const displayCVC = document.getElementById("display__cvc");

const cardInfo = document.querySelector(".card__info");
const infoSection = document.querySelector(".final__section");
const finalButtonElement = document.querySelector(".final__button");

const confirmButton = document.getElementById("confirm__btn");

function handleInputElements() {
  const displayError = document.querySelectorAll(".blank__class")[0];

  const regexLetter = /[a-zA-Z]+/;

  if (cardHolder.value.trim() === "") {
    // cardHolder.classList.add("redError");
    displayError.style.display = "block";
    displayError.textContent = "Can't be blank!";
  } else if (cardHolder.value !== regexLetter) {
    displayError.textContent = "Invalid characters!";
  } else {
    displayError.textContent = "Your registration name has accepted.";
  }
}

confirmButton.addEventListener("click", handleInputElements);
