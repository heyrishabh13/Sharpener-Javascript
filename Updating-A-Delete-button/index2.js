document.addEventListener("DOMContentLoaded", initialize);

// Don't remove anything just complete the functions

// When the page get load display all users
function initialize() {
  const users = JSON.parse(localStorage.getItem("usersList")) || [];

  for (let i = 0; i < users.length; i++) {
    display(users[i]);
  }
}

// add new users in usersList array
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

  const users = JSON.parse(localStorage.getItem("usersList")) || [];

  obj.id = Date.now();

  users.push(obj);
  localStorage.setItem("usersList", JSON.stringify(users));

  display(obj);
}

// use this function to display user on screen
function display(obj) {
  const ul = document.querySelector("ul");
  const li = document.createElement("li");

  li.textContent = obj.username + " " + obj.email + " " + obj.phone + " ";
  li.id = data.id;

  ul.appendChild(li);

  const btn = document.createElement("button");
  btn.textContent = "Delete";
  btn.addEventListener("click", () => deleteData(obj.id, li));

  li.appendChild(btn);
}

// use this function to delete the user details from local store and DOM (screen)
function deleteData(id, li) {
  const users = JSON.parse(localStorage.getItem("usersList")) || [];

  const updatedUsers = [];
  for (let i = 0; i < users.length; i++) {
    if (id !== users[i].id) {
      updatedUsers.push(users[i]);
    }
  }

  localStorage.setItem("usersList", JSON.stringify(updatedUsers));

  li.remove();
}

// module.exports = handleFormSubmit;
