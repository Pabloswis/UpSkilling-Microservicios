const express = require("express");
const morgan = require("morgan");

const server = express();

server.use(morgan("dev"));
server.use(express.json());

server.use("/films", require("./routes"));

// Manejar errores donde no encuentra la ruta
server.use("*", (req, res) => {
  //ToDo aplicar el Client Error
  res.status(404).send({ error: "Not Found" });
});

// Manejo de errores
//* sobreescribir el manejador de errores de Express
// Lo importante es que reciba los 4 parametros
//! nunca enviar la traza de errores al cliente (expone muchos datos sensibles)
//para poder responder con otro codigo que no sea 500 puedo modificar el manejador
//para crear el statuscode dentro de err, creamos la clase ClientError en utils/errors
server.use((err, req, res, next) => {
  res.status(err.statusCode || 500).send({
    error: true,
    message: err.message,
  });
});

module.exports = server;
