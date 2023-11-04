const carrosList = document.getElementById("carros-list");
const carrosForm = document.getElementById("carros-form");

function listarCarros() {
  fetch("http://127.0.0.1:3000/")
    .then((response) => response.json())
    .then((carros) => {
      carrosList.innerHTML = carros
        .map(
          (carros) =>
            `<li data-id=${carros.id}>${carros.locadora} - ${carros.modelo} (${carros.marca})
            <button class="excluir-btn" onclick="excluirCarro('${carros.id}')">Excluir</button> </li>`
        )
        .join("");
    });
}
function excluirCarro(id) {
  if (confirm("Tem certeza de que deseja excluir este veículo?")) {
    fetch(`http://127.0.0.1:3000/carros/${id}`, {
      method: "DELETE",
    }).then(() => {
      listarCarros();
    });
  }
}

listarCarros();

carrosList.addEventListener("click", (event) => {
  if (event.target.tagName === "LI") {
    const id = event.target.dataset.id;
    localStorage.setItem("idCarro", id);
    window.location.href = `./editar?id=${id}`;
  }
});

carrosForm.addEventListener("submit", (event) => {
  event.preventDefault();
  const formData = new FormData(carrosForm);
  const arCondicionado = document.getElementById("ar_condicionado").checked;

  formData.set("ar_condicionado", arCondicionado);
  fetch("http://127.0.0.1:3000/carros", {
    method: "POST",
    body: JSON.stringify(Object.fromEntries(formData)),
    headers: {
      "Content-Type": "application/json",
    },
  }).then(() => {
    listarCarros();
    carrosForm.reset();
  });
});
