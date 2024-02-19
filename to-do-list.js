const tasks = [];

const addTask = (title, description, priority, category) =>
  tasks.push({
    title: title,
    description: description,
    priority: priority,
    category: category,
  });

const editTask = (id, title, description, priority, category) => {
  const task = getTask(id);
  if (task) {
    task.title = title;
    task.description = description;
    task.priority = priority;
    task.category = category;
  }
};

const deleteTask = (id) => tasks.splice(id, 1);
const listTasks = () => {};
const getTask = (id) => tasks.find((task) => tasks.indexOf(task) === id);

do {
  var action = Number(
    prompt(
      `
            Lista de Tarefas
    
            1 - Adicionar uma tarefa
            2 - Editar uma tarefa
            3 - Remover uma tarefa
            4 - Listar tarefas
            5 - Buscar tarefa
            0 - Sair
    
            O que deseja fazer?
            `
    )
  );

  if (action < 1 || action > 5) alert("Digite uma opção válida!");
} while (action !== 0);
