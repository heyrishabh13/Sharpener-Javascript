const form = document.querySelector("form");
const fruits = document.querySelector(".fruits");

var desInput = document.createElement("input");
desInput.setAttribute("type", "text");
desInput.id = "description";

const addbtn = document.querySelector('button[type="submit"]');

form.insertBefore(desInput, addbtn);

// Show the fruit description in italics on the next line
const desinput = document.getElementById("description");

form.addEventListener("submit", function (event) {
  event.preventDefault();

  const fruitToAdd = document.getElementById("fruit-to-add");
  const newLi = document.createElement("li");
  const litxt = document.createTextNode(fruitToAdd.value);
  newLi.appendChild(litxt);
  newLi.className = "fruit";

  const delbtn = document.createElement("button");
  const deltxt = document.createTextNode("x");
  delbtn.className = "delete-btn";
  delbtn.appendChild(deltxt);
  newLi.appendChild(delbtn);

  fruits.appendChild(newLi);

  const destxt = document.createElement("p");
  const destxtVal = document.createTextNode(desinput.value);
  destxt.appendChild(destxtVal);

  destxt.style.fontStyle = "italic";

  newLi.insertBefore(destxt, delbtn);
});

// Create a filter that shows only those fruits whose either name or description or both matches the entered text
const filter = document.getElementById("filter");

filter.addEventListener("keyup", function (event) {
  const textEntered = event.target.value.toLowerCase();
  const fruitItems = document.getElementsByClassName("fruit");
  for (let i = 0; i < fruitItems.length; i++) {
    const curFruitTxt = fruitItems[i].firstChild.textContent.toLowerCase();
    const curDesTxt = fruitItems[i].querySelector("p")
      ? fruitItems[i].querySelector("p").textContent.toLowerCase()
      : "";

    if (
      curFruitTxt.indexOf(textEntered) !== -1 ||
      curDesTxt.indexOf(textEntered) !== -1
    ) {
      fruitItems[i].style.display = "flex";
    } else {
      fruitItems[i].style.display = "none";
    }
  }
});
// This paste expires in <1 hour. Public IP access. Share whatever you see with others in seconds with Context.Terms of ServiceReport this
