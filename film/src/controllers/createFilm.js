const Films = require("../data");

module.exports = async (req, res) => {
  const response = await Films.create(req.body);
  res.status(200).json(response);
};
