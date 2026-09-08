import { notes, saveToLocalStorage, render } from "./render.js";

export function clearAll() {
  if (confirm("Yakin ingin menghapus semua?")) {
    notes.length = 0; 
    saveToLocalStorage();
    render();
  }
}

document.getElementById("clearNote").addEventListener("click", clearAll);