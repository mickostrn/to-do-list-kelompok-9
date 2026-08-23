const tampilNote = document.getElementById("tampilNote");

let notes = JSON.parse(localStorage.getItem("todo-data") || "[]");

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

render();