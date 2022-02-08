const express = require("express");
const { getLogs, createLog } = require("../controllers/logController");

const { protect } = require("../middleware/authMiddleware.js");
const router = express.Router();

router.route("/").get(protect, getLogs);
router.route("/create").post(protect, createLog);

module.exports = router;
