import { Task } from "./models/Task";
import { loadTasks, storedTasks } from "./localStorage";

export const createHTML = (task: Task) => {
    const li = document.createElement("li");
    const checkbox = document.createElement("input");
    const paragraph = document.createElement("p");
    const deleteButton = document.createElement("button");
  
    li.draggable = true;
    checkbox.type = "checkbox";
    paragraph.innerHTML = task.text;
    deleteButton.innerHTML = "x";
  
    if (task.isDone === false) {
        document.getElementById("to-do-list")?.appendChild(li);
    } 
    else {
        document.getElementById("done-list")?.appendChild(li);
        checkbox.checked = true;
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
    console.log("rendering tasks");
    const a = (document.getElementById("to-do-list") as HTMLElement);
    const b = (document.getElementById("done-list") as HTMLElement);
    if (a && b) {
      a.innerHTML = "";
      b.innerHTML = "";
    }
    console.log("cleared tasks")
    loadTasks();
    console.log(storedTasks);
    storedTasks.forEach(task => {
        console.log("creating hmtl for each task");
        createHTML(task); 
    });
}