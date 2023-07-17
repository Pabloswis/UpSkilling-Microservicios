const Films = require("../data");
const { response } = require("../utils");

module.exports = async (req, res) => {
  const { _id } = req.params;
  const updatedFilm = await Films.update(_id, req.body);
  response(res, 200, updatedFilm);
};
