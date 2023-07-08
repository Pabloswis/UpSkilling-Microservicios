//recibirá el controlador, y si hay errores se los pasa al manejador de express
module.exports = (fn) => {
  return function (req, res, next) {
    fn(req, res).catch((err) => next(err));
  };
};
