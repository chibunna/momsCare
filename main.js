const form = document.querySelector("#form");
const msgbox = document.querySelector(".msgbox");
const name = document.querySelector("#name");
const phone = document.querySelector("#phone");
const email = document.querySelector("#email");
const subject = document.querySelector("#subject");
const message = document.querySelector("#message-area");

form.addEventListener("submit", checkInputs);

function checkInputs(e) {
  e.preventDefault();

  if (
    name.value === "" ||
    phone.value === "" ||
    email.value === "" ||
    message.value === ""
  ) {
    msgbox.classList.add("errorColor");
    msgbox.innerHTML = "Please enter all required fields";

    // set timeout for the error message
    setTimeout(() => msgbox.remove(), 3000);
  } else {
    console.log("success");
  }
}
