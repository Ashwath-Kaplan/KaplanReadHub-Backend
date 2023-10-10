require("dotenv").config();
const express = require("express");
const cors = require("cors");
const userRoutes = require("./routes/user-routes");
const bookRoutes = require("./routes/book-routes");

const app = express();

app.use(cors());
app.use(express.json());

app.use("/kaplanreadhub/users/", userRoutes);
app.use("/kaplanreadhub/books/", bookRoutes);

const port = process.env.PORT || 3000;
app.listen(port, () => {
  console.log(`Example app listening on port ${port}`);
});
