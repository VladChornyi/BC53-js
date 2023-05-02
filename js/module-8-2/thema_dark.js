const LOCAL_THEME = "thema";

const themeSwitcher = document.getElementById("theme-switch");
themeSwitcher.checked = false;
const body = document.body;

themeSwitcher.addEventListener("click", clickHandler);

function clickHandler() {
  console.log(themeSwitcher.checked);
  if (themeSwitcher.checked) {
    body.classList.replace("light", "dark");

    localStorage.setItem(LOCAL_THEME, "dark");
  } else {
    body.classList.replace("dark", "light");
    localStorage.setItem(LOCAL_THEME, "light");
  }

  // if you change theme to dark, add 'dark' class and remove previus, add this change to local storage
  // if you select light theme do the same work but add 'light' class
}

function setThemeOnLoad() {
  const local_thema = localStorage.getItem(LOCAL_THEME);
  console.log(local_thema);
  if (local_thema) {
    switch (local_thema) {
      case "light":
        body.classList.replace("dark", "light");

        break;
      case "dark":
        body.classList.replace("light", "dark");
        themeSwitcher.checked = true;

      default:
        break;
    }
  }
  // this helpful function should call every time when you update page, to check what theme was seted to local storage
  // you should get data from LS and set saved theme to body
  // dont forget about themeSwitcher, if current theme is dark, it should be checked
}

setThemeOnLoad();
