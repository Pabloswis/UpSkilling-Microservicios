const { Schema } = require("mongoose");

const characterSchema = new Schema({
  _id: { type: String },
  name: { type: String, required: [true, "el nombre es requerido"] },
  height: String,
  mass: String,
  hair_color: String,
  skin_color: String,
  eye_color: String,
  birth_year: String,
  gender: {
    type: String,
    enum: ["male", "female", "n/a", "hermaphrodite", "none"],
  },
  homeworld: {
    type: String,
    ref: "planet", //reference to Planet model in another file.
  },
  films: [{ type: String, ref: "film" }],
});

characterSchema.statics.list = async function () {
  return await this.find()
    .populate("homeworld", ["id", "name"])
    .populate("films", ["id", "title", "director"]);
};

characterSchema.statics.get = async function (id) {
  return await this.findById(id)
    .populate("homeworld", ["id", "name"])
    .populate("films", ["id", "title", "director"]);
};

characterSchema.statics.insert = async function (character) {
  return await this.create(character);
};

characterSchema.statics.update = async function (_id, character) {
  const updating = await this.updateOne({ _id }, character);
  return updating;
};

characterSchema.statics.delete = async function (_id) {
  const deleted = await this.deleteOne({ _id });
  return deleted;
};

module.exports = characterSchema;
