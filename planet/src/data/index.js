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
  update: async (_id, updatePlanet) => {
    const response = await axios.put(
      `http://localhost:8000/database/Planet/update/${_id}`,
      updatePlanet
    );
    return response.data;
  },
  delete: async (_id) => {
    const deletedCharacter = await axios.delete(
      `http://localhost:8000/database/Planet/delete/${_id}`
    );
    return deletedCharacter.data;
  },
};
