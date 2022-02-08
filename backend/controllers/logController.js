const Log = require("../models/logModel");
const asyncHandler = require("express-async-handler");

const getLogs = asyncHandler(async (req, res) => {
  const logs = await Log.find();
  res.json(logs);
});

module.exports = { getLogs };
