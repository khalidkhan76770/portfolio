import ProjectCard from "../ProjectCard";
import { projects } from "@/lib/data";

export default function Projects() {
  return (
    <section id="projects" className="section section-pad">
      <div className="flex items-end justify-between gap-4">
        <h2 className="text-2xl md:text-3xl font-semibold">Projects</h2>
        <span className="text-sm text-gray-500">4 placeholders + 2 UI showcases</span>
      </div>
      <div className="mt-8 grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
        {projects.map((p) => (
           <ProjectCard key={p.slug} {...p} />
        ))}
      </div>
    </section>
  );
}
