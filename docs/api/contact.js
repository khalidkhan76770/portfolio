import fs from 'fs/promises';

export default async function handler(req, res) {
  if (req.method !== 'POST') {
    res.setHeader('Allow', ['POST']);
    return res.status(405).json({ message: 'Method Not Allowed' });
  }

  const { name, email, message } = req.body || {};

  if (
    typeof name !== 'string' ||
    typeof email !== 'string' ||
    typeof message !== 'string' ||
    !name.trim() ||
    !message.trim() ||
    !/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email)
  ) {
    return res.status(400).json({ message: 'Invalid input' });
  }

  const entry = {
    name: name.trim(),
    email: email.trim(),
    message: message.trim(),
    timestamp: new Date().toISOString()
  };

  try {
    await fs.mkdir('data', { recursive: true });
    await fs.appendFile('data/contact-submissions.json', JSON.stringify(entry) + '\n');
    return res.status(200).json({ message: 'Message received' });
  } catch (err) {
    console.error('Failed to save contact submission', err);
    return res.status(500).json({ message: 'Failed to save message' });
  }
}
