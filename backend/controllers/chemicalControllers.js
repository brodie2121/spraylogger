const Chemical = require("../models/chemicalModel");
const asyncHandler = require("express-async-handler");
const res = require("express/lib/response");
const { notfound } = require("../middleware/errorMiddleware");

const getChemicals = asyncHandler(async (req, res) => {
  const chemicals = await Chemical.find({ log: req.log._id });
  res.json(chemicals);
});

const createChemical = asyncHandler(async (req, res) => {
  const { product_name, rate, tank_volume, total_product_used, gpa } = req.body;

  if (!product_name || !rate || !tank_volume || !total_product_used || !gpa) {
    res.status(400);
    throw new Error("Please fill in the fields");
  } else {
    const chemical = new Chemical({
      Log: req.Log._id,
      product_name,
      rate,
      tank_volume,
      total_product_used,
      gpa,
    });

    const createdChemical = await chemical.save();

    res.status(201).json(createdChemical);
  }
});

const getChemicalById = asyncHandler(async (req, res) => {
  const chemical = await Chemical.findById(req.params.id);

  if (chemical) {
    res.json(chemical);
  } else {
    res.status(400).json({ message: "Chemical not found" });
  }
});

const updateChemical = asyncHandler(async (req, res) => {
  const { product_name, rate, tank_volume, total_product_used, gpa } = req.body;

  const chemical = await Chemical.findById(req.params.id);

  if (chemical.log.toString() !== req.log._id.toString()) {
    res.status(401);
    throw new Error("You cannot perform this action");
  }
  if (chemical) {
    chemical.product_name = product_name;
    chemical.rate = rate;
    chemical.tank_volume = tank_volume;
    chemical.total_product_used = total_product_used;
    chemical.gpa = gpa;

    const updatedChemical = await chemical.save();
    res.json(updatedChemical);
  } else {
    res.status(404);
    throw new Error("Chemical not found");
  }
});

const deleteChemical = asyncHandler(async (req, res) => {
  const chemical = await Chemical.findById(req.params.id);

  if (chemical.log.toString() !== req.log._id.toString()) {
    res.status(401);
    throw new Error("You cannot perform this action");
  }

  if (chemical) {
    await chemical.remove();
    res.json({ message: "Chemical Removed" });
  } else {
    res.status(404);
    throw new Error("Chemical not found");
  }
});
module.exports = {
  getChemicals,
  createChemical,
  getChemicalById,
  updateChemical,
  deleteChemical,
};
