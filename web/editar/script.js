function carregarDetalhesDoVeiculoParaEdicao(id) {
  fetch(`http://127.0.0.1:3000/carros/${id}`)
    .then((response) => response.json())
    .then((veiculo) => {
      console.log(veiculo);
      document.getElementById("locadoraEdit").value = veiculo.locadora;

      document.getElementById("modeloEdit").value = veiculo.modelo;
      document.getElementById("marcaEdit").value = veiculo.marca;
      document.getElementById("anoEdit").value = veiculo.ano;
      document.getElementById("motorEdit").value = veiculo.motor;
      document.getElementById("portasEdit").value = veiculo.portas;
      document.getElementById("cambioEdit").value = veiculo.cambio;
      document.getElementById("ar_condicionadoEdit").value =
        veiculo.ar_condicionado;
    })
    .catch((error) => {
      console.error(
        "Erro ao carregar detalhes do veículo para edição: " + error
      );
    });
}

carrosEdit.addEventListener("submit", (event) => {
  event.preventDefault();
  const formData = new FormData(carrosEdit);

  fetch(`http://127.0.0.1:3000/carros/${id}`, {
    method: "PUT",
    body: JSON.stringify(Object.fromEntries(formData)),
    headers: {
      "Content-Type": "application/json",
    },
  })
    .then((response) => response.json())
    .then((veiculo) => {
      // Veículo atualizado com sucesso, você pode fazer algo aqui, como atualizar a lista de veículos
    })
    .catch((error) => {
      console.error("Erro ao atualizar o veículo: " + error);
    });
});

const id = localStorage.getItem("idCarro");

carregarDetalhesDoVeiculoParaEdicao(id);
