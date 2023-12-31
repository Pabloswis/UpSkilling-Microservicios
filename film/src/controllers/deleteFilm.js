const Film = require("../data");
const { response } = require("../utils");

module.exports = async (req, res) => {
  const { _id } = req.params;
  const deleted = await Film.delete(_id);

  response(res, 200, deleted);
};
