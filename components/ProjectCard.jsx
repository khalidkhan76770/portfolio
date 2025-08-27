import Image from "next/image";
import { useState } from "react";
import clsx from "clsx";

export default function ProjectCard({ title, summary, image, tech = [], demo, code }) {
  const [expanded, setExpanded] = useState(false);
  const needsToggle = summary && summary.length > 100;

  return (
    <article className="card overflow-hidden">
      <div className="relative aspect-[16/10] bg-gray-50">
        {image && (
          <Image src={image} alt={title} fill className="object-contain" />
        )}
      </div>
      <div className="p-4">
        <h3 className="font-semibold">{title}</h3>
        {summary && (
          <>
            <p
              className={clsx(
                "text-sm text-gray-600 mt-1",
                !expanded && "line-clamp-2"
              )}
            >
              {summary}
            </p>
            {needsToggle && (
              <button
                className="text-xs text-blue-600 hover:underline mt-1"
                onClick={() => setExpanded((v) => !v)}
              >
                {expanded ? "Read less" : "Read more"}
              </button>
            )}
          </>
        )}
        <div className="flex flex-wrap gap-2 mt-3">
          {tech.map((t) => (
            <span key={t} className="chip">
              {t}
            </span>
          ))}
        </div>
        <div className="mt-4 flex gap-3">
          {demo ? (
            <a
              className="text-sm text-blue-600 hover:underline"
              href={demo}
              target="_blank"
              rel="noreferrer"
            >
              Live Demo
            </a>
          ) : (
            <span className="text-sm text-gray-600">Live Demo upon request</span>
          )}
          {code ? (
            <a
              className="text-sm text-blue-600 hover:underline"
              href={code}
              target="_blank"
              rel="noreferrer"
            >
              Live Code
            </a>
          ) : (
            <span className="text-sm text-gray-600">Live Code upon request</span>
          )}
        </div>
      </div>
    </article>
  );
}
