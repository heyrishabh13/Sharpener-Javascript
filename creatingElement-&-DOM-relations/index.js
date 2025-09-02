const h3 = document.createElement("h3");
h3.innerHTML = "Buy high quality organic fruits online";

const header = document.querySelector("#header");
header.appendChild(h3);

header.lastElementChild.style.fontStyle = "italic";

const p = document.createElement("p");
p.innerHTML = "Total fruits: 4";

const fruits = document.querySelector(".fruits");

const parent = header.nextElementSibling;

const referenceElement = parent.children[1];

parent.insertBefore(p, referenceElement);

parent.children[1].id = "fruits-total";
