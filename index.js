const express = require("express");
const connectDB = require("./config/db");
const router = require("./routers/auth.router");
const app = express();

app.use(express.json());

app.use("/api/auth", router);

connectDB();

app.listen(3000, () => console.log("Server started on port 3000"));
