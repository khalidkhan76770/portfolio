import { experience } from "@/lib/data";

export default function Experience() {
  return (
    <section id="experience" className="section section-pad">
      <h2 className="text-2xl md:text-3xl font-semibold">Experience</h2>
      <ol className="mt-6 space-y-6">
        {experience.map((e) => (
          <li key={e.company} className="card p-5">
            <div className="flex items-center justify-between">
              <div>
                <h3 className="font-semibold">{e.role} · {e.company}</h3>
                <p className="text-sm text-gray-500">{e.period}</p>
              </div>
              <ul className="hidden md:flex gap-2 flex-wrap">
                {e.tech.map(t => <li key={t} className="chip">{t}</li>)}
              </ul>
            </div>
            <ul className="list-disc pl-5 mt-3 text-gray-700 text-sm space-y-1">
              {e.points.map((pt, i) => <li key={i}>{pt}</li>)}
            </ul>
          </li>
        ))}
      </ol>
    </section>
  );
}
