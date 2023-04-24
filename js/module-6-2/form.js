const form = document.querySelector(".contact-form");
form.addEventListener("submit", (event) => {
  event.preventDefault();
  const { accept, username } = event.target.elements;
  console.dir(accept.checked, username.value);
});

form.addEventListener("input", (event) => {
  const username = event.target;
  if (username.value.length > 6) {
    username.style.outline = "3px solid yellow";
  } else {
    username.style.outline = "3px solid blue";
  }
  console.log(username.value);
});
