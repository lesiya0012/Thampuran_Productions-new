import nodemailer from "nodemailer";

export default async function handler(req, res) {
  if (req.method === "POST") {
    const { name, email, message } = req.body;

    try {
      const transporter = nodemailer.createTransport({
        host: process.env.SMTP_HOST,
        port: Number(process.env.SMTP_PORT),
        secure: false, // true if using port 465
        auth: {
          user: process.env.SMTP_USER,
          pass: process.env.SMTP_PASS,
        },
      });

      const mailOptions = {
        from: process.env.SMTP_USER,
        to: process.env.CONTACT_TO,
        subject: `New message from ${name}`,
        text: `Email: ${email}\n\nMessage:\n${message}`,
      };

      await transporter.sendMail(mailOptions);
      res.status(200).json({ success: true, message: "Email sent successfully!" });
    } catch (error) {
      console.error("Email error:", error.message);
      res.status(500).json({ success: false, message: "Error sending email." });
    }
  } else {
    res.status(405).json({ success: false, message: "Method not allowed." });
  }
}