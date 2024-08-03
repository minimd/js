//inputs
let emailInput = document.querySelector("#email");
let usernameInput = document.querySelector("#username");
let passwordInput = document.querySelector("#password");
let passconfInput = document.querySelector("#passconf");
let button = document.querySelector(".submit-btn");

//labels
let emailLabel = document.querySelector("p.email-error");
let usernameLabel = document.querySelector("p.username-error");
let passwordLabel = document.querySelector("p.password-error");
let passconfLabel = document.querySelector("p.passconf-error");

//colorizing functions
function greenize(item) {
  item.classList.remove("red-border");
  item.classList.add("green-border");
}
function redize(item) {
  item.classList.remove("green-border");
  item.classList.add("red-border");
}

// validation functions
function isValidEmail(e) {
  const emailRegex = /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/;
  if (emailRegex.test(e)) {
    greenize(emailInput);
    emailLabel.textContent = "";
  } else {
    redize(emailInput);
    emailLabel.innerHTML = "please insert a valid email address ";
  }
}

function isValidUsername(e) {
  const userRegex = /^[a-zA-Z]+[a-zA-Z0-9._]$/;
  if (userRegex.test(e)) {
    greenize(usernameInput);
    usernameLabel.textContent = "";
  } else {
    redize(usernameInput);
    usernameLabel.textContent = "please insert a valid username";
  }
}
function isValidPassword(e) {
  const userRegex = /^.{6,}$/;
  if (userRegex.test(e)) {
    greenize(passwordInput);
    passwordLabel.textContent = "";
  } else {
    redize(passwordInput);
    passwordLabel.textContent = "please insert a valid username";
  }
}
function isValidPassconf(){
if(passconfInput.value===passwordInput.value){
    
}
}

button.onclick = function () {
  isValidEmail(emailInput.value);
  isValidUsername(usernameInput.value);
  isValidPassword(passwordInput.value);

};
