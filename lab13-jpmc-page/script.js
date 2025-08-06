//VARIABLES
const menu = document.querySelector("#hamburger");
const options = document.querySelector(".options");
const modeSwitch = document.querySelector(".modeSwitch");
const user = document.querySelector(".user");

const darkModeToggle = document.getElementById("dark-mode-toggle");
const body = document.getElementsByTagName("body")[0];
const checkBox = document.querySelector("#checkbox");

//COOKIES
function setCookie(name, value, days) {
  const expires = new Date(Date.now() + days * 864e5).toUTCString();
  document.cookie =
    name +
    "=" +
    encodeURIComponent(value) +
    "; expires=" +
    expires +
    "; path=/";
}
function getCookie(name) {
  return document.cookie.split("; ").reduce((r, c) => {
    const [key, v] = c.split("=");
    return key === name ? decodeURIComponent(v) : r;
  }, "");
}
window.addEventListener("DOMContentLoaded", () => {
  const darkModePreference = getCookie("darkMode");
  if (darkModePreference === "enabled") {
    body.classList.add("dark");
    checkBox.checked = true;
  }
});

//EVENT LISTENERS
menu.addEventListener("click", displayNav);
checkBox.addEventListener("click", toggleDark);
options.addEventListener("click", checkDark);

//FUNCTIONS
function displayNav() {
  options.classList.toggle("hidden");
  modeSwitch.classList.toggle("hidden");
  user.classList.toggle("hidden");
}
function toggleDark() {
  const isDarkMode = body.classList.toggle("dark");
  setCookie("darkMode", isDarkMode ? "enabled" : "disabled", 7);
  checkBox.checked = isDarkMode;
}
function checkDark() {
  const darkModePreference = getCookie("darkMode");

  if (darkModePreference === "enabled" && !body.classList.contains("dark")) {
    body.classList.add("dark");
    checkBox.checked = true;
  }
}
