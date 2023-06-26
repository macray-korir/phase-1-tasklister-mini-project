document.addEventListener('DOMContentLoaded', () => {
  let form = document.querySelector('form');
  let todoText = document.querySelector('#todo-text');
  let todosList = document.querySelector('#todos-list');

  fetch('http://localhost:3000/todos')
    .then(res => res.json())
    .then(data => {
      data.forEach(todo => {
        let listItem = document.createElement('li');
        listItem.textContent = todo.title;
        todosList.appendChild(listItem);
      });
    });
 
  form.addEventListener('submit', (e) => {
    e.preventDefault();
    let newTodo = todoText.value;
    let listItem = document.createElement('li');
    listItem.textContent = newTodo;

    todosList.appendChild(listItem);

    e.target.reset();
  });

});
