import { notes, saveToLocalStorage, render } from "./render.js";

export function clearAll() {
  if (confirm("Yakin ingin menghapus semua?")) {
    notes.length = 0; // Hapus total isi array
    saveToLocalStorage();
    render();
  }
}