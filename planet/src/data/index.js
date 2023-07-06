const planets = require("./planets.json");

module.exports = {
  list: async () => {
    return planets;
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
