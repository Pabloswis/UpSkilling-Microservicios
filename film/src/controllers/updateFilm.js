const Films = require("../data");
const { response } = require("../utils");

module.exports = async (req, res) => {
  const updatedFilm = await Films.update(req.body);
  response(res, 200, updatedFilm);
};
