import { render } from "./render";
import { allProjects } from "./project-class";
import { renderProjects } from "./dom";

const init = () => {
  //allProjects = JSON.parse(localStorage.getItem("allProjects"))
  render();
  renderProjects();
};

init();
