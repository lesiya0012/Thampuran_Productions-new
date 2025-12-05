function requireFields(fields, body) {
  const missing = fields.filter(f => !(f in body) || body[f] === '');
  if (missing.length) {
    return `Missing fields: ${missing.join(', ')}`;
  }
  return null;
}

module.exports = { requireFields };
