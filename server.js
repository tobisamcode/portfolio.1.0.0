const express = require("express");

const router = require("./routes/home");
const app = express();

app.use("/tobisam", router);

app.listen(3000);
