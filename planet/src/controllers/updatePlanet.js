const Planet = require("../data");
const { response } = require("../utils");

module.exports = async (req, res) => {
  const { _id } = req.params;
  const updatedPlanet = await Planet.update(_id, req.body);
  response(res, 200, updatedPlanet);
};
