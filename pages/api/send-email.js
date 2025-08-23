import { meta } from "@/lib/data";

export default async function handler(req, res) {
  if (req.method !== "POST") {
    return res.status(405).json({ message: "Method not allowed" });
  }

  const { name, email, subject, message } = req.body;
  if (!name || !email || !message) {
    return res.status(400).json({ message: "Missing required fields" });
  }

  const payload = {
    personalizations: [{ to: [{ email: meta.email }] }],
    from: { email: process.env.SENDGRID_FROM_EMAIL || meta.email },
    subject: subject || "New Contact Form Message",
    content: [{ type: "text/plain", value: `Name: ${name}\nEmail: ${email}\n\n${message}` }],
  };

  try {
    const sgRes = await fetch("https://api.sendgrid.com/v3/mail/send", {
      method: "POST",
      headers: {
        Authorization: `Bearer ${process.env.SENDGRID_API_KEY}`,
        "Content-Type": "application/json",
      },
      body: JSON.stringify(payload),
    });

    if (!sgRes.ok) {
      const errText = await sgRes.text();
      console.error("SendGrid error", sgRes.status, errText);
      return res.status(500).json({ message: "Failed to send email" });
    }

    return res.status(200).json({ message: "Email sent successfully" });
  } catch (error) {
    console.error(error);
    return res.status(500).json({ message: "Failed to send email" });
  }
}
