const { Router } = require("express");
const controllers = require("../controllers");
const middleware = require("../middlewares");
const router = Router();

router.get("/", controllers.getFilms);
router.post("/create", middleware.filmValidation, controllers.createFilm);
router.put("/update/:id", controllers.updateFilm);
router.delete("/delete/:id", controllers.deleteFilm);
module.exports = router;
