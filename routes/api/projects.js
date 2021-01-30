const router = require("express").Router();
const projectsController = require("../../controllers/projectsController");

// Matches with "/api/project"
router.route("/")
  .get(projectsController.findAll)
  .post(projectsController.create);

// Matches with "/api/project/:id"
router
  .route("/:id")
  .get(projectsController.findById)
  .put(projectsController.update)
  .delete(projectsController.remove);

module.exports = router;
