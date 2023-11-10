import { Modal } from "./modal.js";

export const notANumber = (value) => {
  return isNaN(value) || value === "";
};

export const calculateIMC = (weight, height) => {
  return (weight / (height / 100) ** 2).toFixed(2);
};

export const displayResultMessage = (result) => {
  const message = `Your IMC is ${result}`;
  Modal.message.innerHTML = message;
  Modal.open();
};
