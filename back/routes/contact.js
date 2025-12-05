const express = require('express');
const { requireFields } = require('../utils/validator');
const { sendMail } = require('../config/mailer');
const Message = require('../models/message');

const router = express.Router();

// POST /api/contact
router.post('/contact', async (req, res, next) => {
  try {
    const error = requireFields(['name', 'email', 'message'], req.body);
    if (error) return res.status(400).json({ error });

    const { name, email, message } = req.body;

    // Save message in DB
    const saved = await Message.create({ name, email, message });

    // Send email to studio/admin
    const subject = `New contact message from ${name}`;
    const to = process.env.CONTACT_TO || process.env.SMTP_USER; // fallback
    const from = process.env.SMTP_USER;

    const text = `From: ${name} <${email}>\n\n${message}`;
    const html = `
      <p><strong>From:</strong> ${name} &lt;${email}&gt;</p>
      <p><strong>Message:</strong></p>
      <p>${message.replace(/\n/g, '<br/>')}</p>
      <hr/>
      <small>Message ID: ${saved._id}</small>
    `;

    await sendMail({ from, to, subject, text, html });

    res.status(201).json({ message: 'Message received and email sent', data: saved });
  } catch (err) {
    next(err);
  }
});

module.exports = router;