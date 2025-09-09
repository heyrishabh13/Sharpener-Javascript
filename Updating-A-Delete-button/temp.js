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

userDetails.id = Date.now();

usersList.push(userDetails);

display(userDetails);


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

// module.exports = handleFormSubmit;