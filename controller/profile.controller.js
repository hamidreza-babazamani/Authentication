//const { userModel } = require("../model/user.model");
//const {
//hashPassword,
//comparePassword,
//signToken,
//} = require("../utils/auth.util");

//async function register(req, res, next) {
// try {
//const { fullName, email, password } = req.body;
//   const user = await userModel.create({
//   fullName,
//email,
//  password: hashPassword(password),
//});
//   res.send(user);
// } catch (error) {
//   next(error);
// }
//}
async function getProfile(req, res, next) {
  return req.user;
}
module.exports = {
  getProfile,
};
