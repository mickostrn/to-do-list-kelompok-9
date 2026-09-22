import { notes, saveToLocalStorage, render } from "./render.js";

export function deleteOne(id) {
  const filtered = notes.filter((note) => note.id !== id);
  
  notes.length = 0;
  notes.push(...filtered);

  saveToLocalStorage();
  render();
}
