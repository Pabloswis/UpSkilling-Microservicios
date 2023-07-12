const Character = require("../data");
const { response } = require("../utils");

module.exports = async (req, res) => {
  const { _id } = req.params;
  const deleted = await Character.delete(_id);

  response(res, 200, deleted);
};
