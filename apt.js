const titleInput = document.getElementById("titleInput");
const yearInput = document.getElementById("yearInput");

const addBtn = document.getElementById("addBtn");
const deleteBtn = document.getElementById("deleteBtn");
const editBtn = document.getElementById("editBtn");

const movieList = document.getElementById("movieList");

let movies = [];
let nextId = 1;

function renderMovies() {
  movieList.innerHTML = "";

  for (const m of movies) {
    const li = document.createElement("li");
    li.className = "item";
    li.dataset.id = String(m.id);

    li.innerHTML = `
      <div>
        <strong>${m.title}</strong>
        <span class="badge">${m.year}</span>
      </div>
      <div class="actions">
        <!-- En ramas se añadirán botones por película -->
      </div>
    `;

    movieList.appendChild(li);
  }
}

function addMovie() {
  const titulo = tituloInput.value.trim();
  const año = Number(añoInput.value);

  if (!titulo || !año) {
    alert("Introduce título y año.");
    return;
  }

  movies.push({ id: nextId++, titulo, año });
  tituloInput.value = "";
  añoInput.value = "";
  renderMovies();
}

// Solo funciona añadir al inicio
addBtn.addEventListener("click", addMovie);

// Estos eventos se completarán en ramas
deleteBtn.addEventListener("click", () => alert("Se implementa en rama eliminar"));
editBtn.addEventListener("click", () => alert("Se implementa en rama editar"));

renderMovies();
