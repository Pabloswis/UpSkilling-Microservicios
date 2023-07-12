const { Schema } = require("mongoose");

const planetSchema = new Schema({
  _id: String,
  name: {
    type: String,
    required: true,
  },
  rotation_period: String,
  orbital_period: String,
  diameter: String,
  climate: String,
  gravity: String,
  terrain: String,
  surface_water: String,
  residents: [{ type: String, ref: "character" }],
  films: [{ type: String, ref: "film" }],
});

planetSchema.statics.list = async function () {
  return await this.find()
    .populate("residents", ["id", "name"])
    .populate("films", ["id", "title"]);
};

planetSchema.statics.get = async function (id) {
  return await this.findById(id)
    .populate("residents", ["id", "name"])
    .populate("films", ["id", "title"]);
};

planetSchema.statics.insert = async function (planet) {
  return await this.create(planet);
};

planetSchema.statics.update = async function (_id, planet) {
  const updating = await this.updateOne({ _id }, planet);
  return updating;
};

planetSchema.statics.delete = async function (_id) {
  const deleted = await this.deleteOne({ _id });
  return deleted;
};

module.exports = planetSchema;
