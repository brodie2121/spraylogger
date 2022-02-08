const Log = require("../models/logModel");
const asyncHandler = require("express-async-handler");

const getLogs = asyncHandler(async (req, res) => {
  const logs = await Log.find({ user: req.user._id });
  res.json(logs);
});

const createLog = asyncHandler(async (req, res) => {
  const { date_applied, operator, location, holes_treated, chemicals, notes } =
    req.body;

  if (
    !date_applied ||
    !operator ||
    !location ||
    !holes_treated ||
    !chemicals ||
    !notes
  ) {
    res.status(400);
    throw new Error("Please fill in the fields");
  } else {
    const log = new Log({
      user: req.user._id,
      date_applied,
      operator,
      location,
      holes_treated,
      chemicals,
      notes,
    });

    const createdLog = await log.save();

    res.status(201).json(createdLog);
  }
});

module.exports = { getLogs, createLog };
