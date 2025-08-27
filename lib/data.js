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
  // 3 back-end projects; links available upon request
  {
    title: "Fine-tuning LLaMA for COVID-19 Spike Protein Sequence Classification",
    slug: "spike-sequence-finetune",
    summary: "This project extracts spike protein regions from viral genomes, builds a labeled dataset, and fine-tunes a long-context LLaMA model with LoRA and 4-bit quantization to classify sequences by country of origin. The trained model is deployed via a FastAPI service and packaged with Docker for easy GPU-based inference.",
    image: "/portfolio/spike-sequence-finetune.png",
    tech: ["Python", "Uvicorn", "PyTorch", "NumPy", "SciPy", "Docker", "Pytest"],
    demo: null,
    code: null
  },
  {
    title: "Evo2‑1b Fine‑tuning for SARS‑CoV‑2 Variant Classification",
    slug: "evo2-1b-finetuning",
    summary: "The project applies NVIDIA’s BioNeMo framework to fine‑tune the Evo2‑1b model on COVID‑19 spike‑protein sequences, enabling classification of different SARS‑CoV‑2 variants after dedicated preprocessing, checkpoint handling, and analysis routines.",
    image: "/portfolio/evo-finetuning.png",
    tech: ["Python", "NVIDIA", "Docker", "PyTorch", "Scikit-learn", "TensorBoard", "Matplotlib"],
    demo: null,
    code: null
  },
  {
    title: "Stabilizing Google OAuth in a PHP App on Shared Hosting",
    slug: "google-oauth",
    summary: "Diagnosed and resolved a production outage where Google OAuth failed due to missing google/apiclient dependencies and misconfigured Composer autoload paths in a PHP app hosted on cPanel. Without SSH access, traced failures through Composer’s autoload chain, corrected misplaced vendor files, rebuilt autoload mapping, and modernized code to use namespaced Google classes. Restored OAuth login end-to-end and documented a repeatable “Composer-on-cPanel” deployment checklist for future resilience.",
    image: "/portfolio/google-oauth.png",
    tech: ["PHP", "Composer", "Google API PHP Client", "OAuth 2.0", "cPanel", "Vendor Dependency Restructuring", "Production Troubleshooting"],
    demo: "https://alumni.ssgmce.ac.in/",
    code: null
  },

  // 3 public projects with accessible code
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
