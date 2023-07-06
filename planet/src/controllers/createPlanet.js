const Planet = require("../data");

module.exports = async (req, res) => {
  const response = await Planet.create(req.body);
  res.status(201).json(response);
};
