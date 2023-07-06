const character = require("./characters.json");

module.exports = {
  list: async () => {
    return character;
  },

  create: async () => {
    throw Error("Hay un error al momento de crear el personaje");
  },
};
