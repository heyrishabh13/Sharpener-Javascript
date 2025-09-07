function handleFormSubmit(event) {
  event.preventDefault();
  const username = event.target.username.value;
  const email = event.target.email.value;
  const phone = event.target.phone.value;

  const obj = {
    username: username,
    email: email,
    phone: phone,
  };

  localStorage.setItem(email, JSON.stringify(obj));

  const newLi = document.createElement("li");
  newLi.innerHTML =
    username +
    ` - ` +
    email +
    ` - ` +
    phone +
    ` <button onclick="deleteList(event)">delete</button>`;

  const ul = document.querySelector("ul");
  ul.appendChild(newLi);
}

function deleteList(event) {
  const parent = event.target.parentElement;
  console.log(parent);
  const childNodeStr = parent.firstChild.textContent;
  const email = childNodeStr.split("-")[1].trim();
  localStorage.removeItem(email);
  parent.style.display = "none";
}
