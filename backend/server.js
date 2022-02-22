const express = require("express");
const dotenv = require("dotenv");
const logs = require("./data/logs");
const cors = require("cors");
const connectDB = require("./config/db");
const userRoutes = require("./routes/userRoutes");
const logRoutes = require("./routes/logRoutes");
const chemicalRoutes = require("./routes/chemicalRoutes");
const { notfound, errorHandler } = require("./middleware/errorMiddleware");

const PORT = process.env.PORT || 3001;

const app = express();
dotenv.config();
connectDB();
app.use(express.json());

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

app.use("/users", userRoutes);
app.use("/logs", logRoutes);
app.use("/chemicals", chemicalRoutes);

app.use(notfound);
app.use(errorHandler);

app.use(cors(corsOptions));
app.listen(3001, console.log(`server started on PORT ${PORT}`));
