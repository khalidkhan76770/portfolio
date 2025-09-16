export const meta = {
  name: "MD Khalid Khan",
  title: "Web Developer",
  tagline: "Full Stack Developer for product teams. React, Next.js, Node. I ship accessible, fast, tested web apps.",
  location: "Patna, India",
  email: "khalid.khan.76770@gmail.com",
  github: "https://github.com/khalidkhan76770",
  linkedin: "https://www.linkedin.com/in/khalidkhan76770",
  phone: "+91 7903883874",
  whatsapp: "https://wa.me/917903883874",
};

export const skills = {
  frontend: [
    "HTML5",
    "CSS3",
    "JavaScript (ES6)",
    "React",
    "Next.js",
    "Tailwind",
    "Bootstrap",
    "React DOM",
    "Framer Motion",
    "PostCSS",
  ],
  backend: [
    "Node.js",
    "PHP",
    "MySQL",
    "Spring Boot",
    "Python",
    "Uvicorn",
    "PyTorch",
    "NumPy",
    "SciPy",
    "Scikit-learn",
    "Matplotlib",
    "SQL",
    "Google API PHP Client",
    "OAuth 2.0",
  ],
  other: [
    "Responsive Web Design",
    "Git and GitHub",
    "CMS (WordPress, Shopify)",
    "Debugging",
    "Performance optimization",
    "NVIDIA",
    "Production Troubleshooting",
  ],
  tools: [
    "Vercel",
    "Jest",
    "Photoshop",
    "Docker",
    "Pytest",
    "Testing Library",
    "Composer",
    "cPanel",
    "TensorBoard",
  ],
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
    tech: ["PHP", "Composer", "Google API PHP Client", "OAuth 2.0", "cPanel", "Production Troubleshooting"],
    demo: "https://alumni.ssgmce.ac.in/",
    code: null
  },

  // 3 public projects with accessible code
  {
    title: "Water Footprint Calculator with Interactive Tips and Certification",
    slug: "water-footprint-calculator",
    summary: "Built a full-stack water footprint calculator that guides users through an interactive survey on their water usage. The application leverages a clean Bootstrap-based UI with JavaScript-driven modals for switching between water preservation categories. Survey responses are processed with PHP and stored in an SQL database for tracking and analytics. Upon completion, the system dynamically generates a personalized certificate that users can download. This project combines responsive design, smooth interactivity, and backend integration to promote sustainable water practices.",
    image: "/portfolio/water-footprint-calculator.png",
    tech: ["HTML5", "CSS3", "JavaScript (ES6)", "Bootstrap", "PHP", "SQL"],
    demo: null,
    code: null
  },

  // 2 showcase UIs with free images and real links
  {
    title: "My Personal Portfolio",
    slug: "my-personal-portfolio",
    summary: " Modern Web Developer profile built with React, Next.js and Tailwind CSS, featuring sections for projects, experience, skills, and a contact form.",
    image: "/portfolio/placeholder-5.jpg",
    tech: ["React", "Tailwind", "Next.js", "React DOM", "FramerMotion", "PostCSS", "Jest", "Testing Library", ],
    demo: "https://khalidkhan76770.github.io/portfolio/",
    code: "https://github.com/khalidkhan76770/portfolio"
  },
  {
    title: "Online Bookstore E-Commerce Website",
    slug: "Online-Bookstore-E-Commerce-Website",
    summary: "Created an online bookstore website featuring a homepage with direct purchase links via Stripe and KDP, an author page with a professional bio and book listings, a blog for updates and reader engagement, and a contact page with a responsive form. The design is clean, minimal, and tailored to provide a seamless buying experience while reflecting the author’s brand.",
    image: "/portfolio/placeholder-6.png",
    tech: ["PHP", "SQL", "WORDPRESS"],
    demo: null,
    code: null
  },
];

export const experience = [
  {
    role: "Full Stack Developer",
    company: "Serventys Technologies – Remote",
    period: "May 2025 – Present",
    points: [
      "Designed and deployed full-stack applications (PHP, SQL, JavaScript, Bootstrap, FastAPI), including a Water Footprint Calculator that processed 400+ surveys and improved completion rates by 75%.",
      "Resolved production issues with Google OAuth and Composer in cPanel, restoring 100% uptime for 1,000+ users and documenting a deployment checklist.",
      "Reduced backend load times by 30% and implemented secure API integrations (Google OAuth, RESTful services) across multiple platforms.",
      "Fine-tuned Evo2-1b and LLaMA models with NVIDIA BioNeMo and PyTorch, achieving 92% accuracy on genomic data classification and sub-500ms inference times."
    ],
    tech: ["PHP", "SQL", "JavaScript", "Bootstrap", "FastAPI", "Google OAuth", "PyTorch", "NVIDIA BioNeMo"]
  },
  {
    role: "Inventory Controller",
    company: "SAFCO – Dubai, UAE",
    period: "Feb 2024 – Apr 2025",
    points: [
      "Streamlined inventory verification by reconciling daily system data with physical stock, reducing discrepancies by 92% and improving operational efficiency.",
      "Led cycle counts and audits that sustained 98%+ inventory accuracy, contributing to a £100K profit increase through precise stock management.",
      "Analyzed monthly trends to forecast demand, reducing excess stock by 15% and improving turnover across key product categories.",
      "Enforced FIFO principles and monitored product flow, cutting product loss by 35% while enabling timely sales order generation."
    ],
    tech: ["Inventory Management", "Demand Forecasting", "Process Optimization", "FIFO"]
  },
  {
    role: "Systems Engineer",
    company: "Infosys Limited – Bangalore, Karnataka",
    period: "Dec 2021 – Nov 2023",
    points: [
      "Delivered timely content updates and database upgrades with 100% adherence to deadlines, ensuring uninterrupted platform availability.",
      "Collaborated across development, QA, and leadership teams, reducing communication gaps by 30% and streamlining project delivery.",
      "Applied responsive design standards and improved cross-browser compatibility, boosting user engagement by 15% across devices."
    ],
    tech: ["Content Management", "Database Upgrades", "Responsive Design"]
  },
  {
    role: "Front End Developer",
    company: "Serventys Technologies – Mumbai, Maharashtra",
    period: "Aug 2020 – Nov 2021",
    points: [
      "Built responsive websites with HTML, CSS, and Bootstrap, increasing user satisfaction by 30% and conversion rates by 15%.",
      "Enhanced interactivity with JavaScript event-based features, raising user engagement by 25% and reducing bounce rates by 10%.",
      "Developed back-end functionality in PHP and MySQL, reducing server response times by 20% and supporting 10,000+ monthly visitors."
    ],
    tech: ["HTML", "CSS", "Bootstrap", "JavaScript", "PHP", "MySQL"]
  },
  {
    role: "Web Development and Graphic Design",
    company: "Freelance (Fiverr, Upwork, LinkedIn) – Remote",
    period: "Jan 2024 – Present",
    points: [
      "Delivered 30+ freelance projects, ranging from custom web solutions to international bestselling book covers, with top client ratings and repeat engagements.",
      "Managed complete design-to-deployment cycles, including UI/UX layouts, responsive websites, and CMS integrations (WordPress, Shopify, CommerceUp).",
      "Demonstrated adaptability by expanding from design-focused work into full-stack and IT development, with a strong interest in exploring emerging technologies."
    ],
    tech: ["UI/UX", "WordPress", "Shopify", "CommerceUp", "Client Management"]
  }
];
