// <⚠️ DONT DELETE THIS ⚠️>
import "./styles.css";
// <⚠️ /DONT DELETE THIS ⚠️>
const resultBar = document.querySelector(".js-resultBar");
const oneBtn = document.querySelector(".js-btnOne");
const twoBtn = document.querySelector(".js-btnTwo");
const threeBtn = document.querySelector(".js-btnThree");
const fourBtn = document.querySelector(".js-btnFour");
const fiveBtn = document.querySelector(".js-btnFive");
const sixBtn = document.querySelector(".js-btnSix");
const sevenBtn = document.querySelector(".js-btnSeven");
const eightBtn = document.querySelector(".js-btnEight");
const nineBtn = document.querySelector(".js-btnNine");
const zeroBtn = document.querySelector(".js-btnZero");
const equalBtn = document.querySelector(".js-btnEqual");
const clearBtn = document.querySelector(".js-btnClear");
const sumBtn = document.querySelector(".js-btnSum");
const subtractionBtn = document.querySelector(".js-btnSubtraction");
const multiplicationBtn = document.querySelector(".js-btnMultiplication");
const devisionBtn = document.querySelector(".js-btnDevision");

let operand = 0;
let operator = null;

function oneBtnHandler(event) {
  const value = oneBtn.innerText;
  if (operator !== null) {
    operator = null;
    resultBar.innerHTML = "";
  }
  if (resultBar.innerHTML === "0") {
    resultBar.innerHTML = value;
  } else {
    resultBar.append(value);
  }
}
function twoBtnHandler(event) {
  const value = twoBtn.innerText;
  if (operator !== null) {
    operator = null;
    resultBar.innerHTML = "";
  }
  if (resultBar.innerHTML === "0") {
    resultBar.innerHTML = value;
  } else {
    resultBar.append(value);
  }
}
function threeBtnHandler(event) {
  const value = threeBtn.innerText;
  if (resultBar.innerHTML === "0") {
    resultBar.innerHTML = value;
  } else {
    resultBar.append(value);
  }
}
function fourBtnHandler(event) {
  const value = fourBtn.innerText;
  if (resultBar.innerHTML === "0") {
    resultBar.innerHTML = value;
  } else {
    resultBar.append(value);
  }
}
function fiveBtnHandler(event) {
  const value = fiveBtn.innerText;
  if (resultBar.innerHTML === "0") {
    resultBar.innerHTML = value;
  } else {
    resultBar.append(value);
  }
}
function sixBtnHandler(event) {
  const value = sixBtn.innerText;
  if (resultBar.innerHTML === "0") {
    resultBar.innerHTML = value;
  } else {
    resultBar.append(value);
  }
}
function sevenBtnHandler(event) {
  const value = sevenBtn.innerText;
  if (resultBar.innerHTML === "0") {
    resultBar.innerHTML = value;
  } else {
    resultBar.append(value);
  }
}
function eightBtnHandler(event) {
  const value = eightBtn.innerText;
  if (resultBar.innerHTML === "0") {
    resultBar.innerHTML = value;
  } else {
    resultBar.append(value);
  }
}
function nineBtnHandler(event) {
  const value = nineBtn.innerText;
  if (resultBar.innerHTML === "0") {
    resultBar.innerHTML = value;
  } else {
    resultBar.append(value);
  }
}
function zeroBtnHandler(event) {
  const value = zeroBtn.innerText;
  if (resultBar.innerHTML === "0") {
    resultBar.innerHTML = value;
  } else {
    resultBar.append(value);
  }
}
function equalBtnHandler(event) {
  if (operator === "＋") {
    operand += parseInt(resultBar.innerHTML, 10);
  }
  resultBar.innerHTML = operand;
  operator = null;
}
function clearBtnHandler(event) {
  operand = 0;
  resultBar.innerHTML = "0";
  operator = null;
}
function sumBtnHandler(event) {
  operand += parseInt(resultBar.innerHTML, 10);
  console.log(operand);
  operator = sumBtn.innerHTML;
}
function subtractionBtnHandler(event) {
  const value = subtractionBtn.innerText;
  if (resultBar.innerHTML === "0") {
    resultBar.innerHTML = value;
  } else {
    resultBar.append(value);
  }
}
function multiplicationBtnHandler(event) {
  const value = multiplicationBtn.innerText;
  if (resultBar.innerHTML === "0") {
    resultBar.innerHTML = value;
  } else {
    resultBar.append(value);
  }
}
function devisionBtnHandler(event) {
  const value = devisionBtn.innerText;
  if (resultBar.innerHTML === "0") {
    resultBar.innerHTML = value;
  } else {
    resultBar.append(value);
  }
}

oneBtn.addEventListener("click", oneBtnHandler);
twoBtn.addEventListener("click", twoBtnHandler);
threeBtn.addEventListener("click", threeBtnHandler);
fourBtn.addEventListener("click", fourBtnHandler);
fiveBtn.addEventListener("click", fiveBtnHandler);
sixBtn.addEventListener("click", sixBtnHandler);
sevenBtn.addEventListener("click", sevenBtnHandler);
eightBtn.addEventListener("click", eightBtnHandler);
nineBtn.addEventListener("click", nineBtnHandler);
zeroBtn.addEventListener("click", zeroBtnHandler);
equalBtn.addEventListener("click", equalBtnHandler);
clearBtn.addEventListener("click", clearBtnHandler);
sumBtn.addEventListener("click", sumBtnHandler);
subtractionBtn.addEventListener("click", subtractionBtnHandler);
multiplicationBtn.addEventListener("click", multiplicationBtnHandler);
devisionBtn.addEventListener("click", devisionBtnHandler);

function init() {}
init();
