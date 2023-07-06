const { Router } = require("express");
const controllers = require("../controllers");

const router = Router();

router.get("/", controllers.getPlanets);
router.post("/", controllers.createPlanet);
router.put("/", controllers.updatePlanet);

module.exports = router;
