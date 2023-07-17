const { Router } = require("express");
const controllers = require("../controllers");
const middleware = require("../middlewares");
const router = Router();

router.get("/", controllers.getPlanets);
router.post("/create", middleware.planetValidation, controllers.createPlanet);
router.put("/update/:_id", controllers.updatePlanet);
router.delete("/delete/:_id", controllers.deletePlanet);

module.exports = router;

//ToDo: Completar las rutas
//ToDo: agregar middlewares
