export default function handler(req, res) {
  if (req.method === "POST") {
    // In a real app, you'd send an email or store the message
    res.status(200).json({ ok: true });
  } else {
    res.setHeader("Allow", ["POST"]);
    res.status(405).end("Method Not Allowed");
  }
}
