//Variables defined 

const form = document.getElementById('form');
const input = document.getElementById('input');
const todosUL = document.getElementById('todos');

//Parse the elements stringify into JSON
const todos = JSON.parse(localStorage.getItem('todos'));

if (todos) {
    todos.forEach(todo => addTodo(todo));
}

//Add a submit event to the form
form.addEventListener('submit', (e) => {
    //Prevent default submit
    e.preventDefault();

    addTodo()
})


//function for add todo element
function addTodo(todo) {
    let todoText = input.value

    if (todo) {
        todoText = todo.text
    }

    if (todoText) {
        //Create a new li element 
        const todoEl = document.createElement('li');

        if (todo && todo.completed) {
            //Add completed class to the todo element 
            todoEl.classList.add('completed');

        }

        todoEl.innerText = todoText

        todoEl.addEventListener('click', () => {

            //update the todo element's completed
            todoEl.classList.toggle('completed')
            
            //Update the localStorage for the completed state
            updateLS();
        });

        todoEl.addEventListener('contextmenu', (e) => {
            //Remove the todo element
            e.preventDefault();

            todoEl.remove();

            //Update the localStorage for remove
            updateLS();
        });


        todosUL.appendChild(todoEl);

        input.value = ''

        //Update the localStorage for add 
        updateLS()

    }
}

//Function for updating the localStorage
function updateLS() {
    todosEl = document.querySelectorAll('li')

    const todos = []

    //Update all of the todos elements
    todosEl.forEach((todoEl) => {

        //push todos set to localStorage
        todos.push({
            text: todoEl.innerText,

            //Update completed class 
            completed: todoEl.classList.contains('completed')
        })

    })

    localStorage.setItem('todos', JSON.stringify(todos))


}

