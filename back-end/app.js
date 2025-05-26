const express = require("express");
const app = express();
const port = 3000;

const routes = require("./src/routes/routes");

app.use(express.json());
app.use("/api", routes);

app.listen(port, () => {
  console.log(`Server berjalan di http://localhost:${port}`);
});
