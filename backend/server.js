const express = require("express");
const dotenv = require("dotenv");
const logs = require("./data/logs");
const cors = require("cors");

const PORT = process.env.PORT || 3001;
const app = express();

const corsOptions = {
  origin: "*",
  methods: "GET,HEAD,PUT,PATCH,POST,DELETE",
  preflightContinue: false,
  optionsSuccessStatus: 204,
  "Access-Control-Allow-Origin": "*",
  "Access-Control-Allow-Headers":
    "Origin, X-Requested-With, Content-Type, Accept",
};

app.get("/logs/mylogs", (req, res) => {
  res.json(logs);
});

app.use(cors(corsOptions));
app.listen(3001, console.log(`server started on PORT ${PORT}`));