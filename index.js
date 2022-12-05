const express = require("express");

const app = express();
port = 9000;

app.use("/", (req, res) => {
  res.status(200).json({
    data: "hi",
  });
});

app.listen(port, (err) => console.log(`working on port : ${port}`));
