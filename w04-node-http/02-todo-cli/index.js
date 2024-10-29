const fs = require('fs');
const { Command } = require('commander');
const program = new Command();
const path = './todos.json';

const loadTodos = () => {
  try {
    const data = fs.readFileSync(path, 'utf8');
    return JSON.parse(data);
  } catch (err) {
    return [];
  }
};

const saveTodos = (todos) => {
  fs.writeFileSync(path, JSON.stringify(todos, null, 2));
};



program
  .name('todo-cli')
  .description('CLI to manage your todo list')
  .version('1.0.0');

program
  .command('add')
  .description('Add a new todo')
  .argument('<task>', 'The task to add')
  .action((task) => {
    const todos = loadTodos();
    todos.push({ task, done: false });
    saveTodos(todos);
    console.log(`Added: "${task}"`);
  });

program
  .command('delete')
  .description('Delete a todo')
  .argument('<index>', 'Index of the todo to delete')
  .action((index) => {
    const todos = loadTodos();
    if (index < 1 || index > todos.length) {
      console.log('Invalid index');
      return;
    }
    const [deleted] = todos.splice(index - 1, 1);
    saveTodos(todos);
    console.log(`Deleted: "${deleted.task}"`);
  });

program
  .command('done')
  .description('Mark a todo as done')
  .argument('<index>', 'Index of the todo to mark as done')
  .action((index) => {
    const todos = loadTodos();
    if (index < 1 || index > todos.length) {
      console.log('Invalid index');
      return;
    }
    todos[index - 1].done = true;
    saveTodos(todos);
    console.log(`Marked as done: "${todos[index - 1].task}"`);
  });

program
  .command('list')
  .description('List all todos')
  .action(() => {
    const todos = loadTodos();
    if (todos.length === 0) {
      console.log('No todos found.');
      return;
    }
    todos.forEach((todo, index) => {
      const status = todo.done ? '[Done]' : '[Pending]';
      console.log(`${index + 1}. ${status} ${todo.task}`);
    });
  });

program.parse();
