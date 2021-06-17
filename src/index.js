
document.addEventListener("DOMContentLoaded", () => {
  // Selectors
});

const taskForm = document.getElementById("create-task-form");
const userInput = document.getElementById("new-task-description");
const dueDate = document.getElementById("due-date");
const submitButton = document.getElementById("submitForm");

const priorityLevel = document.getElementById("dropdown");
const listM = document.getElementById("listM");
const listH = document.getElementById("listH");
const listL = document.getElementById("listL");


// Functions
// adding todo to list
function addTodo(event) {
  event.preventDefault();
  
  const todoDiv = document.createElement("div")
  todoDiv.classList.add("todo")
  const newTodo = document.createElement("li");
  newTodo.classList.add("todo-item")
  newTodo.contentEditable = "true";
  const divider = " - due: "
  newTodo.innerText = userInput.value+divider+dueDate.value
  todoDiv.appendChild(newTodo)


  const level = priorityLevel.options[priorityLevel.selectedIndex].value

  //buttons
    //checkButton
    const completedButton = document.createElement("button")
    completedButton.innerHTML = '<i class="fas fa-check"></i>'
    completedButton.classList.add("icon")
    completedButton.setAttribute("id", "check-button")
    todoDiv.appendChild(completedButton)
    completedButton.addEventListener("click", (event) => todoDiv.classList.toggle("completed"));

    //editButton
    const editButton = document.createElement("button")
    editButton.innerHTML = '<i class="fas fa-edit"></i>'
    editButton.classList.add("icon")
    editButton.setAttribute("id", "edit-button")
    todoDiv.appendChild(editButton)
    //editButton.addEventListener("click", )

    //deleteButton
    const deleteButton = document.createElement("button")
    deleteButton.innerHTML = '<i class="fas fa-trash"></i>'
    deleteButton.classList.add("icon")
    deleteButton.setAttribute("id", "delete-button")
    todoDiv.appendChild(deleteButton)
    deleteButton.addEventListener("click", (event) => todoDiv.remove())
    

  // changing color/sorting based on priority level
  if (level === "medium") {
    listM.appendChild(todoDiv)
    todoDiv.style.color = "#e6b800"
  } else if(level === "high"){
    listH.appendChild(todoDiv)
    todoDiv.style.color = "red"
  } else if (level === "low") {
    listL.appendChild(todoDiv)
    todoDiv.style.color = "green"
  }

userInput.value = "";
dueDate.value = "";



}


// Event Listeners
//when button clicked, add new todo to list
submitButton.addEventListener("click", addTodo)


