const express = require("express");
const {
  getChemicals,
  createChemical,
  getChemicalById,
  updateChemical,
  deleteChemical,
} = require("../controllers/chemicalControllers");

const { protect } = require("../middleware/authMiddleware.js");
const router = express.Router();

router.route("/").get(protect, getChemicals);
router.route("/create").post(protect, createChemical);
router
  .route("/:id")
  .get(getChemicalById)
  .put(protect, updateChemical)
  .delete(protect, deleteChemical);

module.exports = router;
