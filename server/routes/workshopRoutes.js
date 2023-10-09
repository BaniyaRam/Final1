const express = require("express");
const router = express.Router();
const crudController = require("../controllers/workshopController");

router.get("/", crudController.workshop_index);
router.post("/", crudController.workshop_create_post);
router.get("/:id", crudController.workshop_details);
router.patch("/:id", crudController.workshop_update);
router.delete("/:id", crudController.workshop_delete);

module.exports = router;
