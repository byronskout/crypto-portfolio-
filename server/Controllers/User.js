const User = require("../Models/Users");
const bcrypt = require("bcrypt");
const jwt = require("jsonwebtoken");

exports.createUser = async (req, res, next) => {
  const { username, email, password } = req.body;
  console.log("here");
  try {
    const user = await User.findOne({ email });
    if (user) {
      return res.json(`${email} is already registered`);
    }
    const newUser = await new User({
      username,
      email,
      password
    });
    const saltRounds = 10;
    const hashedPassword = await bcrypt.hash(password, saltRounds);
    newUser.password = hashedPassword;
    await newUser.save();

    res.json(newUser);
  } catch (error) {
    res.json(error);
  }
};
