import { Task } from "./models/Task";
import { saveTask, storedTasks } from "./localStorage";

export const createHTML = (task: Task) => {
    const taskCard = document.createElement("li");
    const checkbox = document.createElement("input");
    const paragraph = document.createElement("p");
    const deleteButton = document.createElement("button");

    taskCard.className = "task-card";
    taskCard.draggable = true;
    checkbox.type = "checkbox";
    checkbox.checked = task.isDone;
    paragraph.innerHTML = task.text;
    deleteButton.innerHTML = "x";
  
    if (task.isDone === false) {
        document.getElementById("to-do-list")?.appendChild(taskCard);
    } 
    else {
        document.getElementById("done-list")?.appendChild(taskCard);
    }


    taskCard.append(checkbox, paragraph, deleteButton);
  
    checkbox.addEventListener("click", () => {
      task.isDone = checkbox.checked;
      saveTask();
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
    const toDoList = document.getElementById("to-do-list");
    const doneList = document.getElementById("done-list");

    if (!toDoList || !doneList) {
      console.error("Error: One or more required elements are missing.");
      return;
    }

    toDoList.innerHTML = "";
    doneList.innerHTML = "";

    console.log("cleared tasks")
    console.log(storedTasks);
    storedTasks.forEach(task => {
        console.log("creating hmtl for each task");
        createHTML(task); 
    });
}