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

let result = null;
let operator = null;
let formula = [];

function oneBtnHandler(event) {
  const value = oneBtn.innerText;
  if (operator === "＋") {
    operator = null;
    resultBar.innerHTML = "";
  }
  if (operator === "－") {
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
  if (operator === "＋") {
    operator = null;
    resultBar.innerHTML = "";
  }
  if (operator === "－") {
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
  if (operator === "＋") {
    operator = null;
    resultBar.innerHTML = "";
  }
  if (operator === "－") {
    operator = null;
    resultBar.innerHTML = "";
  }
  if (resultBar.innerHTML === "0") {
    resultBar.innerHTML = value;
  } else {
    resultBar.append(value);
  }
}
function fourBtnHandler(event) {
  const value = fourBtn.innerText;
  if (operator === "＋") {
    operator = null;
    resultBar.innerHTML = "";
  }
  if (operator === "－") {
    operator = null;
    resultBar.innerHTML = "";
  }
  if (resultBar.innerHTML === "0") {
    resultBar.innerHTML = value;
  } else {
    resultBar.append(value);
  }
}
function fiveBtnHandler(event) {
  const value = fiveBtn.innerText;
  if (operator === "＋") {
    operator = null;
    resultBar.innerHTML = "";
  }
  if (operator === "－") {
    operator = null;
    resultBar.innerHTML = "";
  }
  if (resultBar.innerHTML === "0") {
    resultBar.innerHTML = value;
  } else {
    resultBar.append(value);
  }
}
function sixBtnHandler(event) {
  const value = sixBtn.innerText;
  if (operator === "＋") {
    operator = null;
    resultBar.innerHTML = "";
  }
  if (operator === "－") {
    operator = null;
    resultBar.innerHTML = "";
  }
  if (resultBar.innerHTML === "0") {
    resultBar.innerHTML = value;
  } else {
    resultBar.append(value);
  }
}
function sevenBtnHandler(event) {
  const value = sevenBtn.innerText;
  if (operator === "＋") {
    operator = null;
    resultBar.innerHTML = "";
  }
  if (operator === "－") {
    operator = null;
    resultBar.innerHTML = "";
  }
  if (resultBar.innerHTML === "0") {
    resultBar.innerHTML = value;
  } else {
    resultBar.append(value);
  }
}
function eightBtnHandler(event) {
  const value = eightBtn.innerText;
  if (operator === "＋") {
    operator = null;
    resultBar.innerHTML = "";
  }
  if (operator === "－") {
    operator = null;
    resultBar.innerHTML = "";
  }
  if (resultBar.innerHTML === "0") {
    resultBar.innerHTML = value;
  } else {
    resultBar.append(value);
  }
}
function nineBtnHandler(event) {
  const value = nineBtn.innerText;
  if (operator === "＋") {
    operator = null;
    resultBar.innerHTML = "";
  }
  if (operator === "－") {
    operator = null;
    resultBar.innerHTML = "";
  }
  if (resultBar.innerHTML === "0") {
    resultBar.innerHTML = value;
  } else {
    resultBar.append(value);
  }
}
function zeroBtnHandler(event) {
  const value = zeroBtn.innerText;
  if (operator === "＋") {
    operator = null;
    resultBar.innerHTML = "";
  }
  if (operator === "－") {
    operator = null;
    resultBar.innerHTML = "";
  }
  if (resultBar.innerHTML === "0") {
    resultBar.innerHTML = value;
  } else {
    resultBar.append(value);
  }
}

function calculateFormula() {
  console.log(formula);
  for (let i = 0; i < formula.length; i++) {
    if (formula[i] === "＋") {
      result = formula[i - 1] + formula[i + 1];
      formula[i] = result;
      formula.splice(i + 1, 1);
      formula.splice(i - 1, 1);
      result = 0;
    }
  }
}

function equalBtnHandler(event) {
  formula.push(parseInt(resultBar.innerHTML, 10));
  calculateFormula();
}

function removeAllElementfromList() {
  while (formula.length !== 0) {
    formula.pop();
  }
}
function clearBtnHandler(event) {
  resultBar.innerHTML = "0";
  operator = null;
  removeAllElementfromList();
}
function sumBtnHandler(event) {
  operator = "＋";
  formula.push(parseInt(resultBar.innerHTML, 10));
  formula.push("＋");
}
function subtractionBtnHandler(event) {
  operator = "－";
  formula.push(parseInt(resultBar.innerHTML, 10));
  formula.push("－");
  console.log(formula);
}
function multiplicationBtnHandler(event) {
  operator = "×";
  formula.push(parseInt(resultBar.innerHTML, 10));
  formula.push("×");
  console.log(formula);
}
function devisionBtnHandler(event) {
  operator = "÷";
  formula.push(parseInt(resultBar.innerHTML, 10));
  formula.push("÷");
  console.log(formula);
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
