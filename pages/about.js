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
      <h2 className="text-2xl font-bold mb-4">About Me</h2>
      <p className="text-gray-700">
        Provide a brief bio, your skills, or background here.
      </p>
      <h3 className="text-xl font-semibold mt-6 mb-2">Skills</h3>
      <ul className="grid grid-cols-2 sm:grid-cols-3 gap-2">
        {skills.map((skill) => (
          <li key={skill} className="px-2 py-1 bg-gray-100 rounded">
            {skill}
          </li>
        ))}
      </ul>
    </Layout>
  );
}
