import Layout from "../components/Layout";
import Link from "next/link";

export default function ErrorPage() {
  return (
    <Layout>
      <div className="text-center py-20">
        <h1 className="text-4xl font-bold mb-4">Something went wrong</h1>
        <Link href="/" className="text-blue-600 hover:underline">
          Back home
        </Link>
      </div>
    </Layout>
  );
}
