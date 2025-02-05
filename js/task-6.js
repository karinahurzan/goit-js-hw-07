"use strict";

function getRandomHexColor() {
  return `#${Math.floor(Math.random() * 16777215)
    .toString(16)
    .padStart(6, "0")}`;
}

const create = document.querySelector("button[data-create]");
const destroy = document.querySelector("button[data-destroy]");
const input = document.querySelector("input"); // Отримуємо поле введення
const container = document.querySelector("#boxes");

create.addEventListener("click", () => {
  const amount = Number(input.value); // Отримуємо значення з поля вводу
  createBoxes(amount);
});

destroy.addEventListener("click", destroyBoxes);

function createBoxes(amount) {
  if (amount >= 1 && amount <= 100) {
    container.innerHTML = ""; // Очищення перед створенням нових елементів

    for (let i = 0; i < amount; i++) {
      const size = 30 + 10 * i;
      const box = `<div style="
        width: ${size}px;
        height: ${size}px;
        background-color: ${getRandomHexColor()};
        margin: 5px;
      "></div>`;
      container.insertAdjacentHTML("beforeend", box);
    }
  } else {
    console.log("Please enter a number between 1 and 100");
  }
}

function destroyBoxes() {
  container.innerHTML = "";
}
