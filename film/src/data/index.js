const films = require("./films.json");

module.exports = {
  list: async () => {
    //pedir los datos al servicio database para las films
    return films;
  },
  create: async (film) => {
    // throw Error("Hay un error al momento de crear un film");
    //controlar que esten los campos
    //crear el film y devolver el resultado
    const newFilm = { _id: film._id, title: film.title };
    return newFilm;
  },
  update: async (film) => {
    const updatedFilm = { data: "modificado con exito" };
    return updatedFilm;
  },
};
