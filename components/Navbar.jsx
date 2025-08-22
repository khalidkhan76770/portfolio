import Link from "next/link";

const links = [
  { href: "#projects", label: "Projects" },
  { href: "#experience", label: "Experience" },
  { href: "#skills", label: "Skills" },
  { href: "#contact", label: "Contact" },
];

export default function Navbar() {
  return (
    <header className="sticky top-0 z-50 bg-white/80 backdrop-blur border-b">
      <div className="section py-3 flex items-center justify-between">
        <Link href="/" className="font-semibold">Khalid</Link>
        <nav className="hidden md:flex gap-6">
          {links.map(l => (
            <a key={l.href} href={l.href} className="text-sm hover:text-blue-600">{l.label}</a>
          ))}
        </nav>
        <a href="#contact" className="btn-primary md:inline-flex">Contact</a>
      </div>
    </header>
  );
}
