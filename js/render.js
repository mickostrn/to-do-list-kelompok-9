import { deleteOne } from "./deleteOne.js";
import { toggleStatus } from "./toggleStatus.js";

export let notes = JSON.parse(localStorage.getItem("todo-data") || "[]");

export function saveToLocalStorage() {
  localStorage.setItem("todo-data", JSON.stringify(notes));
}

export function render() {
  const tampilNote = document.getElementById("tampilNote");
  tampilNote.innerHTML = "";

  notes.forEach((note) => {
    const li = document.createElement("li");

    const checkbox = document.createElement("input");
    checkbox.type = "checkbox";
    checkbox.checked = note.isCompleted;
    checkbox.addEventListener("change", () => toggleStatus(note.id));

    const span = document.createElement("span");
    span.textContent = note.text;
    if (note.isCompleted) span.classList.add("completed");

    const deleteBtn = document.createElement("button");
    deleteBtn.textContent = "Hapus";
    deleteBtn.addEventListener("click", () => deleteOne(note.id));

    li.appendChild(checkbox);
    li.appendChild(span);
    li.appendChild(deleteBtn);
    tampilNote.appendChild(li);
  });
}

render();