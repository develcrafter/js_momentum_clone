const toDoForm = document.querySelector(".js-toDoForm"),
  toDoInput = toDoForm.querySelector("input"),
  toDoList = document.querySelector(".js-toDoList");

const TODOS_LOCAL_STORAGE = "toDos";

function paintToDo(text) {
  const li = document.createElement("li");
  const delBtn = document.createElement("button");
  delBtn.innerText = "💤";
  const span = document.createElement("span");
  span.innerText = text;

  li.appendChild(delBtn);
  li.appendChild(span);

  toDoList.appendChild(li);
}

function handleToDoSubmit(event) {
  event.preventDefault();

  const currentValue = toDoInput.value;
  paintToDo(currentValue);
  saveToDos(currentValue);

  toDoInput.value = "";
}

function saveToDos(text) {
  localStorage.setItem(TODOS_LOCAL_STORAGE, text);
}

function loadToDos() {
  const toDos = localStorage.getItem(TODOS_LOCAL_STORAGE);

  if (toDos !== null) {
    paintToDo(toDos);
  }
}

function init() {
  loadToDos();
  toDoForm.addEventListener("submit", handleToDoSubmit);
}

init();

// const toDoForm = document.querySelector(".js-toDoForm"),
//   toDoInput = toDoForm.querySelector("input");

// const toDoList = document.querySelector(".js-toDoList");

// const TODO_LOCAL_STORAGE = "currentToDo";

// function paintToDo(text) {
//   const li = document.createElement("li");
//   const delBtn = document.createElement("button");
//   delBtn.innerText = "❌";
//   const span = document.createElement("span");
//   span.innerText = text;

//   li.appendChild(span);
//   li.appendChild(delBtn);
//   toDoList.appendChild(li);
// }

// function handleToDoSubmit(event) {
//   event.preventDefault();

//   const currentValue = toDoInput.value;
//   localStorage.setItem(TODO_LOCAL_STORAGE, currentValue);
//   paintToDo(currentValue);

//   toDoInput.value = "";
// }

// function loadToDo() {
//   const currentToDo = localStorage.getItem(TODO_LOCAL_STORAGE);

//   if (currentToDo !== null) {
//     paintToDo(currentToDo);
//   }
// }

// function init() {
//   loadToDo();
//   toDoForm.addEventListener("submit", handleToDoSubmit);
// }

// init();
