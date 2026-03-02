function getStoredTasks() {
  const tasks = JSON.parse(localStorage.getItem("tasks")) || {
    pending: [],
    completed: []
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
    li.innerHTML = `
      <span>${task}</span>
      <div class="actions">
      <input type="checkbox" id="check-${index}" onclick="completeTask(${index})">
      
        <button onclick="deleteTask(${index}, 'pending')" class="excluir">Delete</button>
      </div>
    `;
    pendingList.appendChild(li);
  });

  tasks.completed.forEach((task, index) => {
    const li = document.createElement("li");
    li.innerHTML = `
      <span>${task}</span>
       <div class="actions">
      <input type="checkbox" id="check-${index}" onclick="completeTask(${index})" checked disabled>
      
        <button onclick="deleteTask(${index}, 'completed')" class="excluir">Delete</button>
      </div>
    `;
    completedList.appendChild(li);
  });
  updateprogress();
}

function openModal() {
  document.getElementById("modalOverlay").style.display = "flex";
  document.getElementById("taskInput").focus();
}

function closeModal() {
  document.getElementById("modalOverlay").style.display = "none";
  document.getElementById("taskInput").value = "";
}

function addTask() {
  const input = document.getElementById("taskInput");
  const taskValue = input.value.trim();

  if (taskValue !== "") {
    const tasks = getStoredTasks();
    tasks.pending.push(taskValue);
    localStorage.setItem("tasks", JSON.stringify(tasks));
    
    closeModal();
    loadHome(); 
  }
}

function completeTask(index) {
  const tasks = getStoredTasks();
  const task = tasks.pending.splice(index, 1);
  tasks.completed.push(task[0]);
  localStorage.setItem("tasks", JSON.stringify(tasks));
  loadHome();
}

function deleteTask(index, type) {
  const tasks = getStoredTasks();
  tasks[type].splice(index, 1);
  localStorage.setItem("tasks", JSON.stringify(tasks));
  loadHome();
}

window.onload = loadHome;
