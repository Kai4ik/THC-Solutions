const User = require("../models/users");
const bcrypt = require("bcryptjs");

exports.checkUser = async (req, res, next) => {
  try {
    const user = await User.findOne({ email: req.body.email });

    if (!user) {
      return res.status(200).json({
        error: "User Not Found",
        success: false,
      });
    }

    await bcrypt
      .compare(req.body.password, user.password)
      .then((existingUser) => {
        if (existingUser) {
          req.session.user = {
            username: user.username,
            email: user.email,
          };
          return res.status(200).json({
            user: user,
            success: true,
          });
        } else {
          return res.status(200).json({
            error: "Password is wrong",
            success: false,
          });
        }
      });
  } catch (err) {
    return res.status(500).json({
      error: "Internal Error",
    });
  }
};
