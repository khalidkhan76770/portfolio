import Link from 'next/link';
import { useRouter } from 'next/router';
import { useEffect, useState } from 'react';

function NavLink({ href, router, children }) {
  const active = router.pathname === href;
  return (
    <Link
      href={href}
      className={`block px-3 py-2 rounded-md text-sm font-medium transition-colors ${
        active
          ? 'text-blue-600'
          : 'text-gray-700 hover:text-blue-600 dark:text-gray-300 dark:hover:text-white'
      }`}
    >
      {children}
    </Link>
  );
}

export default function Header() {
  const router = useRouter();
  const [menuOpen, setMenuOpen] = useState(false);
  const [dark, setDark] = useState(false);
  const [dropdownOpen, setDropdownOpen] = useState(false);

  useEffect(() => {
    setDark(document.documentElement.classList.contains('dark'));
  }, []);

  const toggleTheme = () => {
    const root = document.documentElement;
    const newTheme = root.classList.contains('dark') ? 'light' : 'dark';
    root.classList.toggle('dark');
    window.localStorage.setItem('theme', newTheme);
    setDark(newTheme === 'dark');
  };

  return (
    <>
      <button
        className="md:hidden p-2 m-2 rounded fixed top-0 left-0 z-50 bg-white dark:bg-gray-800"
        onClick={() => setMenuOpen((m) => !m)}
        aria-label="Toggle menu"
      >
        {menuOpen ? (
          <svg
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 24 24"
            strokeWidth={2}
            stroke="currentColor"
            className="h-5 w-5"
          >
            <path strokeLinecap="round" strokeLinejoin="round" d="M6 18L18 6M6 6l12 12" />
          </svg>
        ) : (
          <svg
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 24 24"
            strokeWidth={2}
            stroke="currentColor"
            className="h-5 w-5"
          >
            <path strokeLinecap="round" strokeLinejoin="round" d="M4 6h16M4 12h16M4 18h16" />
          </svg>
        )}
      </button>

      <aside
        className={`fixed inset-y-0 left-0 w-64 transform bg-white dark:bg-gray-900 shadow-lg transition-transform duration-200 z-40 ${
          menuOpen ? 'translate-x-0' : '-translate-x-full'
        } md:translate-x-0 md:static`}
      >
        <div className="flex items-center justify-between p-4 border-b border-gray-200 dark:border-gray-700">
          <Link href="/" className="text-lg font-semibold">
            Khalid Khan
          </Link>
          <button
            onClick={toggleTheme}
            aria-label="Toggle theme"
            className="p-2 rounded hover:bg-gray-200 dark:hover:bg-gray-700"
          >
            {dark ? (
              <svg
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 20 20"
                fill="currentColor"
                className="h-5 w-5"
              >
                <path d="M10 2a1 1 0 011 1v1a1 1 0 11-2 0V3a1 1 0 011-1zm4.22 1.47a1 1 0 011.42 1.42L14.41 5.09a1 1 0 01-1.42-1.42l1.23-1.2zM18 9a1 1 0 100 2h-1a1 1 0 100-2h1zM4.22 3.47a1 1 0 00-1.42 1.42L4.41 5.09a1 1 0 001.42-1.42L4.22 3.47zM10 17a1 1 0 011 1v1a1 1 0 11-2 0v-1a1 1 0 011-1zm-6-8a1 1 0 100 2H3a1 1 0 100-2h1zm1.78 7.53a1 1 0 00-1.42-1.42L3.59 14.91a1 1 0 001.42 1.42l1.2 1.2zm10.03-1.42a1 1 0 011.42 1.42l-1.2 1.2a1 1 0 01-1.42-1.42l1.2-1.2z" />
                <path d="M10 5a5 5 0 100 10A5 5 0 0010 5z" />
              </svg>
            ) : (
              <svg
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 20 20"
                fill="currentColor"
                className="h-5 w-5"
              >
                <path d="M17.293 13.293A8 8 0 016.707 2.707a8.003 8.003 0 1010.586 10.586z" />
              </svg>
            )}
          </button>
        </div>
        <nav className="p-4 space-y-2">
          <NavLink router={router} href="/">
            Home
          </NavLink>
          <NavLink router={router} href="/projects">
            Projects
          </NavLink>
          <NavLink router={router} href="/about">
            About
          </NavLink>
          <NavLink router={router} href="/contact">
            Contact
          </NavLink>
          <div className="pt-2">
            <button
              onClick={() => setDropdownOpen((d) => !d)}
              className="w-full text-left px-3 py-2 rounded-md text-sm font-medium text-gray-700 hover:text-blue-600 dark:text-gray-300 dark:hover:text-white flex justify-between items-center"
            >
              More
              <svg
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                strokeWidth={2}
                stroke="currentColor"
                className={`h-4 w-4 transition-transform ${dropdownOpen ? 'rotate-180' : ''}`}
              >
                <path strokeLinecap="round" strokeLinejoin="round" d="M19 9l-7 7-7-7" />
              </svg>
            </button>
            <ul className={`mt-1 ml-3 space-y-1 ${dropdownOpen ? 'block' : 'hidden'}`}>
              <li>
                <a
                  href="https://github.com/khalidkhan76770"
                  className="block px-3 py-1 rounded text-sm text-gray-700 hover:text-blue-600 dark:text-gray-300 dark:hover:text-white"
                >
                  GitHub
                </a>
              </li>
              <li>
                <a
                  href="https://www.linkedin.com/in/khalidkhan76770"
                  className="block px-3 py-1 rounded text-sm text-gray-700 hover:text-blue-600 dark:text-gray-300 dark:hover:text-white"
                >
                  LinkedIn
                </a>
              </li>
            </ul>
          </div>
        </nav>
      </aside>
    </>
  );
}

