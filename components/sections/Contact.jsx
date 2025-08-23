"use client";

import { useState } from "react";

export default function Contact() {
  const [status, setStatus] = useState("");

  const handleSubmit = async (e) => {
    e.preventDefault();
    setStatus("");
    const formData = new FormData(e.target);
    const data = Object.fromEntries(formData.entries());

    try {
      const res = await fetch("/api/send-email", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(data),
      });
      if (res.ok) {
        setStatus("Message sent successfully.");
        e.target.reset();
      } else {
        setStatus("Failed to send message. Please try again later.");
      }
    } catch {
      setStatus("Failed to send message. Please try again later.");
    }
  };

  return (
    <section id="contact" className="section section-pad mb-24">
      <div className="card p-6">
        <h2 className="text-2xl md:text-3xl font-semibold">Contact</h2>
        <form onSubmit={handleSubmit} className="mt-6 grid sm:grid-cols-2 gap-4">
          <input name="name" placeholder="Full name" className="border rounded-xl p-3" required />
          <input type="email" name="email" placeholder="Email address" className="border rounded-xl p-3" required />
          <input name="subject" placeholder="Subject" className="sm:col-span-2 border rounded-xl p-3" />
          <textarea name="message" placeholder="Message" rows={5} className="sm:col-span-2 border rounded-xl p-3" required />
          <div className="sm:col-span-2 flex items-center justify-between">
            <p className="text-sm text-gray-500">I reply quickly.</p>
            <button className="btn-primary" type="submit">Send</button>
          </div>
        </form>
        {status && <p className="mt-4 text-sm text-green-600">{status}</p>}
      </div>
    </section>
  );
}
