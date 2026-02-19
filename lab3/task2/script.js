const todoForm = document.getElementById('todoForm');
const taskInput = document.getElementById('taskInput');
const todoList = document.getElementById('todoList');

function createTodoItem(text) { 
      const li = document.createElement('li');
      li.className = 'item';
 
      const left = document.createElement('div');
      left.className = 'left';
 
      const checkbox = document.createElement('input');
      checkbox.type = 'checkbox';
 
      const span = document.createElement('span');
      span.className = 'text';
      span.textContent = text;
 
      const deleteBtn = document.createElement('button');
      deleteBtn.type = 'button';
      deleteBtn.className = 'delete-btn';
      deleteBtn.setAttribute('aria-label', 'Delete task');
      deleteBtn.textContent = '🗑';
 
      checkbox.addEventListener('change', () => {
        li.classList.toggle('done', checkbox.checked);
      });

      deleteBtn.addEventListener('click', () => {
        
        todoList.removeChild(li);
      });
 
      left.appendChild(checkbox);
      left.appendChild(span);

      li.appendChild(left);
      li.appendChild(deleteBtn);

      return li;
    }

    todoForm.addEventListener('submit', (event) => {

      event.preventDefault();

      const text = taskInput.value.trim();
      
      if (!text) {
        return;
      };

      const item = createTodoItem(text);
      todoList.appendChild(item);

      taskInput.value = '';
      taskInput.focus();

    });

    ['First item', 'Second item', 'Third item'].forEach((t, i) => {
      const item = createTodoItem(t);
      if (i === 0) {
        const checkbox = item.querySelector('input[type="checkbox"]');
        checkbox.checked = true;
        item.classList.add('done');
      }
      todoList.appendChild(item);

    });