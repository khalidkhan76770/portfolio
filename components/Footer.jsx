import { useState } from "react";
import { meta } from "@/lib/data";

export default function Footer() {
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
        setStatus("Thanks! We'll be in touch.");
        e.target.reset();
      } else {
        setStatus("Submission failed. Please try again later.");
      }
    } catch {
      setStatus("Submission failed. Please try again later.");
    }
  };

  return (
    <footer className="border-t mt-16">
      <div className="section py-10 flex flex-col gap-8">
        <form onSubmit={handleSubmit} className="max-w-md mx-auto w-full flex flex-col gap-2">
          <input name="name" placeholder="Full name" className="border rounded-xl p-3" required />
          <input type="email" name="email" placeholder="Email address" className="border rounded-xl p-3" required />
          <textarea name="message" placeholder="Message" rows={4} className="border rounded-xl p-3" required />
          <button className="btn-primary self-end" type="submit">Send</button>
        </form>
        {status && <p className="text-xs text-green-600 text-center">{status}</p>}
        <div className="mt-4 text-sm text-gray-600 flex flex-col md:flex-row items-center justify-between gap-4">
          <p>© {new Date().getFullYear()} Khalid Khan</p>
          <div className="flex gap-4">
            <a href="https://github.com/khalidkhan76770" target="_blank" rel="noreferrer" className="hover:text-blue-600">GitHub</a>
            <a href="https://www.linkedin.com/in/khalidkhan76770" target="_blank" rel="noreferrer" className="hover:text-blue-600">LinkedIn</a>
            <a
              href={`mailto:${meta.email}`}
              target="_blank"
              rel="noreferrer"
              className="hover:text-blue-600"
            >
              Email
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
}
