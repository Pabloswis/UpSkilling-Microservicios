const { Router } = require("express");
const controllers = require("../controllers");
const middleware = require("../middlewares");
const router = Router();

router.get("/", controllers.getCharacters);
router.post(
  "/create",
  middleware.characterValidation,
  controllers.createCharacter
);
router.put("/update/:_id", controllers.updateCharacter);
router.delete("/delete/:_id", controllers.deleteCharacter);

module.exports = router;
