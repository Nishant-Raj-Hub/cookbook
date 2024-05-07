const User = require("../schema/User");

const createUser = async (req, res) => {
  const { name, email, password } = req.body;
  console.log(name, email, password);
  if (!email) {
    return res.send("email not fount!");
  }

  if (!password) {
    return res.send("password not found!");
  }

  if (!name) {
    return res.send("name not found!");
  }

  const check = await User.findOne({
    email,
  });
  if (check) {
    return res.status(400).send("user already exist!");
  }

  try {
    const user = await User.create({
      name,
      email,
      password,
    });
    res.status(200).send(user);
  } catch (err) {
    res.status(400).send(err);
    console.log(err);
  }
};

const getUser = async (req, res) => {
  const { email, password } = req.body;
  if (!email) {
    return res.send("email not fount!");
  }

  if (!password) {
    return res.send("password not found!");
  }

  try {
    const user = await User.findOne({
      email,
    });
    if (user) {
      return res.status(200).send(user);
    } else {
      return res.status(404).send("user not found!");
    }
  } catch (err) {
    res.status(400).send(err);
    console.log(err);
  }
};

module.exports = {
  createUser,
  getUser,
};
