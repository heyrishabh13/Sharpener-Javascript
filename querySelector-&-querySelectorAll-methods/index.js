const mainHeading = document.querySelector("#main-heading");
mainHeading.style.textAlign = "right";
mainHeading.style.paddingRight = "100px";

const header = document.querySelector("#header");
header.style.borderTopLeftRadius = "40px";
header.style.borderTopRightRadius = "40px";

const basketHeading = document.querySelector("#basket-heading");
basketHeading.style.color = "brown";
basketHeading.style.paddingLeft = "30px";

const fruits = document.querySelector(".fruits");
fruits.style.backgroundColor = "gray";
fruits.style.padding = "30px";
fruits.style.margin = "30px";
fruits.style.borderRadius = "10px";
fruits.style.listStyleType = "none";

const fruitItems = document.querySelectorAll(".fruit");
for (let i = 0; i < fruitItems.length; i++) {
  fruitItems[i].style.backgroundColor = "lightgray";
  fruitItems[i].style.marginBottom = "10px";
  fruitItems[i].style.paddingLeft = "30px";
  fruitItems[i].style.paddingTop = "10px";
  fruitItems[i].style.paddingBottom = "10px";
  fruitItems[i].style.borderRadius = "5px";
}

const evenFruitItems = document.querySelectorAll(".fruit:nth-child(even)");

for (let i = 0; i < evenFruitItems.length; i++) {
  evenFruitItems[i].style.backgroundColor = "brown";
  evenFruitItems[i].style.color = "white";
}
