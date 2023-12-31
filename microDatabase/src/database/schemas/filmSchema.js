const { Schema } = require("mongoose");

const filmSchema = new Schema({
  _id: String,
  title: String,
  opening_crawl: String,
  director: String,
  producer: String,
  release_date: Date,
  characters: [{ type: String, ref: "character" }],
  planets: [{ type: String, ref: "planet" }],
});

filmSchema.statics.list = async function () {
  return await this.find()
    .populate("characters", ["id", "name"])
    .populate("planets", ["id", "name"]);
};

filmSchema.statics.get = async function (id) {
  return await this.findById(id)
    .populate("characters", ["id", "name"])
    .populate("planets", ["id", "name"]);
};

filmSchema.statics.insert = async function (film) {
  return await this.create(film);
};

filmSchema.statics.update = async function (_id, film) {
  const updating = await this.updateOne({ _id }, film);
  return updating;
};

filmSchema.statics.delete = async function (_id) {
  const deleted = await this.deleteOne({ _id });
  return deleted;
};

module.exports = filmSchema;
