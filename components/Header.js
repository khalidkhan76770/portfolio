import Link from 'next/link';
import { useRouter } from 'next/router';
import { useEffect, useRef, useState } from 'react';

const navItems = [
  { href: '/', label: 'Home' },
  { href: '/projects', label: 'Projects' },
  { href: '/about', label: 'About' },
  { href: '/contact', label: 'Contact' },
];

export default function Header() {
  const router = useRouter();
  const [open, setOpen] = useState(false);
  const [mounted, setMounted] = useState(false);
  const [theme, setTheme] = useState('light');
  const menuRef = useRef(null);

  useEffect(() => {
    setMounted(true);
    const stored = window.localStorage.getItem('theme');
    if (stored) {
      setTheme(stored);
    } else if (window.matchMedia('(prefers-color-scheme: dark)').matches) {
      setTheme('dark');
    }
  }, []);

  useEffect(() => {
    if (!mounted) return;
    if (theme === 'dark') {
      document.documentElement.classList.add('dark');
    } else {
      document.documentElement.classList.remove('dark');
    }
    window.localStorage.setItem('theme', theme);
  }, [theme, mounted]);

  useEffect(() => {
    if (!open) return;
    const focusable = menuRef.current.querySelectorAll('a, button');
    const first = focusable[0];
    const last = focusable[focusable.length - 1];
    function handleKey(e) {
      if (e.key === 'Escape') {
        setOpen(false);
      } else if (e.key === 'Tab') {
        if (e.shiftKey) {
          if (document.activeElement === first) {
            e.preventDefault();
            last.focus();
          }
        } else {
          if (document.activeElement === last) {
            e.preventDefault();
            first.focus();
          }
        }
      }
    }
    document.addEventListener('keydown', handleKey);
    first?.focus();
    return () => document.removeEventListener('keydown', handleKey);
  }, [open]);

  const toggleTheme = () => setTheme(theme === 'dark' ? 'light' : 'dark');

  const navLinks = navItems.map(({ href, label }) => (
    <Link
      key={href}
      href={href}
      aria-current={router.pathname === href ? 'page' : undefined}
      className={`block px-2 py-1 rounded transition-colors hover:text-blue-600 focus-visible:ring-2 focus-visible:ring-offset-2 focus-visible:ring-blue-500 ${
        router.pathname === href ? 'text-blue-600 font-semibold' : 'text-gray-700 dark:text-gray-300'
      }`}
      onClick={() => setOpen(false)}
    >
      {label}
    </Link>
  ));

  return (
    <header className="sticky top-0 backdrop-blur bg-white/80 dark:bg-gray-800/80 shadow z-10">
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
        <div className="flex items-center gap-4">
          {mounted && (
            <button
              onClick={toggleTheme}
              aria-label="Toggle theme"
              className="p-2 rounded focus-visible:ring-2 focus-visible:ring-offset-2 focus-visible:ring-blue-500"
            >
              {theme === 'dark' ? (
                <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" className="w-5 h-5">
                  <path d="M12 3.75a.75.75 0 01.75-.75A8.25 8.25 0 1020.25 12a.75.75 0 01-.75-.75A8.25 8.25 0 0112 3.75z" />
                </svg>
              ) : (
                <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" className="w-5 h-5">
                  <path d="M12 2.25a.75.75 0 01.75.75V5a.75.75 0 01-1.5 0V3a.75.75 0 01.75-.75zM12 19a.75.75 0 01.75.75V21a.75.75 0 01-1.5 0v-1.25A.75.75 0 0112 19zm9-7a.75.75 0 01.75.75v1.5a.75.75 0 01-1.5 0V12.75a.75.75 0 01.75-.75zM4 12a.75.75 0 01.75-.75h1.5a.75.75 0 010 1.5H4.75A.75.75 0 014 12zm12.364 5.657a.75.75 0 01.53-1.28.75.75 0 01.53.22l1.06 1.06a.75.75 0 01-1.06 1.06l-1.06-1.06a.75.75 0 01-.22-.53zM6.53 6.53a.75.75 0 011.06 0l1.06 1.06a.75.75 0 11-1.06 1.06L6.53 7.59a.75.75 0 010-1.06zm10.6-1.06a.75.75 0 10-1.06-1.06l-1.06 1.06a.75.75 0 101.06 1.06l1.06-1.06zM7.59 17.47a.75.75 0 00-1.06 1.06l1.06 1.06a.75.75 0 001.06-1.06l-1.06-1.06z" />
                </svg>
              )}
            </button>
          )}
          <button
            className="md:hidden p-2 rounded focus-visible:ring-2 focus-visible:ring-offset-2 focus-visible:ring-blue-500"
            onClick={() => setOpen(true)}
            aria-label="Open menu"
            aria-controls="mobile-menu"
            aria-expanded={open}
          >
            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-6 h-6">
              <path strokeLinecap="round" strokeLinejoin="round" d="M3.75 5.25h16.5M3.75 12h16.5m-16.5 6.75h16.5" />
            </svg>
          </button>
        </div>
        <nav id="desktop-nav" className="hidden md:flex space-x-6">
          {navLinks}
        </nav>
      </div>
      {open && (
        <div
          id="mobile-menu"
          ref={menuRef}
          className="md:hidden fixed inset-0 bg-white dark:bg-gray-800 p-6 flex flex-col space-y-4"
        >
          <button
            onClick={() => setOpen(false)}
            className="self-end p-2 mb-4 rounded focus-visible:ring-2 focus-visible:ring-offset-2 focus-visible:ring-blue-500"
            aria-label="Close menu"
          >
            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-6 h-6">
              <path strokeLinecap="round" strokeLinejoin="round" d="M6 18L18 6M6 6l12 12" />
            </svg>
          </button>
          {navLinks}
        </div>
      )}
    </header>
  );
}
