document.addEventListener("DOMContentLoaded", () => {
  const usersList = JSON.parse(localStorage.getItem("usersList")) || [];

  for (let i = 0; i < usersList.length; i++) {
    display(usersList[i]);
  }
});

function handleFormSubmit(event) {
  event.preventDefault();

  const username = event.target.username.value;

  const email = event.target.email.value;

  const phone = event.target.phone.value;

  const userDetails = {
    username,

    email,

    phone,
  };

  // get previous users list

  const usersList = JSON.parse(localStorage.getItem("usersList")) || [];

  const editId = sessionStorage.getItem("editId");

  if (editId) {
    update(editId, userDetails, usersList);
  } else {
    add(usersList, userDetails);
  }

  localStorage.setItem("usersList", JSON.stringify(usersList));
}

function display(data) {
  const ul = document.querySelector("ul");

  const li = document.createElement("li");

  li.textContent = data.username + " " + data.email + " " + data.phone;

  li.id = data.id;

  ul.appendChild(li);

  const deleteButton = document.createElement("button");

  deleteButton.textContent = "Delete";

  deleteButton.addEventListener("click", () => deleteData(data.id, li));

  li.appendChild(deleteButton);

  const editButton = document.createElement("button");

  editButton.textContent = "Edit";

  editButton.addEventListener("click", () => edit(data, li));

  li.appendChild(editButton);
}

function add(usersList, userDetails) {
  userDetails.id = Date.now();

  usersList.push(userDetails);

  display(userDetails);
}

function deleteData(id, li) {
  const usersList = JSON.parse(localStorage.getItem("usersList"));

  let updatedUsersList = [];

  for (const user of usersList) {
    if (user.id != id) {
      updatedUsersList.push(user);
    }
  }

  localStorage.setItem("usersList", JSON.stringify(updatedUsersList));

  li.remove();
}

function edit(data) {
  const username = document.querySelector("#username");

  const email = document.querySelector("#email");

  const phone = document.querySelector("#phone");

  username.value = data.username;

  email.value = data.email;

  phone.value = data.phone;

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

  li.firstChild.textContent = Object.values(userDetails).join(" ");

  sessionStorage.removeItem("editId");
}

// module.exports = handleSubmit;
//
