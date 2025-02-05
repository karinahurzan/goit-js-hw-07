"use strict";

const message = document.querySelector("#name-input");
const output = document.querySelector("#name-output");

message.addEventListener("input", (event) => {
  output.textContent = event.currentTarget.value.trim() || "Anonymous";
});
