const COUNTER_KEY = 'localCounter'

const decreaseBtn = document.querySelector('[data-action="decrease"]');
const resetBtn = document.querySelector('[data-action="reset"]');
const increasetBtn = document.querySelector('[data-action="increase"]');
const saveBtn = document.querySelector('[data-action="save"]');
const clearBtn = document.querySelector('[data-action="clear-save"]');
const controlsDiv = document.querySelector(".counter-controls");
const saveDiv = document.querySelector(".save");
const counterDiv = document.querySelector(".counter-value");



let currentCounter = Number(counterDiv.textContent);
const controlsHandler = (ev) => {
  if (ev.target.closest('[data-action="decrease"]') === decreaseBtn) {
    currentCounter -= 1;
  }
  if (ev.target.closest('[data-action="increase"]') === increasetBtn) {
    currentCounter += 1;
  }
  if (ev.target.closest('[data-action="reset"]') === resetBtn) {
    currentCounter = 0;
  }
  counterDiv.textContent = currentCounter;
};
controlsDiv.addEventListener("click", controlsHandler);


const saveHandler = (ev) => {

  if (ev.target.closest('[data-action="save"]')){
    localStorage.setItem(COUNTER_KEY, currentCounter)
  } 
  if (ev.target.closest('[data-action="clear-save"]')){
    localStorage.removeItem(COUNTER_KEY)
  }


};
saveDiv.addEventListener("click", saveHandler);

function getItemLocalStorage (){
  const localValue = localStorage.getItem(COUNTER_KEY)
  if (localValue){
    currentCounter = Number(localValue)
    counterDiv.textContent = currentCounter
  }
}
getItemLocalStorage ()

