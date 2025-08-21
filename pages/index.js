import Layout from "../components/Layout";
import Link from "next/link";
import { useEffect, useState } from "react";
import SEO from "../components/SEO";

const titles = [
  "Front-End Developer",
  "Systems Engineer",
  "Inventory Controller",
];

export default function Home() {
  const [current, setCurrent] = useState(0);

  useEffect(() => {
    const id = setInterval(() => {
      setCurrent((c) => (c + 1) % titles.length);
    }, 3000);
    return () => clearInterval(id);
  }, []);

  return (
    <Layout>
      <SEO
        title="Khalid Khan | Portfolio"
        description="Portfolio of Khalid Khan - front-end developer, systems engineer, and inventory controller based in India."
      />
      <section className="text-center py-20 bg-gradient-to-br from-blue-50 to-purple-100 dark:from-gray-700 dark:to-gray-800 rounded-xl shadow">
        <img
          src="https://avatars.githubusercontent.com/u/106541625?v=4"
          alt="Khalid Khan"
          className="w-32 h-32 rounded-full mx-auto mb-6 border-4 border-white shadow-lg"
        />
        <h2 className="text-4xl font-extrabold mb-3">Hello, I'm Khalid Khan</h2>
        <p className="mb-2 text-gray-700 dark:text-gray-300">Based in Patna, India</p>
        <p className="mb-8 text-gray-700 dark:text-gray-300 text-lg">
          I'm a <span className="text-blue-600">{titles[current]}</span>
        </p>
        <div className="flex justify-center gap-4 mb-8">
          <Link
            href="/projects"
            className="px-6 py-3 bg-blue-600 text-white rounded-md shadow hover:bg-blue-700 focus-visible:ring-2 focus-visible:ring-offset-2 focus-visible:ring-blue-500"
          >
            View Projects
          </Link>
          <Link
            href="/contact"
            className="px-6 py-3 border border-blue-600 text-blue-600 rounded-md hover:bg-blue-50 focus-visible:ring-2 focus-visible:ring-offset-2 focus-visible:ring-blue-500 dark:hover:bg-gray-700"
          >
            Contact Me
          </Link>
        </div>
        <div className="flex justify-center gap-6 text-gray-600 dark:text-gray-300">
          <a
            href="https://github.com/khalidkhan76770"
            aria-label="GitHub"
            className="hover:text-black"
            target="_blank"
            rel="noopener noreferrer"
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 16 16"
              fill="currentColor"
              className="w-6 h-6"
            >
              <path d="M8 0C3.58 0 0 3.58 0 8c0 3.54 2.29 6.53 5.47 7.59.4.07.55-.17.55-.38 0-.19-.01-.82-.01-1.49-2.01.37-2.53-.49-2.69-.94-.09-.23-.48-.94-.82-1.13-.28-.15-.68-.52-.01-.53.63-.01 1.08.58 1.23.82.72 1.21 1.87.87 2.33.66.07-.52.28-.87.51-1.07-1.78-.2-3.64-.89-3.64-3.95 0-.87.31-1.59.82-2.15-.08-.2-.36-1.02.08-2.12 0 0 .67-.21 2.2.82.64-.18 1.32-.27 2-.27.68 0 1.36.09 2 .27 1.53-1.04 2.2-.82 2.2-.82.44 1.1.16 1.92.08 2.12.51.56.82 1.27.82 2.15 0 3.07-1.87 3.75-3.65 3.95.29.25.54.73.54 1.48 0 1.07-.01 1.93-.01 2.2 0 .21.15.46.55.38A8.013 8.013 0 0 0 16 8c0-4.42-3.58-8-8-8z" />
            </svg>
          </a>
          <a
            href="https://www.linkedin.com/in/khalidkhan76770"
            aria-label="LinkedIn"
            className="hover:text-blue-600"
            target="_blank"
            rel="noopener noreferrer"
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 24 24"
              fill="currentColor"
              className="w-6 h-6"
            >
              <path d="M20.447 20.452H17.4V14.98c0-1.305-.026-2.986-1.819-2.986-1.82 0-2.098 1.42-2.098 2.885v5.573H10.436V9h2.924v1.561h.041c.406-.77 1.399-1.584 2.881-1.584 3.079 0 3.648 2.028 3.648 4.662v6.813zM5.337 7.433a1.7 1.7 0 1 1 0-3.402 1.7 1.7 0 0 1 0 3.402zM6.848 20.452H3.825V9h3.023v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.226.792 24 1.771 24h20.451C23.2 24 24 23.226 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z" />
            </svg>
          </a>
        </div>
      </section>
    </Layout>
  );
}
