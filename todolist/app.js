let addTask = document.querySelector(".addTask");
let inputTask = document.querySelector("#inputTask");
let addBtn = document.querySelector(".btn-Task");
let list = document.querySelector(".list");
let taskList = document.querySelector("#Task-list");
let resetBtn = document.querySelector(".reset-btn");
let totalTask = 0;
let completedTask = 0;
let pendingTask = 0;
let totalTaskPara = document.querySelector("#total-task");
let completedTaskPara = document.querySelector("#completed-task");
let pendingTaskPara = document.querySelector("#pending-task");
let searchTask = document.querySelector("#searchTask");

function btnTask() {

    if (inputTask.value.trim() === "") {
        alert("Please enter a task");
        return;
    }
    const newTask = document.createElement("li");
    const checkbox = document.createElement("input");
    checkbox.type = "checkbox";
    checkbox.onclick = function () {
        if (checkbox.checked) {
            taskSpan.style.textDecoration = "line-through";
            taskSpan.style.color = "grey";
        } else {
            taskSpan.style.textDecoration = "none";
        } if (checkbox.checked) {
            completedTask++;
            completedTaskPara.innerText = completedTask;
            pendingTask = totalTask - completedTask;
            pendingTaskPara.innerText = pendingTask;
        } else {
            completedTask--;
        }
    };


    const taskSpan = document.createElement("span");
    taskSpan.innerText = inputTask.value;
    newTask.appendChild(checkbox);
    newTask.appendChild(taskSpan);
    checkbox.classList.add("check-list");
    editTask(newTask);
    deleteTask(newTask);
    taskList.appendChild(newTask);
    inputTask.value = "";
    userTotalTask(taskList);
};
function deleteTask(newTask) {
    const deleteBtn = document.createElement("button");
    deleteBtn.innerText = "Delete";
    newTask.appendChild(deleteBtn);
    console.log('button clicke');
    deleteBtn.classList.add("delete-btn");
    deleteBtn.onclick = function () {
        newTask.remove();
    }
}


function editTask(newTask) {

    const editBtn = document.createElement("button");
    editBtn.innerText = "Edit";
    editBtn.classList.add("edit-btn");
    newTask.appendChild(editBtn);
    editBtn.onclick = function () {
        const taskSpan = newTask.querySelector("span");
        taskSpan.contentEditable = true;
        taskSpan.focus();

    }

};
function clearAll() {
    const result = confirm("Delete all Task?");
    if (result) {
        taskList.innerHTML = "";
    }
};

inputTask.addEventListener("keydown", function (event) {
    if (event.key === "Enter") {
        btnTask();
    }
});

function userTotalTask(taskList) {
    totalTask = taskList.children.length;
    totalTaskPara.innerText = totalTask;
};

searchTask.addEventListener("keyup", function () {
    const searchValue = searchTask.value.toLowerCase();

    const tasks = taskList.querySelectorAll("li");

    tasks.forEach(function (task) {

        const taskText = task.querySelector("span").innerText.toLowerCase();

        if (taskText.includes(searchValue)) {
            task.style.display = "flex";
        } else {
            task.style.display = "none";
        }

    });

});
