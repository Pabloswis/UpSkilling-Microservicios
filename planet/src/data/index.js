const Planets = require("./planets.json");
const axios = require("axios");

module.exports = {
  list: async () => {
    const getData = await axios.get("http://localhost:8000/database/Planet");
    return getData.data;
  },
  create: async (planet) => {
    const postData = await axios.post(
      "http://localhost:8000/database/Planet/create",
      planet
    );
    return postData.data;
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
