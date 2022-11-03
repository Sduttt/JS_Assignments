let add = document.querySelector(".addButton")
let todolist = document.querySelector(".container")
let newTodo = document.querySelector(".input")
let updateButton = document.querySelector(".updateButton")

add.addEventListener("click", () => {


    let item = document.createElement('div');
    item.className = "item";
    let item_input = document.createElement('div');
    item_input.className = "item_input"
    let editButton = document.createElement('div');
    editButton.className = "editButton"
    let deleteButton = document.createElement('div')
    deleteButton.className = "deleteButton"

    item.appendChild(item_input)
    item.appendChild(editButton)
    item.appendChild(deleteButton)
    todolist.appendChild(item)
    item_input.textContent = newTodo.value;
    editButton.textContent = "EDIT"
    deleteButton.textContent = "DELETE"
    item.style.display = "flex"
    newTodo.value = ""

    editButton.addEventListener("click", () => {
        newTodo.value = item_input.textContent;
        editButton.parentNode.remove();

    })

    deleteButton.addEventListener("click", () => {
        deleteButton.parentNode.remove()
    })
})
