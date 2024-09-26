const express = require("express");
const cors = require("cors");
const app = express();

const PORT = 4000;

app.use(
  cors({
    origin: "*",
    credential: true,
  })
);

app.listen(PORT, () => {
  console.log(`server is active on ${PORT}`);
});
