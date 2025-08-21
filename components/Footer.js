export default function Footer() {
  return (
    <footer className="py-6 text-center text-sm text-gray-500 dark:text-gray-400 border-t border-gray-200 dark:border-gray-700 mt-8">
      <div className="flex justify-center gap-4 mb-2">
        <a
          href="https://github.com/khalidkhan76770"
          aria-label="GitHub"
          className="hover:text-black dark:hover:text-white"
          target="_blank"
          rel="noopener noreferrer"
        >
          <svg
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 16 16"
            fill="currentColor"
            className="w-5 h-5"
          >
            <path d="M8 0C3.58 0 0 3.58 0 8c0 3.54 2.29 6.53 5.47 7.59.4.07.55-.17.55-.38 0-.19-.01-.82-.01-1.49-2.01.37-2.53-.49-2.69-.94-.09-.23-.48-.94-.82-1.13-.28-.15-.68-.52-.01-.53.63-.01 1.08.58 1.23.82.72 1.21 1.87.87 2.33.66.07-.52.28-.87.51-1.07-1.78-.2-3.64-.89-3.64-3.95 0-.87.31-1.59.82-2.15-.08-.2-.36-1.02.08-2.12 0 0 .67-.21 2.2.82.64-.18 1.32-.27 2-.27.68 0 1.36.09 2 .27 1.53-1.04 2.2-.82 2.2-.82.44 1.1.16 1.92.08 2.12.51.56.82 1.27.82 2.15 0 3.07-1.87 3.75-3.65 3.95.29.25.54.73.54 1.48 0 1.07-.01 1.93-.01 2.2 0 .21.15.46.55.38A8.013 8.013 0 0 0 16 8c0-4.42-3.58-8-8-8z" />
          </svg>
        </a>
        <a
          href="https://www.linkedin.com/in/khalid"
          aria-label="LinkedIn"
          className="hover:text-blue-600"
          target="_blank"
          rel="noopener noreferrer"
        >
          <svg
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 24 24"
            fill="currentColor"
            className="w-5 h-5"
          >
            <path d="M20.447 20.452H17.4V14.98c0-1.305-.026-2.986-1.819-2.986-1.82 0-2.098 1.42-2.098 2.885v5.573H10.436V9h2.924v1.561h.041c.406-.77 1.399-1.584 2.881-1.584 3.079 0 3.648 2.028 3.648 4.662v6.813zM5.337 7.433a1.7 1.7 0 1 1 0-3.402 1.7 1.7 0 0 1 0 3.402zM6.848 20.452H3.825V9h3.023v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.226.792 24 1.771 24h20.451C23.2 24 24 23.226 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z" />
          </svg>
        </a>
      </div>
      <p className="dark:text-gray-400">© {new Date().getFullYear()} Khalid Khan</p>
      <a href="#" className="block mt-2 text-blue-600 hover:underline">
        Back to top
      </a>
    </footer>
  );
}
