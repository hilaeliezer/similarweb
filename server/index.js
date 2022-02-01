// server/index.js
const express = require("express");
const cors = require("cors");
const router = require("./routes/media");

const PORT = process.env.PORT || 5000;

const app = express();

app.use(cors());
app.use(express.json());
app.use("/api/media", router);

app.listen(PORT, () => {
  console.log(`Server listening on ${PORT}`);
});
