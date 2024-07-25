const express = require('express');
const router = express.Router();
const User = require('../models/user'); // Model pengguna
const bcrypt = require('bcryptjs');
const jwt = require('jsonwebtoken');

router.post('/login', async (req, res) => {
  try {
    const { username, password } = req.body;
    
    // Cari pengguna berdasarkan username
    const user = await User.findOne({ username });
    if (!user) {
      return res.status(400).send({ message: 'Invalid credentials' });
    }
    
    // Periksa kecocokan password
    const isMatch = await bcrypt.compare(password, user.password);
    if (!isMatch) {
      return res.status(400).send({ message: 'Invalid credentials' });
    }
    
    // Buat token JWT
    const token = jwt.sign({ id: user._id, role: user.role }, process.env.ACCESS_TOKEN_SECRET, { expiresIn: '1h' });
    console.log('Generated Token:', token);
    
    res.send({ token });
  } catch (err) {
    console.error('Login error:', err);
    res.status(500).send({ message: 'Internal server error' });
  }
});

module.exports = router;
