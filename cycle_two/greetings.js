const nameForm = document.querySelector(".js-nameForm"),
  nameInput = nameForm.querySelector("input"),
  greetings = document.querySelector(".js-greetings");

const USER_LS = "currentUser",
  SHOWING_CN = "showing";

function saveName(text) {
  localStorage.setItem(USER_LS, text);
}

function handleNameSubmit(event) {
  event.preventDefault();
  const currentValue = nameInput.value;

  paintGreetings(currentValue);
  saveName(currentValue);
}

function paintGreetings(text) {
  nameForm.classList.remove(SHOWING_CN);
  greetings.classList.add(SHOWING_CN);
  greetings.innerText = `Hi~ ${text}`;
}

function askForName() {
  nameForm.classList.add(SHOWING_CN);
  nameForm.addEventListener("submit", handleNameSubmit);
}

function loadName() {
  const currentUser = localStorage.getItem(USER_LS);

  if (currentUser === null) {
    // user isn't
    askForName();
  } else {
    //user is
    paintGreetings(currentUser);
  }
}

function init() {
  loadName();
}

init();
