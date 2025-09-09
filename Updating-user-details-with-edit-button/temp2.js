document.addEventListener("DOMContentLoaded", initialize);

// Don't remove anything just complete the functions

// When the page get load display all users
function initialize() {
  const users = JSON.parse(localStorage.getItem("usersList")) || [];

  for (let user of users) {
    display(user);
  }

  sessionStorage.removeItem("editId");
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

  const editId = sessionStorage.getItem("editId");

  if (editId) {
    update(editId, obj, users);
  } else {
    addData(users, obj);
  }

  localStorage.setItem("usersList", JSON.stringify(users));
}

// use this function to display user on screen
function display(data) {
  const ul = document.querySelector("ul");
  const li = document.createElement("li");

  li.textContent =
    data.username + " - " + data.email + " - " + data.phone + " ";

  li.id = data.id;

  ul.appendChild(li);

  const deleteBtn = document.createElement("button");
  deleteBtn.textContent = "Delete";
  deleteBtn.addEventListener("click", () => deleteData(data.id, li));

  li.appendChild(deleteBtn);

  const editBtn = document.createElement("button");
  editBtn.textContent = "Edit";
  editBtn.addEventListener("click", () => editData(data));

  li.appendChild(editBtn);
}

// use this function to add user details into local storage
function addData(usersList, userDetails) {
  userDetails.id = Date.now();
  usersList.push(userDetails);
  display(userDetails);
}

// use this function to delete the user details from local store and DOM (screen)
function deleteData(id, li) {
  const users = JSON.parse(localStorage.getItem("usersList")) || [];

  const updatedUsers = [];

  for (let user of users) {
    if (user.id !== id) {
      updatedUsers.push(user);
    }
  }

  localStorage.setItem("usersList", JSON.stringify(updatedUsers));

  li.remove();
}

// use this function to update user details from local storage
function editData(data) {
  const usernameInput = document.getElementById("username");
  const emailInput = document.getElementById("email");
  const phoneInput = document.getElementById("phone");

  usernameInput.value = data.username;
  emailInput.value = data.email;
  phoneInput.value = data.phone;

  sessionStorage.setItem("editId", data.id);
}

function update(editId, userDetails, usersList) {
  for (let i = 0; i < usersList.length; i++) {
    if (usersList[i].id == editId) {
      usersList[i].username = userDetails.username;
      usersList[i].email = userDetails.email;
      usersList[i].phone = userDetails.phone;

      break;
    }
  }

  const li = document.getElementById(editId);
  console.log(li);
  li.firstChild.textContent =
    userDetails.username +
    " - " +
    userDetails.email +
    " - " +
    userDetails.phone +
    " ";

  sessionStorage.removeItem("editId");
}

// module.exports = handleFormSubmit
