function errorHandler(err, req, res, next) {
  console.error(err);

  // Mongoose validation errors
  if (err.name === 'ValidationError') {
    const details = Object.values(err.errors).map(e => e.message);
    return res.status(400).json({ error: 'Validation error', details });
  }

  // Duplicate key (e.g., email unique)
  if (err.code === 11000) {
    const fields = Object.keys(err.keyValue);
    return res.status(409).json({ error: `Duplicate value for ${fields.join(', ')}` });
  }

  // JWT errors
  if (err.name === 'JsonWebTokenError') {
    return res.status(401).json({ error: 'Invalid token' });
  }
  if (err.name === 'TokenExpiredError') {
    return res.status(401).json({ error: 'Token expired' });
  }

  // Fallback
  res.status(500).json({ error: 'Server error' });
}

module.exports = errorHandler;