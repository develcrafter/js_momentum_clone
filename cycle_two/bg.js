const body = document.querySelector("body");

const IMG_NUMBER = 5;

function generateNumber() {
    const number = Math.floor(Math.random() * IMG_NUMBER);
    return number;
}

function paintBkgImage(imgNumber) {
    const image = new Image();
    image.src = `images/${imgNumber + 1}.jpg`;
    image.classList.add("bgImage");
    body.prepend(image);
}

function init() {
    const randomNumber = generateNumber();
    paintBkgImage(randomNumber);

}

init();
































// const body = document.querySelector("body");

// const IMG_NUMBER = 5,
//   BGIMG_CN = "bgImage";

// function paintBackGround(randomNumber) {
//   const image = new Image();
//   image.src = `images/${randomNumber}.jpg`;
//   body.prepend(image);
//   image.classList.add(BGIMG_CN);
// }

// function genNumber() {
//   const number = Math.floor(Math.random() * IMG_NUMBER) + 1;
//   return number;
// }

// function init() {
//   const randomNumber = genNumber();
//   paintBackGround(randomNumber);
// }

// init();
