let counterValue = 0;
const value = document.querySelector("#value");
const decrementBtn = document.querySelector('button[data-action="decrement"]');
const incrementBtn = document.querySelector('button[data-action="increment"]');

const decrease = () => {
  counterValue -= 1;
  value.textContent = counterValue;
};

const increase = () => {
  counterValue += 1;
  value.textContent = counterValue;
};

decrementBtn.addEventListener("click", decrease);
incrementBtn.addEventListener("click", increase);
