const { catchedAsync } = require("../utils");

module.exports = {
  getCharacters: catchedAsync(require("./getCharacters")),
  createCharacter: catchedAsync(require("./createCharacter")),
  updateCharacter: catchedAsync(require("./updateCharacter")),
  deleteCharacter: catchedAsync(require("./deleteCharacter")),
};
