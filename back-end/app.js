const express = require("express");
const app = express();
const port = 3000;

const routes = require("./routes/authRoute");
const routes = require("./routes/registerRoute");
const routes = require("./routes/categoryRoute");

app.use(express.json());

app.use("/api", routes);

app.listen(port, () => {
  console.log(`Server berjalan di http://localhost:${port}`);
});
