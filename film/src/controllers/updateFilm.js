const Films = require("../data");

module.exports = async (req, res) => {
  const response = await Films.update(req.body);
  res.status(201).json(response);
};
