const express = require("express");
const { getLogs } = require("../controllers/logController");

const { protect } = require("../middleware/authMiddleware.js");
const router = express.Router();

router.route("/").get(protect, getLogs);

//router.route("/:id");
//.get(getLogById)
//.delete(protect, DeleteLog)
//.put(protect, UpdateLog);
//router.route("/create").post(protect, CreateLog);

module.exports = router;
