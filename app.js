require("dotenv").config();
const express = require("express");
const app = express();
const fs = require("fs");
const bodyParser = require("body-parser");
const merchantRouter = require("./routes/merchant");
const productRouter = require("./routes/product");

app.use(bodyParser.json());
app.use("/merchant", merchantRouter);
app.use("/product", productRouter);

app.listen(process.env.PORT, () => {
  console.log(`Listening to port ${process.env.PORT}`);
});
