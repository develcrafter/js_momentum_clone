const form = document.querySelector(".js-form"),
  input = form.querySelector("input");

const greetings = document.querySelector(".js-greetings");

const USER_LOCAL_STORAGE = "currentUser",
  SHOWING_CLASS_NAME = "showing";

function keepName(text) {
  localStorage.setItem(USER_LOCAL_STORAGE, text);
}

function handleSubmit(event) {
  event.preventDefault();

  const currentName = input.value;
  paintGreetings(currentName);
  keepName(currentName);
}

function askForName() {
  form.classList.add(SHOWING_CLASS_NAME);
  form.addEventListener("submit", handleSubmit);
}

function paintGreetings(text) {
  form.classList.remove(SHOWING_CLASS_NAME);

  greetings.classList.add(SHOWING_CLASS_NAME);
  greetings.innerText = `Hi~ ${text}`;
}

function loadName() {
  const currentUser = localStorage.getItem(USER_LOCAL_STORAGE);

  if (currentUser === null) {
    // user is not
    askForName();
  } else {
    // user is
    paintGreetings(currentUser);
  }
}

function init() {
  loadName();
}

init();
