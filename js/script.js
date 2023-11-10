import { AlertError } from "./alertError.js";
import { calculateIMC, notANumber, displayResultMessage } from "./utils.js";

const form = document.querySelector("form");
const inputWeight = document.querySelector("#weight");
const inputHeight = document.querySelector("#height");
inputWeight.oninput = () => AlertError.close()
inputHeight.oninput = () => AlertError.close()

form.onsubmit = (e) => {
  e.preventDefault();
  const weight = inputWeight.value;
  const height = inputHeight.value;
  const weightOrHeightIsNotANumber = notANumber(weight) || notANumber(height);
  if (weightOrHeightIsNotANumber) {
    AlertError.open();
    return;
  }
  AlertError.close();
  const result = calculateIMC(weight, height);
  displayResultMessage(result);
};

