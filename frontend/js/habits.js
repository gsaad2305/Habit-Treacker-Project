function getStoredTasks() {
  const tasks = JSON.parse(localStorage.getItem("tasks")) || {
    pending: [],
    completed: [],
  };
  return tasks;
}

function updateprogress() {
  const tasks = getStoredTasks();
  const total = tasks.pending.length + tasks.completed.length;
  const completed = tasks.completed.length;

  const percental = total === 0 ? 0 : (completed / total) * 100;

  const progress = document.getElementById("barra");
  const progressotexto = document.getElementById("progressoTexto");

  progress.style.width = percental + "%";
  progressotexto.innerText = Math.round(percental) + "% concluido";
}

function loadHome() {
  const tasks = getStoredTasks();
  const pendingList = document.querySelector("#pending");
  const completedList = document.querySelector("#completed");
  pendingList.innerHTML = "";
  completedList.innerHTML = "";

  tasks.pending.forEach((task, index) => {
    const li = document.createElement("li");
    li.innerHTML = `<span>${task}</span>
         `;

    pendingList.appendChild(li);
  });

  tasks.completed.forEach((task, index) => {
    const li = document.createElement("li");
    li.classList.add;
    li.innerHTML = `
            <span>${task}</span>
        `;
    completedList.appendChild(li);
  });
  updateprogress();
}
window.onload = loadHome;
