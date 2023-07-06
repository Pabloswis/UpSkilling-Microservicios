const Planet = require("../data");

module.exports = async (req, res) => {
  const updatedPlanet = await Planet.update(req.body);

  res.status(200).json(updatedPlanet);
};
