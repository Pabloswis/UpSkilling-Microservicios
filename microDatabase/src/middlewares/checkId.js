module.exports = (req, res, next) => {
  const { model, _id } = req.params;
  if (model === "Character" && _id > 82) {
    return next();
  } else if (model === "Planet" && _id > 60) {
    return next();
  } else if (model === "Film" && _id > 6) {
    return next();
  } else {
    throw Error(`cannot delete the element with the id ${_id}`);
  }
};
