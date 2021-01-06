import { renderProjects } from "./dom";
import { createProject } from "./project-class";

const modalProject = () => {
  const modalDiv = document.createElement("div");
  modalDiv.setAttribute("id", "myModal");
  modalDiv.setAttribute("class", "modal");

  const modalContent = document.createElement("div");
  modalContent.setAttribute("class", "modal-content");

  const span = document.createElement("span");
  span.setAttribute("class", "close");
  span.innerHTML = "&times;";

  const h = document.createElement("h2");
  h.textContent = "Add new Project";

  const label = document.createElement("label");
  label.textContent = "Project name:  ";

  const input = document.createElement("input");

  const button = document.createElement("button");
  button.setAttribute("class", "addProject");
  button.textContent = "Add";
  button.onclick = () => {
    if (input.value && input.value.length < 16) createProject(input.value);

    renderProjects();
    modalDiv.style.display = "none";
  };
  modalContent.append(span, h, label, input, button);

  modalDiv.appendChild(modalContent);

  span.onclick = function () {
    modalDiv.style.display = "none";
  };

  modalDiv.style.display = "block";
  return modalDiv;
};

const modalTodo = (project) => {
  const modalDiv = document.createElement("div");
  modalDiv.setAttribute("id", "myModal");
  modalDiv.setAttribute("class", "modal");

  const modalContent = document.createElement("div");
  modalContent.setAttribute("class", "modal-content");

  const span = document.createElement("span");
  span.setAttribute("class", "close");
  span.innerHTML = "&times;";

  const h = document.createElement("h2");
  h.textContent = "Add new To Do";

  const labelTodo = document.createElement("label");
  labelTodo.textContent = "To Do:";
  const inputTodo = document.createElement("input");

  const labelDesc = document.createElement("label");
  labelDesc.textContent = "Description:";
  const inputDesc = document.createElement("input");

  const labelDate = document.createElement("label");
  labelDate.textContent = "Due-Date:";
  const inputDate = document.createElement("input");
  inputDate.setAttribute("type", "date");

  const labelPriority = document.createElement("label");
  labelPriority.textContent = "Priority:";
  const inputPriority = document.createElement("input");
  inputPriority.setAttribute("type", "range");
  inputPriority.setAttribute("max", "4");

  const button = document.createElement("button");
  button.setAttribute("class", "addProject");
  button.textContent = "Add";
  button.onclick = () => {
    if (inputTodo.value && inputDesc.value && inputDate.value)
      project.addTodo(
        inputTodo.value,
        inputDesc.value,
        inputDate.value,
        inputPriority.value
      );
      renderProjects()
      modalDiv.style.display = "none";
  };
  modalContent.append(
    span,
    h,
    labelTodo,
    inputTodo,
    labelDesc,
    inputDesc,
    labelDate,
    inputDate,
    labelPriority,
    inputPriority,
    button
  );

  modalDiv.appendChild(modalContent);

  span.onclick = () => {
    modalDiv.style.display = "none";
  };

  modalDiv.style.display = "block";
  return modalDiv;
};

export { modalProject, modalTodo };
