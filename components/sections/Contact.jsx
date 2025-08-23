"use client";

import { meta } from "@/lib/data";

export default function Contact() {
  const handleSubmit = (e) => {
    e.preventDefault();
    const formData = new FormData(e.target);
    const subject = encodeURIComponent(formData.get("subject") || "");
    const body = encodeURIComponent(
      `Name: ${formData.get("name")}\nEmail: ${formData.get("email")}\n\n${formData.get("message")}`
    );
    window.open(
      `https://mail.google.com/mail/?view=cm&fs=1&to=${meta.email}&su=${subject}&body=${body}`
    );
    e.target.reset();
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
      </div>
    </section>
  );
}
