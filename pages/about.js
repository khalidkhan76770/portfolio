import Layout from "../components/Layout";

const skills = [
  "JavaScript",
  "React",
  "Next.js",
  "Node.js",
  "Tailwind CSS",
  "Testing",
];

export default function About() {
  return (
    <Layout>
      <section className="bg-white/70 dark:bg-gray-800/70 backdrop-blur rounded-xl p-6 shadow space-y-6">
        <h2 className="text-3xl font-bold">About Me</h2>
        <p className="text-gray-700 dark:text-gray-300 leading-relaxed">
          Provide a brief bio, your skills, or background here.
        </p>
        <div>
          <h3 className="text-2xl font-semibold mb-3">Skills</h3>
          <ul className="grid grid-cols-2 sm:grid-cols-3 gap-3">
            {skills.map((skill) => (
              <li key={skill} className="px-3 py-2 bg-blue-50 text-blue-700 rounded dark:bg-blue-900 dark:text-blue-100">
                {skill}
              </li>
            ))}
          </ul>
        </div>
        <div>
          <h3 className="text-2xl font-semibold mb-3">Timeline</h3>
          <p className="text-gray-600 dark:text-gray-400">Timeline placeholder</p>
        </div>
        <div>
          <h3 className="text-2xl font-semibold mb-3">Awards</h3>
          <p className="text-gray-600 dark:text-gray-400">Awards placeholder</p>
        </div>
        <a
          href="/cv.pdf"
          className="inline-block mt-4 px-4 py-2 bg-blue-600 text-white rounded hover:bg-blue-700"
          download
        >
          Download CV
        </a>
      </section>
    </Layout>
  );
}
