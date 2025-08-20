import Link from "next/link";

export default function Header() {
  return (
    <header className="flex justify-between items-center px-6 py-4 bg-gray-100 shadow">
      <h1 className="text-xl font-bold">Your Name</h1>
      <nav className="space-x-4">
        <Link href="/">Home</Link>
        <Link href="/projects">Projects</Link>
        <Link href="/about">About</Link>
        <Link href="/contact">Contact</Link>
      </nav>
    </header>
  );
}
