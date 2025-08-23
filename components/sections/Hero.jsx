import { meta } from "@/lib/data";

export default function Hero() {
  return (
    <section className="section section-pad">
      <p className="chip mb-4 w-fit">Open to Web Dev roles</p>
      <h1 className="text-4xl md:text-6xl font-bold tracking-tight">
        {meta.tagline}
      </h1>
      <p className="text-gray-600 mt-6 max-w-2xl">
        I build with React and Next.js, using Tailwind for fast, consistent UI.
        This portfolio is static-export friendly for GitHub Pages.
      </p>
      <div className="mt-8 flex flex-col sm:flex-row gap-3">
        <a href="#projects" className="btn-primary">View projects</a>
        <a href="/portfolio/resume.pdf" className="inline-flex items-center justify-center rounded-xl px-4 py-2 text-sm border">
          Download resume
        </a>
      </div>
    </section>
  );
}
