const mongoose = require("mongoose");

const chemicalSchema = mongoose.Schema(
  {
    product_name: {
      type: String,
      required: true,
    },
    rate: {
      type: String,
      required: true,
    },
    tank_volume: {
      type: String,
      required: true,
    },
    total_product_used: {
      type: String,
      required: true,
    },
    gpa: {
      type: String,
      required: true,
    },
    log: {
      type: mongoose.Schema.Types.ObjectId,
      required: true,
      ref: "Log",
    },
    user: {
      type: mongoose.Schema.Types.ObjectId,
      required: true,
      ref: "User",
    },
  },
  {
    timestamps: true,
  }
);

const Chemical = mongoose.model("Chemical", chemicalSchema);

module.exports = Chemical;
