export class TodoList {
    constructor() {
      this.tasks = [];
    }
  
    addTask(task) {
      this.tasks.push({ task, completed: false });
    }
  
    markTaskAsCompleted(taskName) {
      const task = this.tasks.find(t => t.task === taskName); 
      if (task) task.completed = true;
    }
  
    listTasks() {
      return this.tasks.map(t => `${t.task}: ${t.completed ? 'Done' : 'Pending'}`).join("\n"); // Форматируем список задач
    }
  }
  