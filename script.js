let inputD = document.getElementsByClassName("inputBoxx");

let introPage = document.getElementById("intro");

let firstPage = document.getElementById("pehla");

let confession = document.getElementById("confess");

let secondPage = document.getElementById("dusra");

let thirdPage = document.getElementById("teesra");

let evil = document.getElementById("evil-button");

let lastpage = document.getElementById("aakhri");

let paraLast = document.getElementById("lastpara");

let loves = document.getElementById("loves");
const OFFSET = 100;

let userr = "";

let shaadi = new Audio("shaadi mein.mp3");

function submitName() {
  userr = inputD[0].value;
  console.log(userr);

  introPage.style.display = "none";
  firstPage.style.display = "flex";
  confession.innerHTML = `Oye ${userr}, i like you👉👈`;
}

function noOne() {
  firstPage.style.display = "none";
  secondPage.style.display = "flex";
}

function noSecond() {
  secondPage.style.display = "none";
  thirdPage.style.display = "flex";
}

document.addEventListener("mousemove", (e) => {
  let x = e.pageX;
  let y = e.pageY;

  const buttBox = evil.getBoundingClientRect();
  const horizontal = distance(buttBox.x, x, buttBox.width);

  const vertical = distance(buttBox.y, y, buttBox.height);

  const horizontaloff = buttBox.width / 2 + OFFSET;

  const Verticaloff = buttBox.height / 2 + OFFSET;

  if (
    Math.abs(horizontal) <= horizontaloff &&
    Math.abs(vertical) <= Verticaloff
  ) {
    setButtonPosition(
      buttBox.x + (horizontaloff / horizontal) * 10,

      buttBox.y + (Verticaloff / vertical) * 10
    );
  }
});

function setButtonPosition(left, top) {
  const windowBox = document.body.getBoundingClientRect();
  const buttBox = evil.getBoundingClientRect();

  if (distance(left, windowBox.left, buttBox.width) < 0) {
    left = windowBox.right - buttBox.width - OFFSET;
  }

  if (distance(left, windowBox.right, buttBox.width) > 0) {
    left = windowBox.left + OFFSET;
  }

  if (distance(top, windowBox.top, buttBox.height) < 0) {
    top = windowBox.bottom - buttBox.height - OFFSET;
  }

  if (distance(top, windowBox.bottom, buttBox.height) > 0) {
    top = windowBox.top + OFFSET;
  }

  evil.style.top = `${top}px`;
  evil.style.left = `${left}px`;
}
function distance(boxPosition, mousePosition, boxSize) {
  return boxPosition - mousePosition + boxSize / 2;
}

evil.addEventListener("click", () => {
  evil.style.position = "absolute";
});

function TheEnd() {
  secondPage.style.display = "none";
  firstPage.style.display = "none";
  thirdPage.style.display = "none";
  lastpage.style.display = "flex";
  paraLast.innerHTML = `Mujhe pehle se pata tha ${userr}❤️`;
  shaadi.play();
  loves.innerHTML = `${userr} ❤️ Aditya`;
}
