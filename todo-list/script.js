const inputBox = document.getElementById("input-box");
const inputBTN = document.getElementById("input-button");
const listContainer = document.getElementById("list-container")
let taskList = [];

inputBTN.addEventListener("click", ()=> {
    if (inputBox.value != "") {
        let task = inputBox.value
        taskList.push(task);
        addTask()
    } else {
        console.log("There's no task");
    }
})
listContainer.addEventListener("click", (e)=> {
    if (e.target.tagName === "LI") {
        e.target.classList.toggle("checked");
        saveData();
    } else if (e.target.tagName === "SPAN") {
        e.target.parentElement.remove();
        saveData();
    }
    console.log("click")
}, false)

function addTask() {
    let li = document.createElement("li");
    li.innerText = inputBox.value;
    listContainer.appendChild(li);
    
    let span = document.createElement("span")
    span.className = "close";
    li.appendChild(span)
    inputBox.value = "";
    saveData();
}
function saveData() {
    localStorage.setItem("tasks", listContainer.innerHTML);
}
function showData() {
    listContainer.innerHTML = localStorage.getItem("tasks");
}
showData()