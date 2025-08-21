import Link from "next/link";
import { useRouter } from "next/router";
import { useState } from "react";

const navItems = [
  { href: "/", label: "Home" },
  { href: "/projects", label: "Projects" },
  { href: "/about", label: "About" },
  { href: "/contact", label: "Contact" },
];

export default function Header() {
  const router = useRouter();
  const [open, setOpen] = useState(false);

  return (
    <header className="sticky top-0 backdrop-blur bg-white/80 shadow z-10">
      <div className="max-w-4xl mx-auto flex justify-between items-center px-6 py-4">
        <Link href="/" className="flex items-center space-x-2">
          <img
            src="https://via.placeholder.com/32"
            alt="Logo"
            className="h-8 w-8 rounded-full"
          />
          <span className="text-xl font-bold bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent">
            Khalid Khan
          </span>
        </Link>

        <button
          className="md:hidden"
          onClick={() => setOpen(!open)}
          aria-label="Toggle navigation"
        >
          <svg
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 24 24"
            strokeWidth={1.5}
            stroke="currentColor"
            className="w-6 h-6"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              d="M3.75 5.25h16.5M3.75 12h16.5m-16.5 6.75h16.5"
            />
          </svg>
        </button>

        <nav
          className={`${open ? "block" : "hidden"} md:block space-y-2 md:space-y-0 md:space-x-6 md:flex`}
        >
          {navItems.map(({ href, label }) => (
            <Link
              key={href}
              href={href}
              className={`block md:inline px-2 py-1 rounded transition-colors hover:text-blue-600 ${
                router.pathname === href ? "text-blue-600 font-semibold" : "text-gray-700"
              }`}
            >
              {label}
            </Link>
          ))}
        </nav>
      </div>
    </header>
  );
}
