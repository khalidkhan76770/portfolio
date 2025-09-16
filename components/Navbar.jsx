"use client";

import { useState } from "react";
import Link from "next/link";

const links = [
  { href: "#projects", label: "Projects" },
  { href: "#experience", label: "Experience" },
  { href: "#skills", label: "Skills" },
  { href: "#contact", label: "Contact" },
];

export default function Navbar() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  return (
    <header className="sticky top-0 z-50 bg-white/80 backdrop-blur border-b">
      <div className="section py-3 flex items-center justify-between">
        <Link href="/" className="font-semibold">Khalid</Link>

        <nav className="hidden md:flex items-center gap-3">
          {links.map((link, index) => {
            const baseClasses =
              "inline-flex items-center justify-center rounded-xl px-4 py-2 text-sm font-medium transition focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-blue-600";
            const variantClasses =
              index === links.length - 1
                ? "bg-blue-600 text-white hover:bg-blue-700"
                : "text-gray-700 hover:text-blue-600 hover:bg-blue-50";

            return (
              <a
                key={link.href}
                href={link.href}
                className={`${baseClasses} ${variantClasses}`}
              >
                {link.label}
              </a>
            );
          })}
        </nav>

        <button
          type="button"
          className="md:hidden inline-flex items-center justify-center rounded-xl border border-gray-200 bg-white px-4 py-2 text-sm font-medium text-gray-700 shadow-sm transition hover:bg-gray-50 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-blue-600"
          aria-expanded={mobileMenuOpen}
          aria-controls="mobile-nav"
          onClick={() => setMobileMenuOpen(prev => !prev)}
        >
          {mobileMenuOpen ? "Close" : "Menu"}
        </button>
      </div>

      {mobileMenuOpen && (
        <div
          id="mobile-nav"
          className="md:hidden border-t bg-white/95 backdrop-blur"
        >
          <div className="section py-3 flex flex-col gap-2">
            {links.map(link => (
              <a
                key={link.href}
                href={link.href}
                className="rounded-xl px-4 py-2 text-sm font-medium text-gray-700 transition hover:bg-blue-50 hover:text-blue-600"
                onClick={() => setMobileMenuOpen(false)}
              >
                {link.label}
              </a>
            ))}
          </div>
        </div>
      )}
    </header>
  );
}
