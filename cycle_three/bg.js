const body = document.querySelector("body");

const IMG_NUMBERS = 6;

function genNumber() {
  const number = Math.ceil(Math.random() * IMG_NUMBERS);
  return number;
}

function paintBkgImage(number) {
  const image = new Image();
  image.src = `images/${number}.jpg`;
  body.appendChild(image);

  image.classList.add("bgImage");
}

function init() {
  const randomNumber = genNumber();
  paintBkgImage(randomNumber);
}

init();
