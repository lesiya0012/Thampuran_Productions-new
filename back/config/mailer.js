const nodemailer = require('nodemailer');

function createTransport() {
  const { SMTP_HOST, SMTP_PORT, SMTP_USER, SMTP_PASS } = process.env;
  if (!SMTP_HOST || !SMTP_PORT || !SMTP_USER || !SMTP_PASS) {
    throw new Error('Missing SMTP configuration in .env');
  }
  return nodemailer.createTransport({
    host: SMTP_HOST,
    port: Number(SMTP_PORT),
    secure: false, // true for 465, false for 587
    auth: { user: SMTP_USER, pass: SMTP_PASS }
  });
}

async function sendMail({ from, to, subject, text, html }) {
  const transporter = createTransport();
  return transporter.sendMail({ from, to, subject, text, html });
}

module.exports = { sendMail };