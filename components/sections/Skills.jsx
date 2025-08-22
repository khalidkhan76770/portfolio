import { skills } from "@/lib/data";

function Group({ title, items }) {
  return (
    <div className="card p-5">
      <h3 className="font-semibold">{title}</h3>
      <div className="mt-3 flex flex-wrap gap-2">
        {items.map((s) => <span key={s} className="chip">{s}</span>)}
      </div>
    </div>
  );
}

export default function Skills() {
  return (
    <section id="skills" className="section section-pad">
      <h2 className="text-2xl md:text-3xl font-semibold">Skills</h2>
      <div className="mt-6 grid sm:grid-cols-2 lg:grid-cols-4 gap-4">
        <Group title="Frontend" items={skills.frontend} />
        <Group title="Backend" items={skills.backend} />
        <Group title="Other" items={skills.other} />
        <Group title="Tools" items={skills.tools} />
      </div>
    </section>
  );
}
