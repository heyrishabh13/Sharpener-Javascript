function handleFormSubmit(event) {
  event.preventDefault();

  const username = event.target.username.value;
  const email = event.target.email.value;
  const phone = event.target.phone.value;

  const obj = {
    username,
    email,
    phone,
  };

  const stringObj = JSON.stringify(obj);
  localStorage.setItem(email, stringObj);

  displayUser(obj);
}   

function displayUser(obj) {
  const ul = document.querySelector("ul");
  const li = document.querySelector("li");

  li.textContent = obj.username + " - " + obj.email + " - " + obj.phone;

  const deleteBtn = document.createElement("button");
  deleteBtn.textContent = "Delete";

  deleteBtn.addEventListener("click", () => {
    li.remove();
    localStorage.removeItem(obj.email);
  });

  li.appendChild(deleteBtn);

  ul.appendChild(li);
}
