import Layout from "../components/Layout";
import ProjectCard from "../components/ProjectCard";
import SEO from "../components/SEO";

const projects = [
  {
    title: "Inventory Management Dashboard",
    description:
      "Dashboard for tracking stock levels and enforcing FIFO principles to reduce product loss.",
    image: "https://via.placeholder.com/600x400?text=Inventory",
    link: "https://example.com/inventory",
    github: "https://github.com/khalidkhan76770/inventory-dashboard",
    tech: ["React", "Spring Boot", "MySQL"],
  },
  {
    title: "Responsive Portfolio",
    description:
      "This website showcasing my work and skills with a focus on accessibility and performance.",
    image: "https://via.placeholder.com/600x400?text=Portfolio",
    link: "https://khalidkhan76770.github.io/portfolio/",
    github: "https://github.com/khalidkhan76770/portfolio",
    tech: ["Next.js", "Tailwind CSS"],
  },
  {
    title: "Weather App",
    description:
      "Displays weather information for locations using OpenWeatherMap API.",
    image: "https://via.placeholder.com/600x400?text=Weather+App",
    link: "https://example.com/weather",
    github: "https://github.com/khalidkhan76770/weather-app",
    tech: ["React", "API"],
  },
  {
    title: "E-commerce CMS",
    description:
      "Customizable storefront with WordPress and Shopify integrations for small businesses.",
    image: "https://via.placeholder.com/600x400?text=E-commerce",
    link: "https://example.com/store",
    github: "https://github.com/khalidkhan76770/ecommerce-cms",
    tech: ["PHP", "WordPress", "Shopify"],
  },
  {
    title: "Task Manager API",
    description:
      "REST API for managing tasks with user authentication and JWT protection.",
    image: "https://via.placeholder.com/600x400?text=Task+API",
    link: "https://example.com/tasks",
    github: "https://github.com/khalidkhan76770/task-manager",
    tech: ["Node.js", "Express", "MongoDB"],
  },
  {
    title: "Blog Platform",
    description:
      "Full-stack blog with Markdown support, user roles, and responsive design.",
    image: "https://via.placeholder.com/600x400?text=Blog",
    link: "https://example.com/blog",
    github: "https://github.com/khalidkhan76770/blog-platform",
    tech: ["Next.js", "Tailwind", "MongoDB"],
  },
];

export default function Projects() {
  return (
    <Layout>
      <SEO title="Projects | Khalid Khan" description="A selection of web development projects by Khalid Khan." />
      <section className="space-y-6">
        <h2 className="text-3xl font-bold">Projects</h2>
        <div className="grid md:grid-cols-2 gap-6">
          {projects.map((p) => (
            <ProjectCard key={p.title} {...p} />
          ))}
        </div>
      </section>
    </Layout>
  );
}
