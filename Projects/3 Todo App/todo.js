let todoList = [
  { item: "buy milk", dueDate: "12/04/2024" },
  { item: "deepak", dueDate: "12/04/2024" },
];

displayItems();
function addTodo() {
  let inputElement = document.querySelector("#todo-input");
  let inputDate = document.querySelector("#todo-date");
  let todoItem = inputElement.value;
  let todoDate = inputDate.value;

  console.log(todoItem);
  todoList.push({ item: todoItem, dueDate: todoDate });

  inputElement.value = "";
  inputElement.value = "";
  if (todoList.keys != undefined) displayItems();
}

function displayItems() {
  let containerElement = document.querySelector(".todo-container");
  let newHtml = "";

  for (let i = 0; i < todoList.length; i++) {
    // let todoItem = todoList[i].item;
    // let dueDate = todoList[i].dueDate;
    let { item, dueDate } = todoList[i];
    newHtml += `
      <div class = "parent">
      <div>${item}</div>
      <div>${dueDate}</div>
      <div><button class='btn-delete' onclick="deleteTodo(${i})";>Delete
      </button>
      </div>
      </div>
      `;
  }
  containerElement.innerHTML = newHtml;
}

function deleteTodo(index) {
  todoList.splice(index, 1);
  displayItems();
}

displayItems();
