const form = document.querySelector(".js-form"),
  input = form.querySelector("input"),
  greeting = document.querySelector(".js-greetings");

const USER_LOCAL_STORAGE = "currentUser",
  SHOWING_CLASS_NAME = "showing";

function saveName(text) {
  localStorage.setItem(USER_LOCAL_STORAGE, text);
}

function handleSubmit(event) {
  //   console.log(3);
  event.preventDefault();
  //   console.log(4);
  const currentValue = input.value;
  //   console.log(currentValue);
  paintGreeting(currentValue);
  saveName(currentValue);
}

function askForName() {
  form.classList.add(SHOWING_CLASS_NAME);
  //   console.log(1);
  form.addEventListener("submit", handleSubmit);
  //   console.log(2);
}

function paintGreeting(text) {
  form.classList.remove(SHOWING_CLASS_NAME);

  greeting.classList.add(SHOWING_CLASS_NAME);
  greeting.innerText = `Hello ${text}`;
}

function loadName() {
  const currentUser = localStorage.getItem(USER_LOCAL_STORAGE);

  if (currentUser === null) {
    askForName();
  } else {
    // user is
    paintGreeting(currentUser);
  }
}

function init() {
  loadName();
}

init();
