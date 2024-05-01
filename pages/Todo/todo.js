const inputBox = document.getElementById("input-box");
const listContainer = document.getElementById("list-container");
const err = document.getElementById("err");

function addTask() {
  err.innerHTML = "";
  if (inputBox.value === "") {
    let p = document.createElement("p");
    // p.innerHTML = inputBox.value;
    p.textContent = "Please add a task";
    err.appendChild(p);
  } else {
    let li = document.createElement("li");
    li.innerHTML = inputBox.value;
    listContainer.appendChild(li);
    let span = document.createElement("span");
    span.innerHTML = "\u00d7";
    li.appendChild(span);
  }
  inputBox.value = "";
  saveData();
}

listContainer.addEventListener(
  "click",
  function (e) {
    if (e.target.tagName === "LI") {
      e.target.classList.toggle("checked");
      saveData();
    } else if (e.target.tagName === "SPAN") {
      e.target.parentElement.remove();
      saveData();
    }
  },
  false
);

function saveData() {
  localStorage.setItem("data", listContainer.innerHTML);
}

function showData() {
  listContainer.innerHTML = localStorage.getItem("data");
}
showData();
