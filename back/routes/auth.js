const express = require('express');
const jwt = require('jsonwebtoken');
const User = require('../models/user');
const { requireFields } = require('../utils/validator'); 

const router = express.Router();

// POST /api/auth/signup
router.post('/signup', async (req, res, next) => {
  try {
    const error = requireFields(['name', 'email', 'password'], req.body);
    if (error) return res.status(400).json({ error });

    const { name, email, password } = req.body;

    // Check duplicate email
    const existing = await User.findOne({ email });
    if (existing) return res.status(409).json({ error: 'Email already registered' });

    const user = await User.create({ name, email, password });

    // Create token (optional to return on signup)
    const token = jwt.sign(
      { id: user._id.toString(), email: user.email },
      process.env.JWT_SECRET,
      { expiresIn: '7d' }
    );

    res.status(201).json({ user, token });
  } catch (err) {
    next(err);
  }
});

// POST /api/auth/login
router.post('/login', async (req, res, next) => {
  try {
    const error = requireFields(['email', 'password'], req.body);
    if (error) return res.status(400).json({ error });

    const { email, password } = req.body;

    // Need password field, so select('+password')
    const user = await User.findOne({ email }).select('+password');
    if (!user) return res.status(401).json({ error: 'Invalid email or password' });

    const isMatch = await user.comparePassword(password);
    if (!isMatch) return res.status(401).json({ error: 'Invalid email or password' });

    const token = jwt.sign(
      { id: user._id.toString(), email: user.email },
      process.env.JWT_SECRET,
      { expiresIn: '7d' }
    );

    res.json({ user: user.toJSON(), token });
  } catch (err) {
    next(err);
  }
});

module.exports = router;