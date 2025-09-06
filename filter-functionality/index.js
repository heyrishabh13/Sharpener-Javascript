// Add input element inside form, before button, to take fruit description
const form = document.querySelector("form");
const referenceEle = document.querySelector("button");

const newInput = document.createElement("input");
newInput.setAttribute("type", "text");
newInput.id = "description";
newInput.setAttribute("placeholder", "description");

form.insertBefore(newInput, referenceEle);

// Show the fruit description in italics on the next line
const fruits = document.querySelector(".fruits");
form.addEventListener("submit", (event) => {
  event.preventDefault();
  const name = document.getElementById("fruit-to-add");
  const description = document.getElementById("description");
  const newLi = document.createElement("li");
  newLi.className = "fruit";
  newLi.innerHTML =
    name.value +
    `<button class="delete-btn">x</button> <p style="font-style:italic;">${description.value}</p>`;
  fruits.appendChild(newLi);
});

// Create a filter that shows only those fruits whose either name or description or both matches the entered text
const filter = document.getElementById("filter");

filter.addEventListener("keyup", (event) => {
  const filterText = event.target.value.toLowerCase();
  console.log(filterText);
  const fruitItems = document.getElementsByClassName("fruit");
  for (let i = 0; i < fruitItems.length; i++) {
    const fruitNameText = fruitItems[i].firstChild.textContent.toLowerCase();
    const fruitDescriptionText = fruitItems[i].querySelector("p")
      ? fruitItems[i].querySelector("p").textContent.toLowerCase()
      : "";
    if (
      fruitNameText.indexOf(filterText) !== -1 ||
      fruitDescriptionText.indexOf(filterText) !== -1
    ) {
      fruitItems[i].style.display = "flex";
    } else {
      fruitItems[i].style.display = "none";
    }
  }
});

// const filter = document.getElementById("filter");

// filter.addEventListener("keyup", function (event) {
//   const textEntered = event.target.value.toLowerCase();
//   const fruitItems = document.getElementsByClassName("fruit");
//   for (let i = 0; i < fruitItems.length; i++) {
//     const curFruitTxt = fruitItems[i].firstChild.textContent.toLowerCase();
//     const curDesTxt = fruitItems[i].querySelector("p")
//       ? fruitItems[i].querySelector("p").textContent.toLowerCase()
//       : "";

//     if (
//       curFruitTxt.indexOf(textEntered) !== -1 ||
//       curDesTxt.indexOf(textEntered) !== -1
//     ) {
//       fruitItems[i].style.display = "flex";
//     } else {
//       fruitItems[i].style.display = "none";
//     }
//   }
// });
