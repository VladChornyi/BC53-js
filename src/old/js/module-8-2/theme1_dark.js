const THEME_BODY = "theme_body";

const themeSwitcher = document.getElementById("theme-switch");
const body = document.body;

themeSwitcher.addEventListener("click", clickHandler);
// let checked = themeSwitcher.checked;

function addDark() {
  //body.classList.add("dark");
  body.classList.replace("light", "dark");
  localStorage.setItem(THEME_BODY, "dark");
}
function removeDark() {
  body.classList.replace("dark", "light");
  //   body.classList.add("light");
  localStorage.setItem(THEME_BODY, "light");
}

function clickHandler() {
  if (themeSwitcher.checked) {
    addDark();
  } else {
    removeDark();
  }
}

function setThemeOnLoad() {
  const localTheme = localStorage.getItem(THEME_BODY);

  if (localTheme === "dark") {
    // body.classList.add("dark");
    body.classList.replace("light", "dark");
    themeSwitcher.checked = true;
  } else {
    body.classList.replace("dark", "light");
    //body.classList.add("light");
    themeSwitcher.checked = false;
  }
}
setThemeOnLoad();
