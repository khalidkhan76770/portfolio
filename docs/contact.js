import Layout from "../components/Layout";

export default function Contact() {
  return (
    <Layout>
      <h2 className="text-2xl font-bold mb-4">Contact</h2>
      <p className="text-gray-700 mb-6">
        Interested in working together? Fill out the form below or send me an email.
      </p>
      <form className="grid gap-4 max-w-md" method="POST" action="/api/contact">
        <input
          type="text"
          name="name"
          placeholder="Your name"
          className="border rounded p-2"
        />
        <input
          type="email"
          name="email"
          placeholder="Your email"
          className="border rounded p-2"
        />
        <textarea
          rows="4"
          name="message"
          placeholder="Message"
          className="border rounded p-2"
        />
        <button className="bg-blue-600 text-white py-2 rounded" type="submit">
          Send
        </button>
      </form>
    </Layout>
  );
}
