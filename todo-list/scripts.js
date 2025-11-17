const inputBox = document.getElementById("input-box")
const button = document.getElementById("button")
const listContainer = document.getElementById("list-container")
let taskList = []

button.addEventListener('click', ()=> {
    if (inputBox.value !== '') {
        addTask();
    } else {
        console.log("There's something wrong, please try again!")
    }
})
listContainer.addEventListener("click", (e)=> {
    if (e.target.tagName.toLowerCase() === "li") {
        e.target.classList.toggle("checked")
    } else if (e.target.tagName.toLowerCase() === "span") {
        e.target.classList.toggle("close")
        e.target.parentElement.remove()
    } else {
        console.log("There's something wrong, please try again!")
    }
}, false)

function addTask() {
    let li = document.createElement("li");
    li.innerText = inputBox.value
    listContainer.appendChild(li);

    let span = document.createElement("span")
    span.className = "close";
    li.appendChild(span);
    inputBox.value = '';
}