import { meta } from "@/lib/data";

export default function Hero() {
  return (
    <section
      className="section-pad bg-[url('/portfolio/noimage.jpg')] bg-cover bg-center"
    >
      <div className="section">
        <p className="chip mb-4 w-fit">Open to Web Dev roles</p>
        <h1 className="text-4xl md:text-6xl font-bold tracking-tight">
          {meta.tagline}
        </h1>
        <p className="text-gray-600 mt-6 max-w-2xl">
          I build responsive interfaces with React, Next.js, and Tailwind, and
          develop robust backends with Node and PHP.
        </p>
        <div className="mt-8 flex flex-col sm:flex-row gap-3">
          <a href="#projects" className="btn-primary">View projects</a>
          <a
            href="/portfolio/resume.pdf"
            className="inline-flex items-center justify-center rounded-xl px-4 py-2 text-sm border"
          >
            Download resume
          </a>
        </div>
      </div>
    </section>
  );
}
