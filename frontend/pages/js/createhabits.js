window.onload = function(){
    loadTask();
};

function getStoredTasks(){
    const tasks = JSON.parse(localStorage.getItem('tasks')) || {
        pending:[],
        completed:[]
    };
    return tasks;
}

function savestask(tasks){
    localStorage.setItem('tasks', JSON.stringify(tasks));
}

function addTask(){
    const input = document.querySelector("#createtask");
    const tasksText = input.value.trim();

    if(tasksText === ''){
        alert("Digite um habito!");
        return;
    };

    const tasks = getStoredTasks();
    tasks.pending.push(tasksText);
    savestask(tasks);

    input.value = '';
    loadTask();
}

function completeTask(index){
    const tasks = getStoredTasks();
    const completedTasks = tasks.pending.splice(index, 1)[0];
    tasks.completed.push(completedTasks);
    savestask(tasks);
    loadTask();
}

function deleteTask(index, isCompleted){
    const tasks = getStoredTasks();
    if(isCompleted){
        tasks.completed.splice(index,1);
    }else{
        tasks.pending.splice(index,1)
    }

    savestask(tasks);
    loadTask();
}

function loadTask(){
    const tasks = getStoredTasks();
    const pendingList = document.querySelector("#taskpedding");
    const completedList = document.querySelector("#taskscompleted");

    pendingList.innerHTML = '';
    completedList.innerHTML = '';

    tasks.pending.forEach((task,index) => {
         const li = document.createElement('li');
         li.innerHTML = `<span>${task}</span>
         <div>
            <input type="checkbox" onchange="completeTask(${index})">
            <button onclick="deleteTask(${index}, false)">Excluir</button>
            </div>
         `;

         pendingList.appendChild(li);
    });


    tasks.completed.forEach((task,index)=>{
        const li = document.createElement("li");
        li.classList.add
        li.innerHTML = `
            <span>${task}</span>
            <input type="checkbox" checked disabled>
            <button onclick="deleteTask(${index},true)">Excluir</button>
        `;
        completedList.appendChild(li);
    });

   
}

