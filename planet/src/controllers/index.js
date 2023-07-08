const { catchedAsync } = require("../utils");

//estos controladores ya estan pasando por el manejador de errores creado para atrapar errores async
module.exports = {
  getPlanets: catchedAsync(require("./getPlanets")),
  createPlanet: catchedAsync(require("./createPlanet.js")),
  updatePlanet: catchedAsync(require("./updatePlanet")),
};
