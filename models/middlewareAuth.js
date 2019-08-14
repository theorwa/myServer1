const jwt = require('jsonwebtoken')
const config = require('./config')
const send = require('../models/send')

exports.checkToken = (req, res) => {
  console.log("check token");
  const token = req.body.token || req.query.token || req.headers["token"]
  // decode token
  if (token) {
    // verifies secret and checks exp
    jwt.verify(token, config.secret, function(err, decoded) {
        if (err) {
          return send.sendError(res, 'Unauthorized access: wrong token', 3)
        }
      req.decoded = decoded;
      // check pass email ..
      email = req.params.email || req.body.email
      if (email){
        if (req.decoded.email != email){
          send.sendError(res, "email dont match with token!", 3)
        }
      }
    });
  } else {
    // if there is no token
    // return an error
    return send.sendError(res, 'No token provided.', 3, 403)
  }
}


exports.refreshToken = (req, res) => {
  const refreshToken = req.body.refreshtoken || req.query.refreshtoken || req.headers["refreshtoken"]
  // decode token
  if (refreshToken) {
    // verifies secret and checks exp
    jwt.verify(refreshToken, config.refreshTokenSecret, function(err, decoded) {
        if (err) {
          return send.sendError(res, 'Unauthorized access: wrong refreshToken', 3)
        }
        console.log(decoded.email);
        const user = {
            "email": decoded.email
        }
        // do the database authentication here, with user name and password combination.
        const token = jwt.sign(user, config.secret, { expiresIn: config.tokenLife})
        const response = {
            "status": "generate new token",
            "token": token
        }
        return send.sendData(res, response)
    });
  } else {
    // if there is no token
    // return an error
    return send.sendError(res, 'No token provided.', 3)
  }
}

exports.generateToken = (req, res) => {
  console.log("generate token function ..")
  const postData = req.body;
    const user = {
        "email": postData.email
    }
    // do the database authentication here, with user name and password combination.
    const token = jwt.sign(user, config.secret, { expiresIn: config.tokenLife})
    const refreshToken = jwt.sign(user, config.refreshTokenSecret, { expiresIn: config.refreshTokenLife})
    const login = {
        "status": "Logged in",
        "token": token,
        "refreshtoken": refreshToken,
    }
    req.decoded = user
    res.locals.token = login
}


exports.goodToken = (req,res) => {
  console.log("good")
  send.sendData(res, true)
}