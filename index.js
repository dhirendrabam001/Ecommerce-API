const express = require("express");
require("dotenv").config();
require("./Database/connection");
const userRouter = require("./Routes/authRouter");
const productRouter = require("./Routes/productRouter");
const cartRouter = require("./Routes/cartRouter");
const app = express();

app.get("/", (req, res) => {
  res.send("Hello Dhirendra Bam");
});
// Use cash everything
app.use(express.urlencoded({ extended: true }));
app.use(express.json());

// api routes
app.use("/api/user", userRouter);
app.use("/api/user", productRouter);
app.use("/api/user", cartRouter);

const PORT = process.env.PORT || 2800;
app.listen(PORT, () => {
  console.log(`Server Is Running Port Number:${PORT}`);
});
