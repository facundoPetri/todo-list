import { Todo } from "./todo-class";

class Project {
  constructor(title) {
    this.title = title;
    this.todoList = [];
  }
  get getTodoList() {
    return this.todoList;
  }
  addTodo(title, desc, dueDate, priority) {
    const newTodo = new Todo(title, desc, dueDate, priority);
    this.todoList.push(newTodo);
  }
  removeTodo(index) {
    this.todoList.splice(index, 1)
  }
}

let allProjects = [];

createProject("Default");

function createProject(title) {
  const newProject = new Project(title);
  newProject.addTodo("Prueba", "Prueba 1", "2021-01-29", 2)
  allProjects.push(newProject);
  //save(allProjects)
}

function save(allProjects) {
  localStorage.setItem("allProjects", JSON.stringify(allProjects));
}

export { Project, allProjects, createProject, save };
