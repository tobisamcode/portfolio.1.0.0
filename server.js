const express = require("express");

const router = require("./routes/home");

const app = express();

app.use(express.static("public"));
app.use("/tobisam", router);
app.listen(3000, () => {
  console.log("server is running of port 3000...");
});
