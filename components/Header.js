import Link from 'next/link';
import { useRouter } from 'next/router';

function NavLink({ href, router, children }) {
  const active = router.pathname === href;
  return (
    <li className="nav-item">
      <Link href={href} className={`nav-link${active ? ' active' : ''}`}>
        {children}
      </Link>
    </li>
  );
}

export default function Header() {
  const router = useRouter();

  return (
    <nav className="navbar navbar-expand-lg navbar-light bg-light">
      <div className="container">
        <Link className="navbar-brand" href="/">
          Khalid Khan
        </Link>
        <button
          className="navbar-toggler"
          type="button"
          data-bs-toggle="collapse"
          data-bs-target="#navbarNavDropdown"
          aria-controls="navbarNavDropdown"
          aria-expanded="false"
          aria-label="Toggle navigation"
        >
          <span className="navbar-toggler-icon"></span>
        </button>
        <div className="collapse navbar-collapse" id="navbarNavDropdown">
          <ul className="navbar-nav ms-auto">
            <NavLink router={router} href="/">Home</NavLink>
            <li className="nav-item dropdown">
              <a
                className="nav-link dropdown-toggle"
                href="#"
                id="projectsDropdown"
                role="button"
                data-bs-toggle="dropdown"
                aria-expanded="false"
              >
                Projects
              </a>
              <ul className="dropdown-menu" aria-labelledby="projectsDropdown">
                <li>
                  <Link className="dropdown-item" href="/projects">
                    All Projects
                  </Link>
                </li>
                <li>
                  <Link className="dropdown-item" href="/projects#web">
                    Web Apps
                  </Link>
                </li>
                <li>
                  <Link className="dropdown-item" href="/projects#mobile">
                    Mobile Apps
                  </Link>
                </li>
              </ul>
            </li>
            <NavLink router={router} href="/about">About</NavLink>
            <NavLink router={router} href="/contact">Contact</NavLink>
          </ul>
        </div>
      </div>
    </nav>
  );
}

