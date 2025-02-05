"use strict";

const list = [...document.querySelectorAll("#categories .item")];
const quantity = list.reduce((total) => (total += 1), 0);
console.log(`Number of categories: ${quantity}`);

for (const i of list) {
  console.log(`Category: ${i.querySelector("h2").textContent}`);
  console.log(
    `Elements: ${[...i.querySelectorAll("ul li")].reduce(
      (total) => (total += 1),
      0
    )}`
  );
}
