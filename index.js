const express = require("express");
const connectDB = require("./config/db");
const authRouter = require("./routers/auth.router");

const productRouter = require("./routers/products.router");
const app = express();

const PORT = 3000 || process.env.PORT;

app.use(express.json());

app.use("/api/auth", authRouter);
app.use("/api/v1/", productRouter);

connectDB();

app.listen(PORT, () => console.log("Server started on port 3000"));
