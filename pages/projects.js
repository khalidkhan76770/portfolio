import Layout from "../components/Layout";
import ProjectCard from "../components/ProjectCard";

const sampleProjects = [
  {
    title: "Portfolio Website",
    description: "Personal portfolio built with Next.js and Tailwind CSS.",
    image: "https://via.placeholder.com/600x400?text=Project+1",
    link: "https://khalidkhan76770.github.io/portfolio/",
    github: "https://github.com/khalidkhan76770/portfolio",
    tech: ["Next.js", "Tailwind"],
  },
  {
    title: "Weather App",
    description: "Displays weather information for locations using OpenWeatherMap API.",
    image: "https://via.placeholder.com/600x400?text=Project+2",
    link: "https://example.com/weather",
    github: "https://github.com/khalidkhan76770/weather-app",
    tech: ["React", "API"],
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
