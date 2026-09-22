import { notes, saveToLocalStorage, render } from "./render.js";

export function toggleStatus(id) {
  const targetNote = notes.find((note) => note.id === id);

  if (targetNote) {
    targetNote.isCompleted = !targetNote.isCompleted;
    saveToLocalStorage();
    render();
  }
}
