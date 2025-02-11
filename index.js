// Selecting the title from HTML
const title = document.getElementById("title");
// Selecting the description from html
const description = document.getElementById("description");
// Selecting form from html as the form will get submitted
const form = document.querySelector("form");
// Selecting the container as everything will be appended in it
const container = document.querySelector(".container");

const tasks = localStorage.getItem("tasks")
  ? JSON.parse(localStorage.getItem("tasks"))
  : [];
showAlltasks();
// Crating afunction named as showAlltask for showing the task on local storage + on user screen as well
function showAlltasks() {
  tasks.forEach((value, index) => {
    // Creating div element and setting it's class to task
    const div = document.createElement("div");
    div.setAttribute("class", "task");
    // Creating innerdiv div inside div which we wrote in html 
    const innerdiv = document.createElement("div");
    div.append(innerdiv);
    const p = document.createElement("p");
    p.innerText = value.title;
    innerdiv.append(p);
    const span = document.createElement("span");
    span.innerText = value.description;
    innerdiv.append(span);
    const btn = document.createElement("button");
    btn.setAttribute("class", "deleteBtn");
    btn.innerText = "-";
    btn.addEventListener("click", () => {
      removeTasks();
      tasks.splice(index, 1);
      localStorage.setItem("tasks", JSON.stringify(tasks));
      showAlltasks();
    });
    div.append(btn);
    container.append(div);
  });
}

function removeTasks() {
  tasks.forEach(() => {
    const div = document.querySelector(".task");
    div.remove();
  });
}

form.addEventListener("submit", (e) => {
  e.preventDefault();
  removeTasks();
  tasks.push({
    title: title.value,
    description: description.value,
  });
  localStorage.setItem("tasks", JSON.stringify(tasks));
  showAlltasks();
});
