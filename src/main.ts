import "./style.scss"
import { Task } from "./models/Task";
import { addTask } from "./localStorage";
import { createHTML, renderTasks } from "./HMLHelpers";

document.getElementById("formy")?.addEventListener("submit", (e) => {
  e.preventDefault();
  const userInput = (document.getElementById("textField") as HTMLInputElement)?.value;
  const newTask = new Task(userInput, false);

  addTask(newTask);
  createHTML(newTask);

  (document.getElementById("formy") as HTMLFormElement).reset();
});

renderTasks();