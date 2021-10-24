const path = require("path");
const express = require("express");

const { Config, Constant } = require("./configs");

// 1. Init express
const app = express();

app.use(express.json({ limit: "50mb" }));
app.use(express.urlencoded({ limit: "50mb", extended: false }));

// 2. Setting Options
if (Config.ENABLE_CORS) {
  console.log("CORS is enabled ...");
  const cors = require("cors");
  app.use(cors());
}

// 3. Use Routes
app.use("", require("./routes"));
app.use(express.static(path.join(__dirname, "app")));

// 4. Start Express
const port = Config.APP_PORT;
app.listen(port, () => console.log(`Server started on port ${port}`));
