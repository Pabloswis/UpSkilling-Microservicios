const films = require("./films.json");
const axios = require("axios");

module.exports = {
  list: async () => {
    const getData = await axios.get("http://localhost:8000/database/Film");
    return getData.data;
  },
  create: async (film) => {
    const postData = await axios.post(
      "http://localhost:8000/database/Film/create",
      film
    );
    return postData.data;
  },
  update: async (_id, updatefilm) => {
    const updatedFilm = await axios.put(
      `http://localhost:8000/database/Film/update/${_id}`,
      updatefilm
    );
    return updatedFilm.data;
  },
  delete: async (_id) => {
    const deletedFilm = await axios.delete(
      `http://localhost:8000/database/Film/delete/${_id}`
    );
    return deletedFilm.data;
  },
};
