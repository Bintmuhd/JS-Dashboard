const notesCont = document.querySelector(".notesCont");
const createBtn = document.querySelector(".btn");
let notes = document.querySelectorAll("input-box");

function showNotes() {
    notesCont.innerHTML= localStorage.getItem("notes")
}
showNotes()

function updateStorage() {
  localStorage.setItem("notes", notesCont.innerHTML);
}

createBtn.addEventListener("click", () => {
  let inputBox = document.createElement("p");
  let img = document.createElement("img");
  inputBox.className = "input-box";
  inputBox.setAttribute("contenteditable", "true");
  img.src = "/images/images/delete.png";
  notesCont.appendChild(inputBox).appendChild(img);
});

notesCont.addEventListener("click", (e) => {
  if (e.target.tagName === "IMG") {
    e.target.parentElement.remove();
    updateStorage();
  } else if (e.target.tagName === "P") {
    notes = document.querySelectorAll(".input-box");
    notes.forEach((nt) => {
      nt.onkeyup = function () {
        updateStorage();
      };
    });
  }
});

document.addEventListener("keydown", event => {
    if(event.key === "Enter") {
        document.execCommand("insertLineBreak")
        event.preventDefault()
    }
})
