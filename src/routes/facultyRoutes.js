const express = require("express");
const router = express.Router();

const FacultyController = require("../controllers/facultyController");
const { upload } = require("../middlewares/updateMulter");
const {
  isAdmin,
  isManager,
  isCoordinator,
} = require("../middlewares/checkRole");

router.get("/delete/:id", isAdmin, FacultyController.delete);
router.post("/update/:id", isCoordinator, FacultyController.update);
router.post(
  "/store",
  upload.single("image"),
  isManager,
  FacultyController.store
);
router.use("/", FacultyController.index);

module.exports = router;
