const { User } = require('../models/User');

let auth = (req, res, next) => {
  //인증 처리
  //client쿠키에서 토큰을 가져온다.
  //토큰을 복호화 후 유저를 찾는다.
  //유저가 있으면 인증 ok
  //유저가 없으면 인증 no
  let token = req.cookies.x_auth;

  User.findByToken(token, (err, user) => {
    if(err) throw err;
    if(!user) return res.json({ isAuth: false, error: true });
    req.token = token;
    req.user = user;
    next();
  });
}

module.exports = { auth };