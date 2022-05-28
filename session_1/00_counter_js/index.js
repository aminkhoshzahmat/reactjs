/**
 * root container
 */
const container = document.getElementById("root");

/**
 * Coutner value
 */
const counter = document.createElement("span");
counter.innerText = 0;

/**
 * Increase button
 */
const increase = document.createElement("button");
increase.style.margin = "10px";
increase.innerText = "increase";
increase.addEventListener("click", increaseValue);

/**
 * Decrease button
 */
const decrease = document.createElement("button");
decrease.innerText = "decrease";
decrease.addEventListener("click", decreaseValue);

/**
 * Dom creation
 */
container.appendChild(counter);
container.appendChild(increase);
container.appendChild(decrease);

/**
 * Helper methods
 */

function increaseValue() {
  counter.innerText = +counter.innerText + 1;
}

function decreaseValue() {
  counter.innerText = +counter.innerText - 1;
}
