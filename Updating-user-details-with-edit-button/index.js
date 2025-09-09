document.addEventListener("DOMContentLoaded", initialize);

// Don't remove anything just complete the functions

// When the page get load display all users
function initialize() {
  const users = JSON.parse(localStorage.getItem("usersList")) || [];

  for (let i = 0; i < users.length; i++) {
    display(users[i]);
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

  const editId = JSON.parse(sessionStorage.getItem("editId"));

  if (editId) {
    update(users, editId, obj);
  } else {
    addData(users, obj);
  }

  // event.target.reset();

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

  const editBtn = document.createElement("button");
  editBtn.textContent = "Edit";
  editBtn.addEventListener("click", () => editData(data));

  li.appendChild(deleteBtn);
  li.appendChild(editBtn);
}

// use this function to add user details into local storage
function addData(users, user) {
  user.id = Date.now();
  users.push(user);
  display(user);
}

// use this function to delete the user details from local store and DOM (screen)
function deleteData(id, li) {
  const users = JSON.parse(localStorage.getItem("usersList"));

  const updatedUsers = [];

  for (let i = 0; i < users.length; i++) {
    if (id !== users[i].id) {
      updatedUsers.push(users[i]);
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

  const editId = JSON.parse(sessionStorage.getItem("editId"));
  if (editId) {
    const users = JSON.parse(localStorage.getItem("usersList"));
    for(let user of users){
        if(user.id === editId){
            usernameInput.value = user.username;
            emailInput.value = user.email;
            phoneInput.value = user.phone;

            break; 
        }
    }
  }

  usernameInput.value = data.username;
  emailInput.value = data.email;
  phoneInput.value = data.phone;

  sessionStorage.setItem("editId", data.id);

  const submitBtn = document.querySelector("button[type=submit]");
  submitBtn.textContent = "Update";
}

function update(users, editId, obj) {
  for (let i = 0; i < users.length; i++) {
    if (editId === users[i].id) {
      users[i].username = obj.username;
      users[i].email = obj.email;
      users[i].phone = obj.phone;
    }
    console.log(editId, users[i].id);
  }

  sessionStorage.removeItem("editId");

  const submitBtn = document.querySelector("button[type=submit]");
  submitBtn.textContent = "Submit";

  let li = document.getElementById(editId);

  li.firstChild.textContent =
    obj.username + " - " + obj.email + " - " + obj.phone + " ";
}

// module.exports = handleFormSubmit;
