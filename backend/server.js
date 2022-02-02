const express = require("express");
const dotenv = require("dotenv");

const app = express();

const PORT = process.env.PORT || 3000;

app.listen(3000, console.log(`server started on PORT ${PORT}`));
