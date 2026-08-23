const inputNote = document.getElementById("inputNote");
const submitNote = document.getElementById("submitNote");
const tampilNote = document.getElementById("tampilNote");

let notes = JSON.parse(localStorage.getItem("todo-data") || "[]");

function saveToLocalStorage() {
  localStorage.setItem("todo-data", JSON.stringify(notes));
}

function render() {
  tampilNote.innerHTML = "";

  notes.forEach((note) => {
    const li = document.createElement("li");

    const span = document.createElement("span");
    span.textContent = note.text;

    li.appendChild(span);
    tampilNote.appendChild(li);
  });
}

function addNote() {
  const text = inputNote.value.trim();

  if (text === "") {
    alert("Note tidak boleh kosong!");
    return;
  }

  const newNote = {
    id: Date.now(),
    text: text,
    isCompleted: false,
  };

  notes.push(newNote);

  saveToLocalStorage();
  render();

  inputNote.value = "";
}

submitNote.addEventListener("click", addNote);

render();