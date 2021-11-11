let todoArray = [];

function createApptitle(title) {
  let appTitle = document.createElement('h2');
  appTitle.innerHTML = title;
  return appTitle;
}

function createTodoItemForm() {
  let form = document.createElement('form');
  let input = document.createElement('input');
  let buttonWrapper = document.createElement('div');
  let button = document.createElement('button');

  button.disabled = !input.value.length;

  input.addEventListener('input', () => {
    button.disabled = !input.value.length;
  })

  form.classList.add('input-group', 'mb-3');
  input.classList.add('form-control');
  input.placeholder = 'Введите название нового дела';
  buttonWrapper.classList.add('input-group-append');
  button.classList.add('btn', 'btn-primary');
  button.textContent = 'Добавить дело';
  button.disabled = true;

  buttonWrapper.append(button);
  form.append(input);
  form.append(buttonWrapper);

  return {
    form,
    input,
    button,
    buttonWrapper,
  };
}

function createTodoList() {
  let list = document.createElement('ul');
  list.classList.add('list-group');
  return list;
}

function createTodoItem(name) {
  let item = document.createElement('li');
  let buttonGroup = document.createElement('div');
  let doneButton = document.createElement('button');
  let deleteButton = document.createElement('button');

  let randomId = Math.random() * 15.75;
  item.id = randomId.toFixed(2);

  item.classList.add('list-group-item', 'd-flex', 'justify-content-between', 'align-items-center');
  item.textContent = name;
  buttonGroup.classList.add('btn-group', 'btn-group-sm');
  doneButton.classList.add('btn', 'btn-success');
  doneButton.textContent = 'Готово';
  deleteButton.classList.add('btn', 'btn-danger');
  deleteButton.textContent = 'Удалить';

  buttonGroup.append(doneButton, deleteButton);
  item.append(buttonGroup);

  return {
    item,
    doneButton,
    deleteButton,
    buttonGroup,
  }
}

let changeItemDone = (arr, item) => {
  arr.map(obj => {
    if (obj.id === item.id & obj.done === true) {
      obj.done = false;
    } else if (obj.id === item.id & obj.done === false) {
      obj.done = true;
    }
  });
}

let completeTodoItem = (item, btn) => {
  btn.addEventListener('click', () => {
    todoArray = JSON.parse(localStorage.getItem(key));
    item.classList.toggle('list-group-item-success')
    changeItemDone(todoArray, item);
    localStorage.setItem(key, JSON.stringify(todoArray));
  });
};

let deleteTodoItem = (item, btn) => {
  btn.addEventListener('click', function() {
    if (confirm('Вы уверены?')) {
      todoArray = JSON.parse(localStorage.getItem(key));
      let newList = todoArray.filter(obj => obj.id !== item.id);
      localStorage.setItem(key, JSON.stringify(newList));
      item.remove();
    }
  });
};

function createTodoApp(container, title = 'Список дел', key) {
  let todoAppTitle = createApptitle(title);
  let todoItemForm = createTodoItemForm();
  let todoList = createTodoList();

  container.append(todoAppTitle, todoItemForm.form, todoList);


  if (localStorage.getItem(key)) {
    todoArray = JSON.parse(localStorage.getItem(key));

    for (let obj of todoArray) {
      let todoItem = createTodoItem(todoItemForm.input.value);

      todoItem.item.textContent = obj.name;
      todoItem.item.id = obj.id;

      if (obj.done == true) {
        todoItem.item.classList.add('list-group-item-success');
      } else {
        todoItem.item.classList.remove('list-group-item-success');
      }

      completeTodoItem(todoItem.item, todoItem.doneButton);
      deleteTodoItem(todoItem.item, todoItem.deleteButton);

      todoList.append(todoItem.item);
      todoItem.item.append(todoItem.buttonGroup);
    }
  }

  todoItemForm.form.addEventListener('submit', function(e) {
    e.preventDefault();

    let todoItem = createTodoItem(todoItemForm.input.value);

    if (!todoItemForm.input.value) {
      return
    }

    completeTodoItem(todoItem.item, todoItem.doneButton);
    deleteTodoItem(todoItem.item, todoItem.deleteButton);

    let localStorageData = localStorage.getItem(key);

    if (localStorageData == null) {
      todoArray = [];
    } else {
      todoArray = JSON.parse(localStorageData);
    }

    let createItemObj = (arr) => {
      let itemObj = {};
      itemObj.name = todoItemForm.input.value;
      itemObj.id = todoItem.item.id;
      itemObj.done = false;

      arr.push(itemObj);
    }

    createItemObj(todoArray);
    localStorage.setItem(key, JSON.stringify(todoArray));

    todoList.append(todoItem.item);
    todoItemForm.input.value = '';
    todoItemForm.button.disabled = true;
  });
}
