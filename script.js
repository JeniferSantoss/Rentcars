const express = require("express");
const bodyParser = require("body-parser");
const fs = require("fs");

const app = express();
app.use(bodyParser.json());

let carrosData = [];

if (fs.existsSync("carros.json")) {
  const data = fs.readFileSync("carros.json", "utf-8");
  carrosData = JSON.parse(data);
}

app.get("/carros", (req, res) => {
  res.json(carrosData);
});

app.post("/carros", (req, res) => {
  const novoCarro = req.body;
  carrosData.push(novoCarro);
  salvarDadosEmJSON(carrosData);
  res.json(novoCarro);
});

app.put("/carros/:id", (req, res) => {
  const id = req.params.id;
  const atualizacao = req.body;

  const index = carrosData.findIndex((carro) => carro.id === id);

  if (index !== -1) {
    carrosData[index] = { ...carrosData[index], ...atualizacao };
    salvarDadosEmJSON(carrosData);
    res.json(carrosData[index]);
  } else {
    res.status(404).json({ message: "Carro não encontrado" });
  }
});

app.delete("/carros/:id", (req, res) => {
  const id = req.params.id;

  // Filtrar a lista para excluir o carro com base no ID
  carrosData = carrosData.filter((carro) => carro.id !== id);
  salvarDadosEmJSON(carrosData);

  res.json({ message: "Carro excluído com sucesso" });
});

function salvarDadosEmJSON(data) {
  const json = JSON.stringify(data, null, 2);
  fs.writeFileSync("carros.json", json, "utf-8");
}

app.listen(3000, () => {
  console.log("Servidor rodando na porta 3000");
});
