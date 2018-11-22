const form = document.querySelector(".js-form"),
  input = form.querySelector("input"),
  greetings = document.querySelector(".js-greetings");

const USER_LOCAL_STORAGE = "currentUser",
  SHOWING_CLASS_NAME = "showing";

function keepName(text) {
  localStorage.setItem(USER_LOCAL_STORAGE, text);
}

function handleSubmit(event) {
  console.log(2);
  event.preventDefault();
  console.log(3);
  const currentName = input.value;
  console.log(currentName);
  paintGreeting(currentName);
  keepName(currentName);
}

function askForName() {
  form.classList.add(SHOWING_CLASS_NAME);
  console.log(1);
  form.addEventListener("submit", handleSubmit);
  console.log("1-1");
}

function paintGreeting(text) {
  form.classList.remove(SHOWING_CLASS_NAME);
  greetings.classList.add(SHOWING_CLASS_NAME);
  greetings.innerText = `Hi~ ${text}`;
}

function loadName() {
  const currentUser = localStorage.getItem(USER_LOCAL_STORAGE);
  if (currentUser === null) {
    // user isn't
    askForName();
  } else {
    paintGreeting(currentUser);
  }
}

function init() {
  loadName();
}

init();
