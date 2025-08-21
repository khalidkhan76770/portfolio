import Layout from "../components/Layout";
import { useState } from "react";
import { useRouter } from "next/router";

export default function Contact() {
  const router = useRouter();
  const [form, setForm] = useState({ name: "", email: "", message: "" });
  const [status, setStatus] = useState(null);

  const handleChange = (e) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    if (!form.name || !form.email || !form.message) {
      setStatus({ type: "error", message: "Please complete all fields." });
      return;
    }

    try {
      const res = await fetch(`${router.basePath}/api/contact`, {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(form),
      });

      if (res.ok) {
        setStatus({ type: "success", message: "Message sent!" });
        setForm({ name: "", email: "", message: "" });
      } else {
        setStatus({ type: "error", message: "Something went wrong." });
      }
    } catch (err) {
      setStatus({ type: "error", message: "Something went wrong." });
    }
  };

  return (
    <Layout>
      <h2 className="text-2xl font-bold mb-4">Contact</h2>
      <p className="text-gray-700 mb-6">
        Interested in working together? Fill out the form below or send me an email.
      </p>
      <form className="grid gap-4 max-w-md" onSubmit={handleSubmit}>
        <input
          type="text"
          name="name"
          placeholder="Your name"
          className="border rounded p-2"
          value={form.name}
          onChange={handleChange}
        />
        <input
          type="email"
          name="email"
          placeholder="Your email"
          className="border rounded p-2"
          value={form.email}
          onChange={handleChange}
        />
        <textarea
          rows="4"
          name="message"
          placeholder="Message"
          className="border rounded p-2"
          value={form.message}
          onChange={handleChange}
        />
        <button className="bg-blue-600 text-white py-2 rounded" type="submit">
          Send
        </button>
      </form>
      {status && (
        <p
          className={`mt-4 ${
            status.type === "success" ? "text-green-600" : "text-red-600"
          }`}
        >
          {status.message}
        </p>
      )}
    </Layout>
  );
}
