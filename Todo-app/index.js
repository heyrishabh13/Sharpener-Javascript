function handleFormSubmit(event) {
  event.preventDefault();

  const obj = {
    title: event.target.title.value,
    description: event.target.description.value,
    isDone: false,
  };

  axios
    .post("https://crudcrud.com/api/037ca0b30c28417f9e362fdef9a97b22/todo", obj)
    .then((res) => {
      displayPendingTasks(res.data);
    })
    .catch((err) => {
      console.log(err);
    });
}

function displayPendingTasks(data) {
  const ul = document.getElementById("pendingTasks");
  const li = document.createElement("li");

  li.id = data._id;

  ul.appendChild(li);

  li.textContent = data.title + " - " + data.description + " ";

  const checkbox = document.createElement("input");
  checkbox.type = "checkbox";
  checkbox.addEventListener("change", () => checkedTodo(data, li));
  li.appendChild(checkbox);

  const deleteBtn = document.createElement("button");
  deleteBtn.textContent = "Delete";
  deleteBtn.addEventListener("click", () => deleteTodo(data._id, li));
  li.appendChild(deleteBtn);
}

function checkedTodo(data, li) {
  const newData = {
    title: data.title,
    description: data.description,
    isDone: true,
  };

  axios
    .put(
      "https://crudcrud.com/api/037ca0b30c28417f9e362fdef9a97b22/todo" +
        "/" +
        data._id,
      newData
    )
    .then((result) => {
      console.log(result);
      displayCompletedTasks(newData);
      li.remove();
    })
    .catch((err) => {
      console.log(err);
    });
}

function displayCompletedTasks(data) {
  const ul = document.getElementById("completedTasks");
  const li = document.createElement("li");
  li.textContent = data.title + " - " + data.description + " ";

  ul.appendChild(li);
}

function deleteTodo(id, li) {
  axios
    .delete(
      "https://crudcrud.com/api/037ca0b30c28417f9e362fdef9a97b22/todo" +
        "/" +
        id
    )
    .then((res) => console.log(res))
    .catch((err) => console.log(err));

  li.remove();
}
