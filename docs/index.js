import Layout from "../components/Layout";
import Link from "next/link";

export default function Home() {
  return (
    <Layout>
      <section className="text-center">
        <h2 className="text-3xl font-bold mb-4">Hello, I’m Your Name</h2>
        <p className="mb-6 text-gray-700">
          A short tagline about your skills or interests.
        </p>
        <Link href="/projects" className="px-4 py-2 bg-blue-600 text-white rounded">
          See my work
        </Link>
      </section>
    </Layout>
  );
}
