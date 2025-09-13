import { meta } from "@/lib/data";

export default function Footer() {
  return (
    <footer className="border-t mt-16">
      <div className="section py-10">
        <div className="mt-4 text-sm text-gray-600 flex flex-col md:flex-row items-center justify-between gap-4">
          <p>© {new Date().getFullYear()} Khalid Khan</p>
          <div className="flex gap-4">
            <a
              href={meta.github}
              target="_blank"
              rel="noreferrer"
              className="hover:text-blue-600"
            >
              <span className="sr-only">GitHub</span>
              <svg
                className="w-6 h-6 fill-current"
                role="img"
                viewBox="0 0 16 16"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  fillRule="evenodd"
                  d="M8 0C3.58 0 0 3.58 0 8c0 3.54 2.29 6.54 5.47 7.59.4.07.55-.17.55-.38 0-.19-.01-.82-.01-1.49-2.01.37-2.53-.49-2.69-.94-.09-.23-.48-.94-.82-1.13-.28-.15-.68-.52-.01-.53.63-.01 1.08.58 1.23.82.72 1.21 1.87.87 2.33.66.07-.52.28-.87.51-1.07-1.78-.2-3.64-.89-3.64-3.95 0-.87.31-1.59.82-2.15-.08-.2-.36-1.02.08-2.12 0 0 .67-.21 2.2.82.64-.18 1.32-.27 2-.27s1.36.09 2 .27c1.53-1.04 2.2-.82 2.2-.82.44 1.1.16 1.92.08 2.12.51.56.82 1.27.82 2.15 0 3.07-1.87 3.75-3.65 3.95.29.25.54.73.54 1.48 0 1.07-.01 1.93-.01 2.2 0 .21.15.46.55.38A8.013 8.013 0 0 0 16 8c0-4.42-3.58-8-8-8z"
                />
              </svg>
            </a>
            <a
              href={meta.linkedin}
              target="_blank"
              rel="noreferrer"
              className="hover:text-blue-600"
            >
              <span className="sr-only">LinkedIn</span>
              <svg
                className="w-6 h-6 fill-current"
                role="img"
                viewBox="0 0 16 16"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path d="M0 1.146C0 .513.526 0 1.175 0h13.65C15.474 0 16 .513 16 1.146v13.708c0 .633-.526 1.146-1.175 1.146H1.175A1.16 1.16 0 0 1 0 14.854V1.146ZM4.943 12.306V6.169H3.127v6.137h1.816Zm-.91-7.028c.607 0 .986-.405.986-.906 0-.513-.386-.906-.986-.906-.607 0-.986.393-.986.906 0 .5.379.906.986.906ZM8.339 12.306V9.359c0-.158.011-.316.058-.43.127-.316.416-.644.9-.644.635 0 .889.486.889 1.196v2.825h1.815V9.37c0-2.137-1.139-3.132-2.657-3.132-1.223 0-1.773.68-2.08 1.158h.027V6.169H5.484c.024.68 0 6.137 0 6.137h1.815Z" />
              </svg>
            </a>
            <a
              href={`mailto:${meta.email}`}
              className="hover:text-blue-600"
            >
              <span className="sr-only">Email</span>
              <svg
                className="w-6 h-6"
                fill="none"
                stroke="currentColor"
                strokeWidth="2"
                viewBox="0 0 24 24"
                xmlns="http://www.w3.org/2000/svg"
              >
                <rect x="2" y="4" width="20" height="16" rx="2" ry="2" />
                <path d="M2 4l10 8 10-8" />
              </svg>
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
}
