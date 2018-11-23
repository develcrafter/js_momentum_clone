const toDoForm = document.querySelector(".js-toDoForm"),
    toDoInput = toDoForm.querySelector("input");

const toDoList = document.querySelector(".js-toDoList");

let toDos = [];

let delCount = 0;

const TODO_LS = "toDos";

function paintToDo(text) {
    const li = document.createElement("li");
    
    const delBtn = document.createElement("button");
    delBtn.innerText = "❌"
    delBtn.addEventListener("click", deleteToDo);

    const span = document.createElement("span");
    span.innerText = text;

    const newId = toDos.length + delCount + 1;

    li.appendChild(delBtn);
    li.appendChild(span);
    li.id = newId;

    toDoList.appendChild(li);

    const toDoObj = {
        text: text,
        id: newId,
    }

    toDos.push(toDoObj);
    saveToDos();

}

function deleteToDo(event) {
    // event.preventDefault();
    const btn = event.target;
    const li = btn.parentNode;

    toDoList.removeChild(li);

    const cleanToDos = toDos.filter(function (toDo) {
        return toDo.id !== parseInt(li.id);
    })

    toDos = cleanToDos;

    saveToDos();

    delCount++;
}

// function parseToDos(toDos) {
//     console.log(1, toDos);
    
// }



function saveToDos() {
    localStorage.setItem(TODO_LS, JSON.stringify(toDos));
}

function handleToDoSubmit(event) {
    event.preventDefault();

    const currentValue = toDoInput.value;
    paintToDo(currentValue);

    toDoInput.value = "";
}

function loadToDos() {
    const loadedToDos = localStorage.getItem(TODO_LS);
    // console.log(loadedToDos);
    if (loadedToDos !== null) {
        const parsedToDos = JSON.parse(loadedToDos);
        parsedToDos.forEach(function (toDo) {
            paintToDo(toDo.text);
        })
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

// const TODO_LS = "toDos";

// let toDos = [];

// function deleteToDo(event) {
//   event.preventDefault();
//   // console.dir(event.target.parentNode);
//   const btn = event.target;
//   const li = btn.parentNode;
// //   console.dir(li);

//   toDoList.removeChild(li);

//   const cleanToDos = toDos.filter(function(toDo) {
//     return toDo.id !== parseInt(li.id);
//   });

//   toDos = cleanToDos;
//   saveToDos();
// }

// function handleToDoSubmit(event) {
//   event.preventDefault();

//   const currentValue = toDoInput.value;
//   paintToDo(currentValue);

//   toDoInput.value = "";
// }

// function paintToDo(text) {
//   const li = document.createElement("li");
//   const delBtn = document.createElement("button");
//   delBtn.addEventListener("click", deleteToDo);
//   const span = document.createElement("span");

//   delBtn.innerText = "✔";
//   span.innerText = text;

//   li.appendChild(delBtn);
//   li.appendChild(span);

//   const newId = toDos.length + 1;

//   li.id = newId;
//   toDoList.appendChild(li);

//   const toDoObj = {
//     text: text,
//     id: newId
//   };

//   toDos.push(toDoObj);
//   saveToDos();
// }

// function saveToDos() {
//   localStorage.setItem(TODO_LS, JSON.stringify(toDos));
// }

// function loadToDos() {
//   const loadedToDos = localStorage.getItem(TODO_LS);

//   if (loadedToDos !== null) {
//     const parsedToDos = JSON.parse(loadedToDos);
//     parsedToDos.forEach(function(toDo) {
//       paintToDo(toDo.text);
//     });
//   }
// }

// function init() {
//   loadToDos();
//   toDoForm.addEventListener("submit", handleToDoSubmit);
// }

// init();

// // const toDoForm = document.querySelector(".js-toDoForm"),
// //   toDoInput = toDoForm.querySelector("input"),
// //   toDoList = document.querySelector(".js-toDoList");

// // const TODOS_LOCAL_STORAGE = "toDos";

// // const toDos = [];

// // function saveToDos() {
// //   localStorage.setItem(TODOS_LOCAL_STORAGE, JSON.stringify(toDos));
// // }

// // function paintToDo(text) {
// //   const li = document.createElement("li");

// //   const delBtn = document.createElement("button");
// //   delBtn.innerText = "💤";

// //   const span = document.createElement("span");
// //   span.innerText = text;

// //   const newId = toDos.length + 1;

// //   li.appendChild(span);
// //   li.appendChild(delBtn);
// //   li.id = newId;
// //   toDoList.appendChild(li);

// //   const toDoObj = {
// //     text: text,
// //     id: newId
// //   };

// //   toDos.push(toDoObj);
// //   saveToDos();
// // }

// // function handleToDoSubmit(event) {
// //   event.preventDefault();

// //   const currentValue = toDoInput.value;
// //   paintToDo(currentValue);

// //   toDoInput.value = "";
// // }

// // function loadToDos() {
// //   const loadedToDos = localStorage.getItem(TODOS_LOCAL_STORAGE);

// //   if (loadedToDos !== null) {
// //     const parsedToDos = JSON.parse(loadedToDos);
// //     parsedToDos.forEach(function(toDo) {
// //       paintToDo(toDo.text);
// //     });
// //   }
// // }

// // function init() {
// //   loadToDos();
// //   toDoForm.addEventListener("submit", handleToDoSubmit);
// // }

// // init();

// // // const toDoForm = document.querySelector(".js-toDoForm"),
// // //   toDoInput = toDoForm.querySelector("input");

// // // const toDoList = document.querySelector(".js-toDoList");

// // // const TODO_LOCAL_STORAGE = "currentToDo";

// // // function paintToDo(text) {
// // //   const li = document.createElement("li");
// // //   const delBtn = document.createElement("button");
// // //   delBtn.innerText = "❌";
// // //   const span = document.createElement("span");
// // //   span.innerText = text;

// // //   li.appendChild(span);
// // //   li.appendChild(delBtn);
// // //   toDoList.appendChild(li);
// // // }

// // // function handleToDoSubmit(event) {
// // //   event.preventDefault();

// // //   const currentValue = toDoInput.value;
// // //   localStorage.setItem(TODO_LOCAL_STORAGE, currentValue);
// // //   paintToDo(currentValue);

// // //   toDoInput.value = "";
// // // }

// // // function loadToDo() {
// // //   const currentToDo = localStorage.getItem(TODO_LOCAL_STORAGE);

// // //   if (currentToDo !== null) {
// // //     paintToDo(currentToDo);
// // //   }
// // // }

// // // function init() {
// // //   loadToDo();
// // //   toDoForm.addEventListener("submit", handleToDoSubmit);
// // // }

// // // init();
