const { ClientError } = require("../utils/errors");

module.exports = (req, res, next) => {
  const { title } = req.body;
  if (title) {
    next();
  } else {
    throw new ClientError("Error en el titulo", 401);
  }
};
