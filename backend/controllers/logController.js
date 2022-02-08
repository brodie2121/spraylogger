const Log = require("../models/logModel");
const asyncHandler = require("express-async-handler");
const res = require("express/lib/response");
const { notfound } = require("../middleware/errorMiddleware");

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

const getLogById = asyncHandler(async (req, res) => {
  const log = await Log.findById(req.params.id);

  if (log) {
    res.json(log);
  } else {
    res.status(400).json({ message: "Log not found" });
  }
});

const updateLog = asyncHandler(async (req, res) => {
  const { date_applied, operator, location, holes_treated, chemicals, notes } =
    req.body;

  const log = await Log.findById(req.params.id);

  if (log.user.toString() !== req.user._id.toString()) {
    res.status(401);
    throw new Error("You cannot perform this action");
  }
  if (log) {
    log.date_applied = date_applied;
    log.operator = operator;
    log.location = location;
    log.holes_treated = holes_treated;
    log.chemicals = chemicals;
    log.notes = notes;

    const updatedLog = await log.save();
    res.json(updatedLog);
  } else {
    res.status(404);
    throw new Error("Log not found");
  }
});
module.exports = { getLogs, createLog, getLogById, updateLog };
