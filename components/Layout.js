import Header from "./Header";
import Footer from "./Footer";

export default function Layout({ children }) {
  return (
    <div className="min-h-screen flex bg-gray-50 dark:bg-gray-900">
      <Header />
      <div className="flex flex-col flex-1">
        <a
          href="#main"
          className="sr-only focus:not-sr-only focus:absolute focus:top-4 focus:left-4 focus:p-2 focus:bg-white focus:dark:bg-gray-800 focus:rounded focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-blue-500"
        >
          Skip to content
        </a>
        <main id="main" className="flex-grow max-w-4xl mx-auto px-4 py-8">
          {children}
        </main>
        <Footer />
      </div>
    </div>
  );
}
