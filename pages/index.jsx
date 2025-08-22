import Head from "next/head";
import Navbar from "@/components/Navbar";
import Hero from "@/components/sections/Hero";
import Projects from "@/components/sections/Projects";
import Experience from "@/components/sections/Experience";
import Skills from "@/components/sections/Skills";
import Contact from "@/components/sections/Contact";
import Footer from "@/components/Footer";
import "@/styles/globals.css";

export default function Home() {
  return (
    <div className="min-h-screen flex flex-col">
      <Head>
        <title>Khalid Khan | Portfolio</title>
        <meta name="description" content="Modern portfolio built with Next.js and Tailwind." />
        <meta property="og:title" content="Khalid Khan | Portfolio" />
        <meta property="og:description" content="Modern portfolio built with Next.js and Tailwind." />
      </Head>
      <Navbar />
      <main className="flex-1">
        <Hero />
        <Projects />
        <Experience />
        <Skills />
        <Contact />
      </main>
      <Footer />
    </div>
  );
}
