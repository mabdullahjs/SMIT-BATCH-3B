// CRUD

// create
// read
// update
// delete

const input = document.querySelector("#input");
const ol = document.querySelector("#ol");

const allTodos = [];

function renderTodo() {
  ol.innerHTML = "";
  for (let i = 0; i < allTodos.length; i++) {
    ol.innerHTML += `<li>${allTodos[i]}
        <button onclick="deleteTodo(${i})">delete</button>
        <button onclick="editTodo(${i})">edit</button>
        </li>`;
  }
}
function addTodo() {
  allTodos.push(input.value);

  renderTodo();
  input.value = "";
}

function deleteTodo(index) {
  console.log("todo deleted", index);
  allTodos.splice(index, 1);
  renderTodo();
}
function editTodo(index) {
  console.log("todo edited", index);
  const updatedVal = prompt("enter updated value", allTodos[index]);
  //   allTodos.splice(index , 1 , updatedVal)
  allTodos[index] = updatedVal

  renderTodo()
}
