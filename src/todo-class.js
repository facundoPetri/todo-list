import { format, parseISO } from "date-fns";

class Todo {
  constructor(title, desc, dueDate, priority) {
    this.title = title;
    this.desc = desc;
    this.dueDate = format(parseISO(dueDate), "'Vence' P");
    this.priority = parseInt(priority);
  }
}

export { Todo };
