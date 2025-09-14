import { meta } from "@/lib/data";

export default function Footer() {
  return (
    <footer className="border-t mt-16">
      <div className="section py-10">
        <div className="mt-4 text-sm text-gray-600 flex flex-col md:flex-row items-center justify-between gap-4">
          <p>© {new Date().getFullYear()} Khalid Khan</p>
          <div className="flex flex-wrap items-center gap-4">
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
            <a
              href={meta.whatsapp}
              target="_blank"
              rel="noreferrer"
              className="hover:text-green-600 flex items-center gap-2"
            >
              <span className="sr-only">WhatsApp</span>
              <svg
                className="w-6 h-6 fill-current"
                role="img"
                viewBox="0 0 448 512"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path d="M380.9 97.1C339 55.2 283.2 32 224.1 32 102.2 32 8 125.3 8 248c0 43.6 11.5 86.1 33.3 123.1L0 480l112.2-40.9c34 18.7 72.1 28.5 111.8 28.5h.1c122 0 216.3-93.3 216.3-216 0-53.9-21-104.6-59.5-142.5zM224.1 390.7h-.1c-33.2 0-65.7-8.9-94-25.7l-6.7-4-66.5 24.2 23.3-68.5-4.4-7c-20-31.8-30.6-68.4-30.6-106.1 0-101.2 82.3-183.5 183.7-183.5 49 0 95.1 19.1 129.8 53.8 34.6 34.6 53.7 80.6 53.7 129.6 0 101.3-82.3 183.6-183.6 183.6zm101.6-138.7c-5.5-2.8-32.5-16-37.5-17.8-5-.9-8.6-1.3-12.2 3.5-3.5 4.9-14 17.8-17.2 21.5-3.2 3.7-6.3 4.2-11.8 1.4-32.2-16.1-53.5-28.8-74.8-65.4-5.7-9.8 5.7-9.1 16.1-30.3 1.8-3.7.9-6.9-.5-9.7-1.4-2.8-12.2-29.5-16.7-40.4-4.4-10.6-8.9-9.1-12.2-9.2-3.2-.1-6.9-.1-10.5-.1-3.7 0-9.7 1.4-14.8 6.9-5 5.5-19.5 19-19.5 46.3s20 53.7 22.8 57.5c2.8 3.7 39.1 59.7 94.8 83.8 35.2 15.2 49 16.5 66.5 13.9 10.7-1.6 32.5-13.3 37.1-26.2 4.6-12.9 4.6-24 3.2-26.2-1.3-2.3-5-3.7-10.5-6.5z" />
              </svg>
              <span>{meta.phone}</span>
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
}
