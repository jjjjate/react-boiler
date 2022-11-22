const express = require("express");
const app = express();
const port = 5000;

const mongoose = require("mongoose");
mongoose
  .connect(
    "mongodb+srv://jaehee:123456789a@firstone.et5n8ni.mongodb.net/?retryWrites=true&w=majority",
    {
      useNewUrlparser: true,
    }
  )
  .then(() => console.log("mongoDB connected"))
  .catch((err) => console.log(err));

app.get("/", (req, res) => res.send());

app.listen(port, () => console.log(`Example app listening on port${port}`));
