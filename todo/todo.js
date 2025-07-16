window.addEventListener('DOMContentLoaded', () => {
    // Initialize the todo list
    /*if (!document.getElementById('todo-list')) {
      console.error('Todo list element not found!');
      return;
    }*/

    // Add event listeners for adding tasks
    const form = document.getElementById('todo-form');
    const input = document.getElementById('todo-input');
    const list = document.getElementById('todo-list');

    let todos = [];

    // Load saved tasks on page load
    const saved = localStorage.getItem('todos');
    console.log('Saved todos:', saved);
    if (saved) {
      todos = JSON.parse(saved);
      console.log('Parsed todos:', todos);
      for(task of todos){ 
        createTask(task.text, task.done)
        };
    }

    // ✅ Create and display a task
    function createTask(taskText, isDone = false) {
      const li = document.createElement('li');
      li.textContent = taskText;

      if (isDone) li.classList.add('done');

      li.addEventListener('click', () => {
        li.classList.toggle('done');
        updateLocalStorage();
      });

      li.addEventListener('contextmenu', (e) => {
        e.preventDefault();
        li.remove();
        todos = todos.filter(todo => todo.text !== taskText);
        updateLocalStorage();
      });

      list.appendChild(li);
    }

    // ✅ Handle form submissiolocalStoragen
    form.addEventListener('submit', function (e) {
      e.preventDefault();
      const task = input.value.trim();
      if (task === '') return;

      todos.push({ text: task, done: false });
      createTask(task);
      updateLocalStorage();
      input.value = '';
    });

    // ✅ Save tasks to localStorage
    function updateLocalStorage() {
      const updated = [];
      document.querySelectorAll('#todo-list li').forEach(li => {
        updated.push({
          text: li.textContent,
          done: li.classList.contains('done')
        });
      });
      todos = updated;
      localStorage.setItem('todos', JSON.stringify(todos));
    }

});