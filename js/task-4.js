"use strict";

const registerForm = document.querySelector(".login-form");

registerForm.addEventListener("submit", (event) => {
  event.preventDefault();
  const form = event.target;
  const email = form.elements.email.value;
  const password = form.elements.password.value;
  if (email === "" || password === "") {
    console.log("All form fields must be filled in");
    return;
  }

  console.log({
    email: email,
    password: password,
  });

  form.reset();
});
