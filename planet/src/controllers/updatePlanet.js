const Planet = require("../data");
const { response } = require("../utils");

module.exports = async (req, res) => {
  const updatedPlanet = await Planet.update(req.body);
  response(res, 200, updatedPlanet);
};
