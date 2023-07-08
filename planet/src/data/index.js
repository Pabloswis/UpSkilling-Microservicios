const Planets = require("./planets.json");

module.exports = {
  list: async () => {
    return Planets;
  },
  create: async (planet) => {
    const newPlanet = { _id: planet._id, name: planet.name };
    return newPlanet;
  },
  update: async (planet) => {
    const newPlanet = {
      error: false,
      message: "actualizado con exito",
      data: { _id: planet._id, name: planet.name },
    };
    return newPlanet;
  },
};
