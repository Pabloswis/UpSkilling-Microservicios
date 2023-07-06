const { Router } = require("express");
const controllers = require("../controllers");

const router = Router();

router.get("/", controllers.getFilms);
router.post("/", controllers.createFilm);
router.put("/", controllers.updateFilm);
module.exports = router;
