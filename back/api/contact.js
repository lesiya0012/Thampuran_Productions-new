export default function handler(req, res) {
  if (req.method === 'POST') {
    const { name, email, message } = req.body;
    res.status(200).json({ message: 'Message received!' });
  } else {
    res.status(405).json({ message: 'Method not allowed' });
  }
}