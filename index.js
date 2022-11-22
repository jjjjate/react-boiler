const express = require("express");
const app = express();
const port = 5000;

const bodyParser = require("body-parser");
const { User } = require("./models/User");

const config = require("./config/key");

app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());

const mongoose = require("mongoose");
mongoose
  .connect(config.mongoURI, {
    useNewUrlparser: true,
  })
  .then(() => console.log("mongoDB connected"))
  .catch((err) => console.log(err));

app.get("/", (req, res) => res.send());

//회원가입을 위함
app.post("/api/user/register", (req, res) => {
  const user = new User(res.body);
  //회원가입할 때 필요한 정보를 client에서 가져온다
  //정보를 데이터베이스에 넣는다
  user.save((err, userInfo) => {
    if (err) return res.json({ success: false, err });
    return res.status(200).json({
      success: true,
    });
  });
});

app.listen(port, () => console.log(`Example app listening on port${port}`));
