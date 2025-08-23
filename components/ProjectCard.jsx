import Image from "next/image";

export default function ProjectCard({ title, summary, image, tech = [], demo, code }) {
  return (
    <article className="card overflow-hidden">
      <div className="relative aspect-[16/10] bg-gray-50">
        {image && (
          <Image src={image} alt={title} fill className="object-cover" />
        )}
      </div>
      <div className="p-4">
        <h3 className="font-semibold">{title}</h3>
        {summary && (
          <p className="text-sm text-gray-600 line-clamp-2 mt-1">{summary}</p>
        )}
        <div className="flex flex-wrap gap-2 mt-3">
          {tech.map((t) => (
            <span key={t} className="chip">{t}</span>
          ))}
        </div>
        <div className="mt-4 flex gap-3">
          {demo && demo !== "#" && (
            <a
              className="text-sm text-blue-600 hover:underline"
              href={demo}
              target="_blank"
              rel="noreferrer"
            >
              Live Demo
            </a>
          )}
          {code && (
            <a
              className="text-sm text-blue-600 hover:underline"
              href={code}
              target="_blank"
              rel="noreferrer"
            >
              Live Code
            </a>
          )}
        </div>
      </div>
    </article>
  );
}
