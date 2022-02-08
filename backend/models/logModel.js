const mongoose = require("mongoose");

const logSchema = mongoose.Schema(
  {
    date_applied: {
      type: String,
      required: true,
    },
    operator: {
      type: String,
      required: true,
    },
    location: {
      type: String,
      required: true,
    },
    holes_treated: {
      type: String,
      required: true,
    },
    chemicals: {
      type: String,
      required: true,
    },
    notes: {
      type: String,
      required: true,
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

const Log = mongoose.model("Log", logSchema);

module.exports = Log;
