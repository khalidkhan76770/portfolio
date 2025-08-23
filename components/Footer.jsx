import { meta } from "@/lib/data";

export default function Footer() {
  return (
    <footer className="border-t mt-16">
      <div className="section py-10 text-sm text-gray-600 flex flex-col md:flex-row items-center justify-between gap-4">
        <p>© {new Date().getFullYear()} Khalid Khan</p>
        <div className="flex gap-4">
          <a href="https://github.com/khalidkhan76770" target="_blank" rel="noreferrer" className="hover:text-blue-600">GitHub</a>
          <a href="https://www.linkedin.com/in/khalidkhan76770" target="_blank" rel="noreferrer" className="hover:text-blue-600">LinkedIn</a>
          <a href={`mailto:${meta.email}`} className="hover:text-blue-600">{meta.email}</a>
        </div>
      </div>
    </footer>
  );
}
