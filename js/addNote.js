import { notes, saveToLocalStorage, render } from "./render.js";

export function addNote() {
  const inputNote = document.getElementById("inputNote");
  const text = inputNote.value.trim();

  if (text === "") return alert("Note tidak boleh kosong!");

  const newNote = { id: Date.now(), text: text, isCompleted: false };
  notes.push(newNote);

  saveToLocalStorage();
  render();
  inputNote.value = "";
}

document.getElementById("submitNote").addEventListener("click", addNote);