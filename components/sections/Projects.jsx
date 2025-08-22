import Image from "next/image";
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
          <article key={p.slug} className="card overflow-hidden">
            <div className="relative aspect-[16/10] bg-gray-50">
              {/* Use next/image for remote URLs that match next.config images */}
              {p.image && (
                <Image src={p.image} alt={p.title} fill className="object-cover" />
              )}
            </div>
            <div className="p-4">
              <h3 className="font-semibold">{p.title}</h3>
              <p className="text-sm text-gray-600 line-clamp-2 mt-1">{p.summary}</p>
              <div className="flex flex-wrap gap-2 mt-3">
                {p.tech.map(t => <span key={t} className="chip">{t}</span>)}
              </div>
              <div className="mt-4 flex gap-3">
                {p.demo && p.demo !== "#" && <a className="text-sm text-blue-600 hover:underline" href={p.demo} target="_blank" rel="noreferrer">Live Demo</a>}
                {p.code && <a className="text-sm text-blue-600 hover:underline" href={p.code} target="_blank" rel="noreferrer">Live Code</a>}
              </div>
            </div>
          </article>
        ))}
      </div>
    </section>
  );
}
