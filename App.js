

const todoLists = document.querySelector(".todoLists");
const listValue = document.querySelector(".todoValue");
let todoListValue = [];

const getTodoListFromLS = () => {
    return JSON.parse(localStorage.getItem("todoYoutube")) || [];
}

const addTodoListLocalStorage = (todo) => {
    return localStorage.setItem("todoYoutube", JSON.stringify(todo))
}

const showTodoList = () => {
    todoListValue = getTodoListFromLS();
    todoListValue.forEach((curTodo) => {
        
        const liElement = document.createElement("li");
        liElement.innerHTML = curTodo;
        todoLists.append(liElement);
    });
}


const removeTodoList = (e) => {
    console.log(e.target.textContent);
    let currentTodo = e.target;
    console.log(todoListValue);

    updatedTodoList = todoListValue.filter((curTodoValue) => curTodoValue != currentTodo.textContent);

    addTodoListLocalStorage(updatedTodoList);
    currentTodo.remove();
    console.log(updatedTodoList);
}




const addTodoList = (e) => {

    e.preventDefault();
    todoListValue = getTodoListFromLS();
    let newTodo = listValue.value.trim();

    listValue.value = "";

    if (newTodo.length != 0 && !todoListValue.includes(newTodo)) {
        console.log(typeof todoListValue); 
        todoListValue.push(newTodo);
        todoListValue = [...new Set(todoListValue)];

        addTodoListLocalStorage(todoListValue);

        const liElement = document.createElement("li");
        liElement.innerHTML = newTodo;
        todoLists.append(liElement);
    }

};

showTodoList();

document.querySelector(".btn").addEventListener("click", (e) => {
    addTodoList(e);
})

todoLists.addEventListener("click", (e) => removeTodoList(e));