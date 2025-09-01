const bgYellow = document.getElementById("bg-yellow");
bgYellow.style.backgroundColor = "yellow";

const fruits = document.getElementsByClassName("fruit");
for (let i = 0; i < fruits.length; i++) {
  fruits[i].style.fontWeight = "bold";
}
