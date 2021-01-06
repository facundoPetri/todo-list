import { modalProject } from "./modal";

const render = () => {
  const content = document.querySelector("#content");

  const projects = document.createElement("div");
  projects.setAttribute("id", "projects");

  const projectsHeading = document.createElement("h1");
  projectsHeading.textContent = "Projects";

  const projectsButton = document.createElement("button");
  projectsButton.setAttribute("class", "add")
  projectsButton.addEventListener("click", (e) => content.appendChild(modalProject()));
  projectsButton.textContent = "+";

  projects.append(projectsHeading, projectsButton);

  const todos = document.createElement("div");
  todos.setAttribute("id", "todos");

  const todosHeading = document.createElement("h1");
  todosHeading.textContent = "To Do";

  todos.append(todosHeading);

  const div1 = document.createElement("div")
  div1.setAttribute("class", "headings-projects")

  const spanAdd = document.createElement("span")
  spanAdd.textContent = "Add"

  const spanDel = document.createElement("span")
  spanDel.textContent = "Delete"

  const spanTitle2 = document.createElement("span")
  spanTitle2.textContent = "Title"

  const div2 = document.createElement("div")
  div2.setAttribute("class", "headings-todo")

  const spanTitle = document.createElement("span")
  spanTitle.textContent = "Title"

  const spanDesc = document.createElement("span")
  spanDesc.textContent = "Description"

  const spanDuedate = document.createElement("span")
  spanDuedate.textContent = "Due Date"

  const spanPriority = document.createElement("span")
  spanPriority.textContent = "Priority"

  const spanDelete = document.createElement("span")
  spanDelete.textContent = "Delete"

  div1.append(spanTitle2, spanAdd, spanDel)
  div2.append(spanTitle, spanDesc, spanDuedate, spanDuedate, spanPriority, spanDelete)

  todos.appendChild(div2)
  projects.appendChild(div1)

  content.append(projects, todos);
};

export { render };
