require("dotenv").config();
const express = require("express");
const cors = require("cors");
const routes = require("./routes/routes");

const app = express();

app.use(cors());
app.use(express.json());

app.use("/api/v1/kaplanreadhub/", routes);

const port = process.env.PORT || 3000;
app.listen(port, () => {
  console.log(`Example app listening on port ${port}`);
});
