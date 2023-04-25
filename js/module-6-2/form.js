const form = document.querySelector(".contact-form");
const input = document.querySelector(".contact-form-input ");
form.addEventListener("submit", (event) => {
  event.preventDefault();
  const { accept, username } = event.target.elements;
  console.dir(accept.checked, username.value);
});

// form.addEventListener("input", (event) => {
//   const username = event.target;
//   if (username.value.length > 6) {
//     username.style.outline = "3px solid yellow";
//   } else {
//     username.style.outline = "3px solid blue";
//   }
//   console.log(username.value);
// });
// input.addEventListener("focus", (event) => {
//   const text = event.target;
//   if (text.value === "") {
//     text.style.outline = "3px solid red";
//   } else {
//     text.style.outline = "3px solid blue";
//   }
//   console.log(text.value);
// });
input.addEventListener("blur", (event) => {
  const text = event.target;
  if (text.value === "") {
    text.style.outline = "3px solid red";
  } else {
    text.style.outline = "3px solid lime";
  }
  console.log(text.value);
});
