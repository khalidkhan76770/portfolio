import Layout from "../components/Layout";
import { useState } from "react";
import { useRouter } from "next/router";

export default function Contact() {
  const router = useRouter();
  const [form, setForm] = useState({ name: "", email: "", message: "", nickname: "" });
  const [status, setStatus] = useState(null);

  const handleChange = (e) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    if (form.nickname) {
      // honeypot filled
      return;
    }
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
        setForm({ name: "", email: "", message: "", nickname: "" });
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
      <p className="text-gray-700 dark:text-gray-300 mb-6">
        Interested in working together? Fill out the form below or send me an email.
      </p>
      <form className="grid gap-4 max-w-md" onSubmit={handleSubmit} noValidate>
        <div className="hidden">
          <label htmlFor="nickname">Nickname</label>
          <input id="nickname" name="nickname" value={form.nickname} onChange={handleChange} tabIndex="-1" autoComplete="off" />
        </div>
        <div>
          <label htmlFor="name" className="block mb-1">Name</label>
          <input
            id="name"
            type="text"
            name="name"
            required
            className="border rounded p-2 w-full dark:bg-gray-700 dark:border-gray-600"
            value={form.name}
            onChange={handleChange}
          />
        </div>
        <div>
          <label htmlFor="email" className="block mb-1">Email</label>
          <input
            id="email"
            type="email"
            name="email"
            required
            className="border rounded p-2 w-full dark:bg-gray-700 dark:border-gray-600"
            value={form.email}
            onChange={handleChange}
          />
        </div>
        <div>
          <label htmlFor="message" className="block mb-1">Message</label>
          <textarea
            id="message"
            rows="4"
            name="message"
            required
            className="border rounded p-2 w-full dark:bg-gray-700 dark:border-gray-600"
            value={form.message}
            onChange={handleChange}
          />
        </div>
        <button className="bg-blue-600 text-white py-2 rounded hover:bg-blue-700" type="submit">
          Send
        </button>
      </form>
      <p className="mt-4" aria-live="polite">
        {status && (
          <span className={status.type === "success" ? "text-green-600" : "text-red-600"}>
            {status.message}
          </span>
        )}
      </p>
    </Layout>
  );
}
