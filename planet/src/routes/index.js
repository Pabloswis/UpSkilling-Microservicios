const { Router } = require("express");
const controllers = require("../controllers");
const middleware = require("../middlewares");
const router = Router();

router.get("/", controllers.getPlanets);
router.post("/", middleware.planetValidation, controllers.createPlanet);
router.put("/", controllers.updatePlanet);

module.exports = router;

//ToDo: Completar las rutas
//ToDo: agregar middlewares
