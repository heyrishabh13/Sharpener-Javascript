// Write your code below:
window.addEventListener("DOMContentLoaded", () => {
  axios
    .get(
      "https://crudcrud.com/api/94694dc5bd584df094ff21580a444483/appointmentData"
    )
    .then((res) => {
      for (let item of res.data) {
        display(item);
      }
    })
    .catch((err) => {
      console.log(err);
    });

  sessionStorage.removeItem("editId");
});

function handleFormSubmit(event) {
  event.preventDefault();

  const obj = {
    username: event.target.username.value,
    email: event.target.email.value,
    phone: event.target.phone.value,
  };

  const editId = sessionStorage.getItem("editId");

  if (editId) {
    axios
      .put(
        "https://crudcrud.com/api/94694dc5bd584df094ff21580a444483/appointmentData" +
          "/" +
          editId,
        obj
      )
      .then((res) => {
        console.log(res);
        update(editId, obj);
      })
      .catch((err) => console.log(err));
  } else {
    axios
      .post(
        "https://crudcrud.com/api/94694dc5bd584df094ff21580a444483/appointmentData/",
        obj
      )
      .then((res) => {
        console.log(res.data);
        display(res.data);
      })
      .catch((err) => {
        console.log(err);
      });
  }
}

function display(data) {
  const ul = document.querySelector("ul");
  const li = document.createElement("li");

  li.textContent =
    data.username + " - " + data.email + " - " + data.phone + " ";

  li.id = data._id;

  ul.appendChild(li);

  const deleteBtn = document.createElement("button");
  deleteBtn.textContent = "Delete";
  deleteBtn.addEventListener("click", () => deleteData(data._id, li));
  li.appendChild(deleteBtn);

  const editBtn = document.createElement("button");
  editBtn.textContent = "Edit";
  editBtn.addEventListener("click", () => editData(data));
  li.appendChild(editBtn);
}

function deleteData(id, li) {
  axios
    .delete(
      "https://crudcrud.com/api/94694dc5bd584df094ff21580a444483/appointmentData" +
        "/" +
        id
    )
    .then((res) => {
      console.log(res);
    })
    .catch((err) => console.log(err));

  li.remove();
}

function editData(data) {
  const usernameInput = document.getElementById("username");
  const emailInput = document.getElementById("email");
  const phoneInput = document.getElementById("phone");

  usernameInput.value = data.username;
  emailInput.value = data.email;
  phoneInput.value = data.phone;

  sessionStorage.setItem("editId", data._id);
}

function update(id, obj) {
  const li = document.getElementById(id);

  li.firstChild.textContent =
    obj.username + " - " + obj.email + " - " + obj.phone + " ";
  sessionStorage.removeItem("editId");
}

// Do not touch the code below
// module.exports = handleFormSubmit;
