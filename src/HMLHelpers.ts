import { Task } from "./models/Task";
import { storedTasks } from "./localStorage";

export const createHTML = (task: Task) => {
    const li = document.createElement("li");
    const checkbox = document.createElement("input");
    const paragraph = document.createElement("p");
    const deleteButton = document.createElement("button");
  
    li.draggable = true;
    checkbox.type = "checkbox";
    paragraph.innerHTML = task.text;
    deleteButton.innerHTML = "x";
  
    if (task.isDone) {
      document.getElementById("done-list")?.appendChild(li);
      checkbox.checked = true;
      } else {
        document.getElementById("to-do-list")?.appendChild(li);
      }

    li.append(checkbox, paragraph, deleteButton);
  
    checkbox.addEventListener("click", () => {
      renderTasks();
    });

    deleteButton.addEventListener("click", () => {
      for (let i = 0; i < storedTasks.length; i++) {
        if (task === storedTasks[i]) {
          storedTasks.splice(i, 1);
          localStorage.setItem("Task", JSON.stringify(storedTasks));
          break;
        }
      }
      renderTasks();
    });
    
};

export const renderTasks = () => {
  const a = (document.getElementById("to-do-list") as HTMLElement);
  const b = (document.getElementById("done-list") as HTMLElement);
    if (a && b) {
      a.innerHTML = "";
      b.innerHTML = "";
    }
    localStorage.getItem("Task");
    storedTasks.forEach(task => {
        createHTML(task); 
    });
}