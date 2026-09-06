//const { Router } = require("express");
//const { getProfile } = require("../controller/profile.controller");
//const { login, register } = require("../controller/auth.controller");
//const router = Router();
//router.get("/profile", getProfile);

async function getProfile(req, res, next) {
  return res.send(req.user);
}
module.exports = {
  getProfile,
};
