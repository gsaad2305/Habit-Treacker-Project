const API_BASE_URL = "http://localhost:3001";

function updateprogress(tasks) {
  const total = tasks.length;
  const completed = tasks.filter(task => task.status).length;
  const percental = total === 0 ? 0 : (completed / total) * 100;

  const progress = document.getElementById("barra");
  const progressotexto = document.getElementById("progressoTexto");

  progress.style.width = percental + "%";
  progressotexto.innerText = Math.round(percental) + "% concluido";
}

async function loadHome() {
  const token = localStorage.getItem("token");

  const response = await fetch(`${API_BASE_URL}/tasks`, {
    method: "GET",
    headers: {
      "Authorization": `Bearer ${token}`
    }
  });

  if (response.status === 401) {
    alert("Unauthorized: Token JWT inválido ou expirado.");
    localStorage.removeItem("token");
    window.location.href = "login.html";
    return;
  }

  const tasks = await response.json();
  const pendingList = document.querySelector("#pending");
  const completedList = document.querySelector("#completed");

  pendingList.innerHTML = "";
  completedList.innerHTML = "";

  tasks.forEach((task) => {
    const li = document.createElement("li");

    if (!task.status) {
      li.innerHTML = `
        <span>${task.title}</span>
        <div class="actions">
          <input type="checkbox" id="check-${task.id}" onclick="completeTask('${task.id}')">
          <button onclick="deleteTask('${task.id}')" class="excluir">Delete</button>
        </div>
      `;
      pendingList.appendChild(li);
    } else {
      li.innerHTML = `
        <span>${task.title}</span>
        <div class="actions">
          <input type="checkbox" id="check-${task.id}" onclick="completeTask('${task.id}')" checked disabled>
          <button onclick="deleteTask('${task.id}')" class="excluir">Delete</button>
        </div>
      `;
      completedList.appendChild(li);
    }
  });

  updateprogress(tasks);
}

function openModal() {
  document.getElementById("modalOverlay").style.display = "flex";
  document.getElementById("taskInput").focus();
}

function closeModal() {
  document.getElementById("modalOverlay").style.display = "none";
  document.getElementById("taskInput").value = "";
}

async function addTask() {
  const input = document.getElementById("taskInput");
  const taskValue = input.value.trim();

  if (taskValue !== "") {
    const token = localStorage.getItem("token");

    const response = await fetch(`${API_BASE_URL}/tasks`, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        "Authorization": `Bearer ${token}`
      },
      body: JSON.stringify({
        title: taskValue,
        description: taskValue
      })
    });

    closeModal();
    loadHome();
  }
}

async function completeTask(id) {
  const token = localStorage.getItem("token");

  const response = await fetch(`${API_BASE_URL}/tasks/${id}`, {
    method: "PATCH",
    headers: {
      "Content-Type": "application/json",
      "Authorization": `Bearer ${token}`
    },
    body: JSON.stringify({
      status: true
    })
  });


  loadHome();
}

async function deleteTask(id) {
  const token = localStorage.getItem("token");

  const response = await fetch(`${API_BASE_URL}/tasks/${id}`, {
    method: "DELETE",
    headers: {
      "Authorization": `Bearer ${token}`
    }
  });



  loadHome();
}

window.onload = loadHome;
