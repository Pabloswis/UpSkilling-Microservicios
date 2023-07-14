const character = require("./characters.json");
const axios = require("axios");

module.exports = {
  list: async () => {
    const getData = await axios.get("http://localhost:8000/database/Character");
    return getData.data;
  },

  create: async (character) => {
    const postData = await axios.post(
      "http://localhost:8000/database/Character/create",
      character
    );
    return postData.data;
  },
  update: async (_id, updatedCharacter) => {
    const response = await axios.put(
      `http://localhost:8000/database/Character/update/${_id}`,
      updatedCharacter
    );
    return response.data;
  },
  delete: async (_id) => {
    const deletedCharacter = await axios.delete(
      `http://localhost:8000/database/Character/delete/${_id}`
    );
    return deletedCharacter.data;
  },
};
