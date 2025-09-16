document.addEventListener("DOMContentLoaded", initialize);

function initialize() {
  const list = JSON.parse(localStorage.getItem("trackerList")) || [];

  for (let item of list) {
    display(item);
  }

  sessionStorage.removeItem(editId);
}

function handleFormSubmit(event) {
  event.preventDefault();

  const amount = event.target.amount.value;
  const description = event.target.description.value;
  const category = event.target.category.value;

  const obj = {
    amount,
    description,
    category,
  };

  const list = JSON.parse(localStorage.getItem("trackerList")) || [];

  const editId = sessionStorage.getItem("editId");

  if (editId) {
    update(editId, list, obj);
  } else {
    addData(list, obj);
  }
  event.target.reset();

  localStorage.setItem("trackerList", JSON.stringify(list));
}

function addData(list, data) {
  data.id = Date.now();
  list.push(data);
  display(data);
}

function display(data) {
  const ul = document.querySelector("ul");
  const li = document.createElement("li");

  li.id = data.id;
  li.textContent =
    data.amount + " - " + data.description + " - " + data.category + " ";

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

function deleteData(id, li) {
  const list = JSON.parse(localStorage.getItem("trackerList")) || [];

  const updatedList = [];

  for (let i = 0; i < list.length; i++) {
    if (list[i].id !== id) {
      updatedList.push(list[i]);
    }
  }

  localStorage.setItem("trackerList", JSON.stringify(updatedList));

  li.remove();
}

function editData(data) {
  const expenseInput = document.getElementById("amount");
  const descriptionInput = document.getElementById("description");
  const categoryInput = document.getElementById("category");

  expenseInput.value = data.amount;
  descriptionInput.value = data.description;
  categoryInput.value = data.category;

  sessionStorage.setItem("editId", data.id);
}

function update(editId, list, obj) {
  for (let item of list) {
    if (item.id == editId) {
      item.amount = obj.amount;
      item.description = obj.description;
      item.category = obj.category;
    }
  }

  const li = document.getElementById(editId);
  li.firstChild.textContent =
    obj.amount + " - " + obj.description + " - " + obj.category + " ";

  sessionStorage.removeItem("editId");
}
