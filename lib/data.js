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
  other: ["Responsive Web Design", "Git and GitHub", "CMS (WordPress, Shopify)", "Debugging", "Performance optimization"],
  tools: ["Vercel", "Jest", "Photoshop"]
};

export const certificates = [
  "Infosys Certified Java SE Developer",
  "Front End Development",
  "Responsive Web Design",
];

// 6 projects total
export const projects = [
  // 4 placeholders that point to your GitHub home for now
  {
    title: "Fine-tuning LLaMA for COVID-19 Spike Protein Sequence Classification",
    slug: "spike-sequence-finetune",
    summary: "This project extracts spike protein regions from viral genomes, builds a labeled dataset, and fine-tunes a long-context LLaMA model with LoRA and 4-bit quantization to classify sequences by country of origin. The trained model is deployed via a FastAPI service and packaged with Docker for easy GPU-based inference.",
    image: "/portfolio/spike-sequence-finetune.png",
    tech: ["Next.js", "Tailwind"],
    demo: "Upon Request",
    code: "Upon Request"
  },
  {
    title: "Ecommerce UI Kit",
    slug: "ecommerce-ui-kit",
    summary: "Product grid, cart drawer, and checkout screens. Dummy API.",
    image: "/portfolio/placeholder-2.jpg",
    tech: ["React", "CSS"],
    demo: "https://github.com/khalidkhan76770",
    code: "https://github.com/khalidkhan76770"
  },
  {
    title: "Blog Platform",
    slug: "blog-platform",
    summary: "Markdown posts, tags, and search with static export.",
    image: "/portfolio/placeholder-3.jpg",
    tech: ["Next.js", "Tailwind"],
    demo: "https://github.com/khalidkhan76770",
    code: "https://github.com/khalidkhan76770"
  },
  {
    title: "Auth and Profile",
    slug: "auth-profile",
    summary: "Auth screens and profile settings wired to a mock service.",
    image: "/portfolio/placeholder-4.jpg",
    tech: ["React", "Bootstrap"],
    demo: "https://github.com/khalidkhan76770",
    code: "https://github.com/khalidkhan76770"
  },

  // 2 showcase UIs with free images and real links
  {
    title: "My Personal Portfolio",
    slug: "resume-ui",
    summary: "Front end only showcase of my personal portfolio layout.",
    image: "/portfolio/placeholder-5.jpg",
    tech: ["Next.js", "Tailwind"],
    demo: "https://pixabay.com/vectors/ux-design-web-design-ui-design-7224948/",
    code: "https://github.com/khalidkhan76770"
  },
  {
    title: "Portfolio for Someone Special",
    slug: "love-portfolio",
    summary: "Elegant front end portfolio concept with modern UI.",
    image: "/portfolio/placeholder-6.jpg",
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
      "Worked with PHP and MySQL for simple back end needs."
    ],
    tech: ["HTML", "CSS", "Bootstrap", "JavaScript", "PHP", "MySQL"]
  },
  {
    role: "Systems Engineer",
    company: "Infosys, Bangalore",
    period: "Dec 2021 – Nov 2023",
    points: [
      "Delivered content updates and database upgrades on time.",
      "Collaborated with backend, frontend, QA, and leadership to unblock work.",
      "Applied responsive standards and cross browser optimizations."
    ],
    tech: ["Responsive Web", "Collaboration", "Optimization"]
  },
  {
    role: "Inventory Controller",
    company: "SAFCO, Dubai",
    period: "Feb 2024 – Apr 2025",
    points: [
      "Managed inventory accuracy and streamlined audits. Focus now on full time web development."
    ],
    tech: ["Process", "Accuracy", "Data"]
  }
];
