function todoList() {
    const todos = [];

    function addTodo(todo) {
        todos.push(todo);
        console.log("Added: " + todo);
    }

    function showTodos() {
        console.log("To-Do List:");
        todos.forEach((todo, index) => console.log(`${index + 1}: ${todo}`));
    }

    addTodo(prompt("Enter a to-do item:"));
    addTodo(prompt("Enter another to-do item:"));
    showTodos();
}

todoList();
