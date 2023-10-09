const express = require("express");
const router = express.Router();
const enduserController = require("../controllers/endUserController");

router.get("/", enduserController.enduser_index);
router.post("/", enduserController.enduser_create_post);
router.get("/:id", enduserController.enduser_details);
router.patch("/:id", enduserController.enduser_update);
router.delete("/:id", enduserController.enduser_delete);

module.exports = router;
