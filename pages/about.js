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
      <section className="bg-white/70 backdrop-blur rounded-xl p-6 shadow">
        <h2 className="text-3xl font-bold mb-4">About Me</h2>
        <p className="text-gray-700 leading-relaxed">
          Provide a brief bio, your skills, or background here.
        </p>
        <h3 className="text-2xl font-semibold mt-8 mb-4">Skills</h3>
        <ul className="grid grid-cols-2 sm:grid-cols-3 gap-3">
          {skills.map((skill) => (
            <li key={skill} className="px-3 py-2 bg-blue-50 text-blue-700 rounded">
              {skill}
            </li>
          ))}
        </ul>
      </section>
    </Layout>
  );
}
