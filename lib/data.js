// Central data so you can edit content without touching JSX.
export const meta = {
  name: "MD Khalid Khan",
  title: "Web Developer",
  tagline: "Building modern, responsive, and dynamic web experiences",
  location: "Patna, India",
  email: "khalid.khan.76770@gmail.com",
  github: "https://github.com/khalidkhan76770",
  linkedin: "https://www.linkedin.com/in/khalidkhan76770",
};

export const skills = {
  frontend: ["HTML", "CSS", "JavaScript", "React", "Next.js", "Tailwind", "Bootstrap"],
  backend: ["Node.js", "PHP", "MySQL", "Spring Boot"],
  other: ["Responsive Web Design", "Git & GitHub", "CMS (WordPress, Shopify)", "Debugging", "Performance optimization"],
  tools: ["Vercel", "Jest", "Photoshop"]
};

export const certificates = [
  "Infosys Certified Java SE Developer",
  "Front End Development",
  "Responsive Web Design",
];

// 6 projects: 4 placeholders → link to GitHub home for now.
// 2 special projects show FE UI using royalty‑free images and real links.
export const projects = [
  {
    title: "Dashboard Starter",
    slug: "dashboard-starter",
    summary: "Clean admin dashboard UI with auth placeholders and charts.",
    image: "/images/placeholder-1.jpg",
    tech: ["Next.js", "Tailwind"],
    demo: "#",
    code: "https://github.com/khalidkhan76770"
  },
  {
    title: "E‑commerce UI Kit",
    slug: "ecommerce-ui-kit",
    summary: "Product grid, cart drawer, and checkout screens (dummy API).",
    image: "/images/placeholder-2.jpg",
    tech: ["React", "CSS"],
    demo: "#",
    code: "https://github.com/khalidkhan76770"
  },
  {
    title: "Blog Platform",
    slug: "blog-platform",
    summary: "Markdown posts, tags, and search with static export.",
    image: "/images/placeholder-3.jpg",
    tech: ["Next.js", "Tailwind"],
    demo: "#",
    code: "https://github.com/khalidkhan76770"
  },
  {
    title: "Auth + Profile",
    slug: "auth-profile",
    summary: "Auth screens and profile settings wired to a mock service.",
    image: "/images/placeholder-4.jpg",
    tech: ["React", "Bootstrap"],
    demo: "#",
    code: "https://github.com/khalidkhan76770"
  },
  {
    title: "Resume Builder UI",
    slug: "resume-ui",
    summary: "Front‑end only showcase of a resume builder layout.",
    // Pixabay example page (replace with a direct image URL if you prefer).
    image: "https://cdn.pixabay.com/photo/2022/05/27/17/55/ux-design-7224948_1280.png",
    tech: ["Next.js", "Tailwind"],
    demo: "https://pixabay.com/vectors/ux-design-web-design-ui-design-7224948/",
    code: "https://github.com/khalidkhan76770"
  },
  {
    title: "Portfolio for Someone Special",
    slug: "love-portfolio",
    summary: "Elegant front‑end portfolio concept with modern UI.",
    image: "https://cdn.pixabay.com/photo/2016/11/19/17/55/ux-1833503_1280.jpg",
    tech: ["React", "Tailwind"],
    demo: "https://pixabay.com/images/search/ui/",
    code: "https://github.com/khalidkhan76770"
  },
];

export const experience = [
  {
    role: "Front End Developer",
    company: "Serventys Technologies, Mumbai",
    period: "Aug 2020 – Nov 2021",
    points: [
      "Built responsive websites using HTML, CSS, Bootstrap.",
      "Shipped interactive features with JavaScript to improve engagement.",
      "Worked with PHP and MySQL for simple back‑end needs."
    ],
    tech: ["HTML", "CSS", "Bootstrap", "JavaScript", "PHP", "MySQL"],
  },
  {
    role: "Systems Engineer",
    company: "Infosys, Bangalore",
    period: "Dec 2021 – Nov 2023",
    points: [
      "Delivered content updates and database upgrades on time.",
      "Collaborated with backend, frontend, QA, and leadership to unblock work.",
      "Applied responsive standards and cross‑browser optimizations."
    ],
    tech: ["Responsive Web", "Collaboration", "Optimization"],
  },
  {
    role: "Inventory Controller (brief)",
    company: "SAFCO, Dubai",
    period: "Feb 2024 – Apr 2025",
    points: [
      "Managed inventory accuracy and streamlined audits (transferable skills)."
    ],
    tech: ["Process", "Accuracy", "Data"],
  }
];
