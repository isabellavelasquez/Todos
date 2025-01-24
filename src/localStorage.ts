import { Task } from "./models/Task";

export let storedTasks: Task[] = JSON.parse(localStorage.getItem("Task") || "[]");

// export const loadTasks = () =>  {
//     storedTasks = new Array(JSON.parse(localStorage.getItem("Task")));
// }

export const saveTask = () => {
    localStorage.setItem("Task", JSON.stringify(storedTasks));
}

export const addTask = (task: Task) => {
    storedTasks.push(task);
    localStorage.setItem("Task", JSON.stringify(storedTasks));
    saveTask();
};