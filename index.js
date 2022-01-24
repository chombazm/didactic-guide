const express = require("express");
const cors = require("cors");

const morgan = require("morgan");

const app = express();
const PORT = process.env.PORT || 5000;

app.use(cors());
app.use(express());
app.use(morgan("dev"));

app.get("/", (req, res) => {
  res.send("Lets dowit!!");
});

app.listen(PORT, () => {
  console.log(`Server connected at port ${PORT}`);
});
