const express = require("express");
const {
  getLogs,
  createLog,
  getLogById,
  updateLog,
  deleteLog,
} = require("../controllers/logController");

const { protect } = require("../middleware/authMiddleware.js");
const router = express.Router();

router.route("/").get(protect, getLogs);
router.route("/create").post(protect, createLog);
router
  .route("/:id")
  .get(getLogById)
  .put(protect, updateLog)
  .delete(protect, deleteLog);

module.exports = router;
