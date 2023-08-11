const express = require("express");

const dotenv = require("dotenv");

const connectDatabase = require("./config/database");

//Config

dotenv.config({ path: "config/config.env" });

// Connecting to database
connectDatabase();

const urlRoute = require("./routes/urlRoute")
const app = express();

app.use(express.json());

app.use("/api/v1", urlRoute);

app.listen(process.env.PORT, () => console.log(`Server started at PORT: ${process.env.PORT}`))