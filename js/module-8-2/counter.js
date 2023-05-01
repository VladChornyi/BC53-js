const decreaseBtn = document.querySelector('[data-action="decrease"]');
const resetBtn = document.querySelector('[data-action="reset"]');
const increasetBtn = document.querySelector('[data-action="increase"]');
const saveBtn = document.querySelector('[data-action="save"]');
const clearBtn = document.querySelector('[data-action="clear-save"]');
const controlsDiv = document.querySelector(".counter-controls");
const saveDiv = document.querySelector(".save");
const counterDiv = document.querySelector(".counter-value");

// saveDiv.addEventListener("click", saveHandler);
// const saveHandler = (ev) => {};
const controlsHandler = (ev) => {
  let afterClick = Number(counterDiv.textContent);
  if (ev.target.closest('[data-action="decrease"]') === decreaseBtn) {
    afterClick -= 1;
  }
  if (ev.target.closest('[data-action="increase"]') === increasetBtn) {
    afterClick += 1;
  }
  if (ev.target.closest('[data-action="reset"]') === resetBtn) {
    afterClick = 0;
  }
  counterDiv.textContent = afterClick;
};

controlsDiv.addEventListener("click", controlsHandler);
