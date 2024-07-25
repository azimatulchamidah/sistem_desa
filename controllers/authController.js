// controllers/authController.js
const jwt = require('jsonwebtoken');
const User = require('../models/user'); // Asumsikan Anda memiliki model User
const secret = process.env.ACCESS_TOKEN_SECRET;

exports.login = async (req, res) => {
  try {
    const { username, password } = req.body;
    const user = await User.findOne({ username });

    if (!user || !user.verifyPassword(password)) {
      return res.status(401).send({ message: 'Kredensial tidak valid' });
    }

    const token = jwt.sign({ id: user._id, role: user.role }, secret, { expiresIn: '1h' });

    res.status(200).send({ token });
  } catch (err) {
    res.status(500).send(err);
  }
};
