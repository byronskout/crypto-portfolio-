const User = require("../Models/Users");
const bcrypt = require("bcrypt");
const jwt = require("jsonwebtoken");

exports.register = async (req, res, next) => {
  const { username, email, password } = req.body;
  try {
    const user = await User.findOne({ email });
    if (user) {
      return res.json(`${email} is already reqistered`);
    }
    //create new user
    const newUser = await new User({
      username,
      email,
      password
    });
    // hash password
    const saltRounds = 10;
    const hashedpassword = await bcrypt.hash(password, saltRounds);
    newUser.password = hashedpassword;
    //save user in database
    await newUser.save();
    res.json(newUser);
  } catch (error) {
    console.log(error.message);
  }
};

exports.login = async (req, res, next) => {
  const { email, password } = req.body;
  try {
    //find user in database if not return message
    const user = await User.findOne({ email });
    if (!user) {
      return res.json(`There is not account under ${email}`);
    }
    //check password
    const isValid = await bcrypt.compare(password, user.password);
    if (!isValid) {
      return res.json("Invalid email or password");
    }
    //create and assign jwt
    const token = jwt.sign({ _id: user._id }, process.env.jwtSecret);
    res.header("auth-token", token).send(token);
  } catch (error) {
    console.log(error.message);
  }
};

exports.addToPortfolio = async (req, res, next) => {
  const { coin, amount } = req.body;
  try {
    const user = await User.findOne({ _id: "5d83c3d99952eb2f99c85e9e" });
    const find = user.Portfolio.find(element => {
      return element.coin === coin;
    });
    console.log("find", find);
    const totalAmount = find
      ? Number(find.amount) + Number(amount)
      : Number(amount);

    const filter = user.Portfolio.filter(element => {
      return element.coin !== coin;
    });
    console.log("filter", filter);
    user.Portfolio = filter;
    const coinToAdd = {
      coin,
      amount: totalAmount
    };
    user.Portfolio.push(coinToAdd);
    await user.save();
    res.json(user);
  } catch (error) {
    console.log(error);
  }
};
