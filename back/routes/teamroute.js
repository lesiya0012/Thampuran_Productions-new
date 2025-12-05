// routes/teamRoutes.js
const express = require('express');
const router = express.Router();
const teammodel = require('../models/teammodel');

// Get all members
router.get('/', (req, res) => {
  res.json(teammodel);
});



module.exports = router;