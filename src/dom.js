import { allProjects } from "./project-class";
import { modalTodo } from "./modal";

let indextodo;

const renderProjects = () => {
  const allP = document.querySelectorAll(".project-item");
  allP.forEach((pr) => pr.remove());

  allProjects.forEach((project) => {
    draw(project);
  });
};

const drawtodo = (todos) => {
  const todosDiv = document.querySelector("#todos");

  const allT = document.querySelectorAll(".todo-item");
  allT.forEach((t) => t.remove());

  todos.forEach((todo) => {
    const div = document.createElement("div");
    div.setAttribute("class", "todo-item");

    const title = document.createElement("h4");
    title.textContent = todo.title;

    const desc = document.createElement("p");
    desc.textContent = todo.desc;

    const dueDate = document.createElement("p");
    dueDate.textContent = todo.dueDate;

    const priority = document.createElement("input");
    priority.setAttribute("type", "range");
    priority.setAttribute("readonly", "true");

    const deleteTodo = document.createElement("span");
    deleteTodo.setAttribute("class", "delete-project");
    deleteTodo.innerHTML = "&times;";
    deleteTodo.onclick = () => {
      const index = [...div.parentElement.children].indexOf(div) - 2;

      // ...
      allProjects[indextodo].removeTodo(index);
      // ...
      renderProjects();
    };

    div.append(title, desc, dueDate, priority, deleteTodo);
    todosDiv.appendChild(div);
  });
};

const draw = (project) => {
  const projectDiv = document.querySelector("#projects");

  const div = document.createElement("div");
  div.setAttribute("class", "project-item");

  div.onclick = () => {
    const allT = document.querySelectorAll(".todo-item");
    allT.forEach((t) => t.remove());
    const index = [...div.parentElement.children].indexOf(div) - 3;
    indextodo = index;
    drawtodo(allProjects[index].getTodoList);
  };

  const title = document.createElement("p");
  title.textContent = project.title;

  const deleteProjectButton = document.createElement("span");
  deleteProjectButton.setAttribute("class", "delete-project");
  deleteProjectButton.innerHTML = "&times;";
  deleteProjectButton.onclick = () => {
    const index = [...div.parentElement.children].indexOf(div) - 3;
    // ...
    allProjects.splice(index, 1);
    // ...
    renderProjects();
  };

  const addTodoButton = document.createElement("span");
  addTodoButton.setAttribute("class", "add-todo");
  addTodoButton.innerHTML = "+";
  addTodoButton.onclick = () => {
    content.appendChild(modalTodo(project));
  };

  div.append(title, deleteProjectButton, addTodoButton);

  projectDiv.appendChild(div);
};

export { renderProjects };
