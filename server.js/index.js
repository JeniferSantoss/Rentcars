const express = require("express");
const cors = require("cors");
const { Sequelize, DataTypes } = require("sequelize");

const sequelize = new Sequelize("testing", "root", "ANSKk08aPEDbFjDO", {
  dialect: "mysql",
  host: "localhost",
  port: 3307,
});

const Car = sequelize.define(
  "Car",
  {
    id: {
      type: DataTypes.UUID,
      primaryKey: true,
      defaultValue: DataTypes.UUIDV4,
    },
    locadora: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    modelo: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    marca: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    ano: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    motor: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    portas: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    cambio: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    ar_condicionado: {
      type: DataTypes.BOOLEAN,
      allowNull: false,
    },
  },
  {
    timestamps: true,
    updatedAt: "updatedAt",
    createdAt: "createdAt",
  }
);

sequelize
  .sync()
  .then(() => {
    console.log("Banco de dados sincronizado.");
  })
  .catch((error) => {
    console.error("Erro ao sincronizar o banco de dados:", error);
  });

const app = express();
app.use(express.json());
app.use(cors());

app.get("/", (req, res) => {
  const resp = {};

  try {
    Car.findAll().then((e) => {
      res.json(e);
    });
  } catch (error) {
    resp.status = "fail";

    res.json(resp);
  }
});

app.get("/carros/:id", (req, res) => {
  const resp = {};

  try {
    Car.findOne({
      where: {
        id: req.params.id,
      },
    }).then((e) => {
      res.json(e);
    });
  } catch (error) {
    console.log(error);
    resp.status = "fail";

    res.json(resp);
  }
});

app.post("/carros", (req, res) => {
  const resp = {};

  try {
    Car.build(req.body).save();
    resp.status = "ok";
  } catch (error) {
    resp.status = "fail";
  }
  res.json(resp);
});

app.put("/carros/:id", (req, res) => {
  const resp = {};

  try {
    Car.findOne({
      where: {
        id: req.params.id,
      },
    }).then((e) => {
      e.update(req.body);

      res.json(e);
    });
  } catch (error) {
    resp.status = "fail";

    res.json(resp);
  }
});

app.delete("/carros/:id", (req, res) => {
  let resp = {};

  try {
    Car.destroy({
      where: {
        id: req.params.id,
      },
    });

    resp = {
      status: "ok",
    };
  } catch (error) {
    resp.status = "fail";

    res.json(resp);
  }

  res.json(resp);
});

const port = 3000;

app.listen(port, () => {
  console.log(`On port ${port}`);
});
