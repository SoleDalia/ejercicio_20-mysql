// modulos
const express = require("express");
const router = express.Router();
const mysql = require("mysql2");

router.get("/", function (req, res) {
  const connection = mysql.createConnection({
    host: "localhost",
    user: "root",
    password: "root1234",
    database: "ha_ejercicio_20",
  });

  // siempre despues de la consulta hago un callback. users es la respuesta satisfactoria
  connection.query("SELECT * FROM users", function (error, users) {
    if (error) {
      throw error;
    } else {
      res.render("usuarios", { users });
    }
  });
  connection.end();
});

module.exports = router;
