document.addEventListener("DOMContentLoaded", initialize);

// Don't remove anything just complete the functions

// When the page get load display all users
function initialize() {
  const userList = JSON.parse(localStorage.getItem("users"));
  const ul = document.querySelector("ul");
  if (userList) {
    for (let i = 0; i < userList.length; i++) {
      let li = document.createElement("li");
      const { username, email, phone } = userList[i];
      li.textContent = username + " - " + email + "  - " + phone;
      ul.appendChild(li);
    }
  }
}
const users = [];
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

  users.push(obj);
  localStorage.setItem("users", JSON.stringify(users));

  localStorage.setItem(email, JSON.stringify(obj));

  display(obj);
}

// use this function to display user on screen
function display(obj) {
  const ul = document.querySelector("ul");
  const li = document.createElement("li");

  li.textContent = obj.username + " - " + obj.email + " - " + obj.phone + " ";

  const btn = document.createElement("button");
  btn.textContent = "Delete";
  btn.addEventListener("click", deleteData);

  li.appendChild(btn);
  ul.appendChild(li);
}

// use this function to delete the user details from local store and DOM (screen)
function deleteData(event) {
  const parent = event.target.parentElement;
  console.log(parent);
  const str = parent.firstChild.textContent;
  const email = str.split("-")[1].trim();

  localStorage.removeItem(email);
  //   const ul = document.querySelector("ul");
  parent.style.display = "none";
}

// module.exports = handleFormSubmit;
