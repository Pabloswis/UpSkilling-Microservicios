//Esta funcion debe envolver al controlador para que capture los errores async
module.exports = (fn) => {
  return function (req, res, next) {
    fn(req, res).catch((err) => {
      next(err); //esto pasa al manejador de errores de express
    });
  };
};

// module.exports = (fn) => (req, res, next) => fn(req , res).catch((err) => next(err));
