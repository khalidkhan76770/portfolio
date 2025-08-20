import Layout from "../components/Layout";
import ProjectCard from "../components/ProjectCard";

const sampleProjects = [
  {
    title: "Project One",
    description: "Brief description of project one.",
    image: "/images/project1.jpg",
  },
  {
    title: "Project Two",
    description: "Brief description of project two.",
    image: "/images/project2.jpg",
  },
];

export default function Projects() {
  return (
    <Layout>
      <h2 className="text-2xl font-bold mb-6">Projects</h2>
      <div className="grid md:grid-cols-2 gap-6">
        {sampleProjects.map((p) => (
          <ProjectCard key={p.title} {...p} />
        ))}
      </div>
    </Layout>
  );
}
