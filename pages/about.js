import Layout from "../components/Layout";
import Head from "next/head";

const skills = [
  "HTML & CSS",
  "JavaScript",
  "React",
  "Next.js",
  "Spring Boot",
  "PHP",
  "MySQL",
  "WordPress",
  "Responsive Web Design",
  "OOP",
  "Tailwind CSS",
  "Testing",
];

const timeline = [
  {
    period: "Feb 2024 – Apr 2025",
    title: "Inventory Controller, SAFCO (Dubai, UAE)",
    description:
      "Streamlined inventory verification processes and led audits maintaining over 98% accuracy, supporting a £100K profit increase.",
  },
  {
    period: "Dec 2021 – Nov 2023",
    title: "Systems Engineer, Infosys Limited (Bangalore, India)",
    description:
      "Coordinated cross-functional teams for timely content updates and responsive design enhancements across platforms.",
  },
  {
    period: "Aug 2020 – Nov 2021",
    title: "Front End Developer, Serventys Technologies (Mumbai, India)",
    description:
      "Delivered responsive websites and dynamic JavaScript features that increased user engagement and conversion rates.",
  },
  {
    period: "Oct 2020",
    title: "B.Tech, Mohammad Ali Jauhar University (Rampur, India)",
    description: "Graduated with a Bachelor of Technology degree.",
  },
];

const certificates = [
  "Infosys Certified Java SE Developer",
  "Front End Development",
  "Responsive Web Design",
];

export default function About() {
  return (
    <Layout>
      <Head>
        <title>About | Khalid Khan</title>
      </Head>
      <section className="bg-white/70 dark:bg-gray-800/70 backdrop-blur rounded-xl p-6 shadow space-y-6">
        <h2 className="text-3xl font-bold">About Me</h2>
        <p className="text-gray-700 dark:text-gray-300 leading-relaxed">
          Passionate front-end developer and systems engineer with a strong
          background in inventory control and full-stack web development. I love
          building performant interfaces and scalable back-end services.
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
          <ul className="space-y-4">
            {timeline.map((item) => (
              <li key={item.title}>
                <h4 className="font-medium text-gray-900 dark:text-gray-100">
                  {item.period}
                </h4>
                <p className="text-gray-700 dark:text-gray-300">{item.title}</p>
                <p className="text-sm text-gray-600 dark:text-gray-400">
                  {item.description}
                </p>
              </li>
            ))}
          </ul>
        </div>
        <div>
          <h3 className="text-2xl font-semibold mb-3">Certificates</h3>
          <ul className="list-disc pl-5 text-gray-600 dark:text-gray-400 space-y-1">
            {certificates.map((c) => (
              <li key={c}>{c}</li>
            ))}
          </ul>
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
