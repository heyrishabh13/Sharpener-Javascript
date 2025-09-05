const fruit = document.querySelectorAll(".fruit");

for (let i = 0; i < fruit.length; i++) {
  fruit[i].innerHTML =
    fruit[i].innerHTML + `<button class="edit-btn">Edit</button>`;
}

const form = document.querySelector("form");
const fruits = document.querySelector(".fruits");
console.log(fruits);

form.addEventListener("submit", (event) => {
  event.preventDefault();
  const input = document.getElementById("fruit-to-add");
  const newLi = document.createElement("li");
  newLi.className = "fruit";
  newLi.innerHTML =
    input.value +
    `<button class="delete-btn">x</button><button class="edit-btn">+</button>`;
  console.log(newLi);
  fruits.appendChild(newLi);
});

fruits.addEventListener("click", (event) => {
  if (event.target.classList.contains("delete-btn")) {
    console.log("1");
    const fruit = event.target.parentElement;
    fruits.removeChild(fruit);
  }
});
