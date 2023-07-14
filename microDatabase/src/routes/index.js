const { Router } = require("express");
const store = require("../database");
const { validateModel, checkId } = require("../middlewares");
const router = Router();

router.get("/:model", validateModel, async (req, res) => {
  const { model } = req.params;
  const response = await store[model].list();
  res.status(200).json(response);
});

router.get("/:model/:id", validateModel, async (req, res) => {
  const { model, id } = req.params;
  const response = await store[model].get(id);
  res.status(200).json(response);
});

router.post("/:model/create", validateModel, async (req, res) => {
  const { model } = req.params;

  const response = await store[model].insert(req.body);
  res.status(201).json({
    message: "Created successfully!",
    data: response,
  });
});

router.put("/:model/update/:_id", async (req, res) => {
  const { model, _id } = req.params;
  const response = await store[model].update(_id, req.body);

  res.status(200).json({
    message: response.modifiedCount
      ? "Updated Successfully!"
      : "Update Unsatisfactory",
  });
});

router.delete("/:model/delete/:_id", checkId, async (req, res) => {
  const { model, _id } = req.params;
  const response = await store[model].delete(_id);
  res.status(200).json({
    message: `Deleted ${response.deletedCount} item from the database`,
  });
});

module.exports = router;

//Todo: Modularizar controladores
//Todo: implementar manejo de errores y middlewares
