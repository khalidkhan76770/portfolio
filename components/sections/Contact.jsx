"use client";

import { useState } from "react";

export default function Contact() {
  const [status, setStatus] = useState("");

  const handleSubmit = async (e) => {
    e.preventDefault();
    setStatus("");
    const formData = new FormData(e.target);
    formData.append("access_key", process.env.NEXT_PUBLIC_WEB3FORMS_ACCESS_KEY);
    const data = Object.fromEntries(formData.entries());

    try {
      const res = await fetch("https://api.web3forms.com/submit", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
          Accept: "application/json",
        },
        body: JSON.stringify(data),
      });
      const result = await res.json();
      if (res.ok && result.success) {
        setStatus("Your mail has been sent successfully.");
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
      <div className="card p-6 max-w-md">
        <h2 className="text-2xl md:text-3xl font-semibold">Contact</h2>
        <form onSubmit={handleSubmit} className="mt-6 flex flex-col gap-2">
          <input name="name" placeholder="Full name" className="border rounded-xl p-3" required />
          <input
            type="email"
            name="email"
            placeholder="Email address"
            className="border rounded-xl p-3"
            required
          />
          <input
            name="subject"
            placeholder="Subject"
            className="border rounded-xl p-3"
            required
          />
          <textarea
            name="message"
            placeholder="Message"
            rows={4}
            className="border rounded-xl p-3"
            required
          />
          <button className="btn-primary self-end" type="submit">
            Send
          </button>
        </form>
        {status && (
          <p className="mt-4 text-xs text-green-600 text-center">{status}</p>
        )}
      </div>
    </section>
  );
}
