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
          {links.map(link => {
            const linkClasses =
              "inline-flex items-center justify-center rounded-xl px-4 py-2 text-sm font-medium text-gray-700 transition hover:bg-blue-50 hover:text-blue-600 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-blue-600";

            return (
              <a key={link.href} href={link.href} className={linkClasses}>
                {link.label}
              </a>
            );
          })}
        </nav>

        <button
          type="button"
          className="md:hidden inline-flex h-11 w-11 items-center justify-center rounded-xl border border-gray-200 bg-white p-2 text-gray-700 shadow-sm transition hover:bg-gray-50 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-blue-600"
          aria-expanded={mobileMenuOpen}
          aria-controls="mobile-nav"
          aria-label={mobileMenuOpen ? "Close navigation menu" : "Open navigation menu"}
          onClick={() => setMobileMenuOpen(prev => !prev)}
        >
          <span aria-hidden className="relative flex h-full w-full flex-col items-center justify-center gap-1.5">
            <span
              className={`block h-0.5 w-full rounded-full bg-gray-900 transition-transform duration-200 ease-in-out ${
                mobileMenuOpen ? "translate-y-1.5 rotate-45" : ""
              }`}
            />
            <span
              className={`block h-0.5 w-full rounded-full bg-gray-900 transition-opacity duration-200 ease-in-out ${
                mobileMenuOpen ? "opacity-0" : "opacity-100"
              }`}
            />
            <span
              className={`block h-0.5 w-full rounded-full bg-gray-900 transition-transform duration-200 ease-in-out ${
                mobileMenuOpen ? "-translate-y-1.5 -rotate-45" : ""
              }`}
            />
          </span>
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
