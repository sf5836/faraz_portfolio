export const personal = {
  name: "Dawood Ahmad",
  role: "Full Stack Web Developer",
  taglines: [
    "Full Stack Web Developer",
    "AI & ML Learner",
    "Data Science Enthusiast",
    "MERN Stack Developer",
    "CS Student @ COMSATS",
    "Problem Solver 🚀"
  ],
  email: "dawoodahmad777777@gmail.com",
  phone: "+92 311 1756820",
  location: "Gojra, Punjab, Pakistan",
  linkedin: "https://www.linkedin.com/in/dawoodahmad777",
  github: "https://github.com/dawoodahmad018",
  available: true,
  bio: "Full Stack Web Developer crafting modern web applications with the MERN stack. Currently diving deep into AI/ML and Data Science to build intelligent, data-driven solutions.",
}

export const skills = [
  { category: "AI / ML", items: [
    { name: "Python", level: 88, icon: "SiPython", color: "#3776AB" },
    { name: "Scikit-learn", level: 80, icon: "SiScikitlearn", color: "#F7931E" },
    { name: "Pandas", level: 82, icon: "SiPandas", color: "#150458" },
    { name: "NumPy", level: 80, icon: "SiNumpy", color: "#013243" },
    { name: "Jupyter", level: 85, icon: "SiJupyter", color: "#F37626" },
    { name: "Data Analysis", level: 78, icon: "MdAnalytics", color: "#00f5c4" },
  ]},
  { category: "Backend", items: [
    { name: "Node.js", level: 70, icon: "SiNodedotjs", color: "#339933" },
    { name: "Express.js", level: 68, icon: "SiExpress", color: "#ffffff" },
    { name: "MongoDB", level: 65, icon: "SiMongodb", color: "#47A248" },
    { name: "REST APIs", level: 72, icon: "TbApi", color: "#a855f7" },
  ]},
  { category: "Frontend", items: [
    { name: "React.js", level: 75, icon: "SiReact", color: "#61DAFB" },
    { name: "JavaScript", level: 78, icon: "SiJavascript", color: "#F7DF1E" },
    { name: "HTML/CSS", level: 85, icon: "SiHtml5", color: "#E34F26" },
    { name: "Tailwind CSS", level: 75, icon: "SiTailwindcss", color: "#06B6D4" },
  ]},
  { category: "Tools", items: [
    { name: "Git & GitHub", level: 80, icon: "SiGithub", color: "#ffffff" },
    { name: "VS Code", level: 92, icon: "SiVisualstudiocode", color: "#007ACC" },
    { name: "Postman", level: 70, icon: "SiPostman", color: "#FF6C37" },
    { name: "Linux", level: 62, icon: "SiLinux", color: "#FCC624" },
  ]},
]

export const experience = [
  {
    id: 1,
    company: "DevelopersHub Corporation",
    role: "Software Engineering Intern",
    period: "June 2025 – Aug 2025",
    location: "Remote",
    current: false,
    type: "Internship",
    description: "Worked on real-world backend and full-stack software projects, gained hands-on experience with modern web technologies and distributed systems architecture.",
    achievements: [
      "Built REST APIs with Node.js and Express.js",
      "Worked with MongoDB database design",
      "Collaborated in agile development workflow",
      "Implemented authentication systems"
    ],
    tech: ["Node.js", "Express", "MongoDB", "Git", "REST APIs"],
    color: "#00f5c4"
  }
]

export const education = [
  {
    id: 1,
    institution: "COMSATS University Islamabad",
    degree: "BS Computer Science",
    period: "Sep 2023 – Jan 2027",
    current: true,
    gpa: "In Progress",
    description: "Focused on algorithms, data structures, AI/ML fundamentals, database systems, and software engineering principles.",
    courses: ["Data Structures", "Algorithms", "Machine Learning", "Database Systems", "OOP", "Operating Systems"],
    color: "#a855f7"
  }
]

export const certifications = [
  {
    id: 1,
    name: "Software Engineering Virtual Experience",
    issuer: "JPMorgan Chase",
    platform: "Forage",
    year: "2024",
    color: "#003087",
    logo: "/logos/forage.png",
    image: "/certificates/jpmorgan.jpg",
    description: "Completed virtual software engineering tasks including interface design and system architecture."
  },
  {
    id: 2,
    name: "What is Data Science?",
    issuer: "IBM",
    platform: "Coursera",
    year: "2024",
    color: "#1F70C1",
    logo: "/logos/ibm.png",
    image: "/certificates/ibm-data-science.jpg",
    description: "Foundations of data science, tools, methodologies, and real-world applications."
  },
  {
    id: 3,
    name: "Critical Thinking in the AI Era",
    issuer: "HP Life",
    platform: "HP Life",
    year: "2024",
    color: "#0096D6",
    logo: "/logos/hp.png",
    image: "/certificates/critical-thinking.jpg",
    description: "Analytical frameworks for evaluating AI tools and making data-driven decisions."
  },
  {
    id: 4,
    name: "Software Engineering Job Simulation",
    issuer: "Electronic Arts",
    platform: "Forage",
    year: "2024",
    color: "#1A1A2E",
    logo: "/logos/ea.png",
    image: "/certificates/ea-forage.jpg",
    description: "Completed software engineering simulation covering feature development and code optimization."
  },
  {
    id: 5,
    name: "Python Programming Fundamentals",
    issuer: "Microsoft",
    platform: "Microsoft Learn",
    year: "2024",
    color: "#00A4EF",
    logo: "/logos/microsoft.png",
    image: "/certificates/python-fundamentals.jpg",
    description: "Core Python programming concepts, syntax, and practical application development."
  },
  {
    id: 6,
    name: "MERN Stack Development",
    issuer: "DevelopersHub Corporation",
    platform: "DevelopersHub",
    year: "2025",
    color: "#00f5c4",
    logo: "/logos/developershub.png",
    image: "/certificates/developershub.jpg",
    description: "Full-stack web development with MongoDB, Express.js, React, and Node.js."
  },
  {
    id: 7,
    name: "Data Analytics Job Simulation",
    issuer: "Deloitte",
    platform: "Forage",
    year: "2025",
    color: "#86BC25",
    logo: "/logos/deloitte.png",
    image: "/certificates/Deloitte Data Analytics Job Simulation Xertificate.jpg",
    description: "Completed Deloitte's data analytics virtual experience covering data visualization, analysis, and business insights."
  },
]

export const projects = [
  {
    id: 1,
    title: "CR7 Analytics — AI-Powered Career Visualization",
    description: "Full-stack career visualization platform for CR7's stats (2002–2026) with interactive 3D scenes, AI-powered kit detection using TensorFlow/Keras CNN, Three.js timelines, and Chart.js dashboards. Built with a modular three-service architecture.",
    longDescription: "Built a full-stack enterprise web application that visualizes Cristiano Ronaldo's complete career statistics (2002–2026) through interactive 3D scenes and dynamic charts. The platform features an AI-powered kit detection system using a custom-trained TensorFlow/Keras CNN model served via a Flask microservice, enabling users to upload images and identify the club jersey with confidence scoring. The frontend uses React with Three.js for immersive 3D bar timelines, Chart.js for statistical dashboards, and Redux Toolkit for state management. The backend is a Node.js/Express REST API with MongoDB, supporting full CRUD operations, rate limiting, file uploads, and a robust fallback detection pipeline. Designed with a modular architecture across three services — React client, Express API server, and Python ML microservice — communicating over REST.",
    tech: ["React.js", "Three.js", "Node.js", "Express.js", "MongoDB", "TensorFlow", "Flask", "Chart.js", "Redux"],
    github: "https://github.com/dawoodahmad018",
    live: null,
    featured: true,
    category: "ml",
    image: "/projects/cr7-analytics.png",
    gradient: "from-red-500/20 to-yellow-500/20",
    number: "01"
  },
  {
    id: 2,
    title: "Real Time Chat Application",
    description: "A full-stack real-time chat application with instant messaging, user authentication, online status indicators, and responsive UI. Built with Socket.IO for real-time bidirectional communication.",
    tech: ["React.js", "Node.js", "Express.js", "Socket.IO", "MongoDB", "JWT"],
    github: "https://github.com/dawoodahmad018",
    live: null,
    featured: false,
    category: "fullstack",
    image: "/projects/chat-app.png",
    gradient: "from-blue-500/20 to-cyan-500/20",
    number: "02"
  },
  {
    id: 3,
    title: "Sentiment Analyzer",
    description: "A machine learning-based sentiment analysis tool that classifies text into positive, negative, or neutral sentiments. Features real-time text analysis with NLP techniques and visualization of results.",
    tech: ["Python", "NLTK", "Scikit-learn", "Flask", "TextBlob", "Pandas"],
    github: "https://github.com/dawoodahmad018",
    live: null,
    featured: false,
    category: "ml",
    image: "/projects/sentiment-analyzer.jpg",
    gradient: "from-green-500/20 to-teal-500/20",
    number: "03"
  },
  {
    id: 4,
    title: "Portfolio Website",
    description: "This portfolio website — built with React, Framer Motion, GSAP, and Tailwind CSS. Features cinematic animations, particle systems, and EmailJS contact integration.",
    tech: ["React.js", "Framer Motion", "GSAP", "Tailwind CSS", "EmailJS"],
    github: "https://github.com/dawoodahmad018",
    live: "#",
    featured: false,
    category: "frontend",
    image: "/projects/portfolio.png",
    gradient: "from-cyan-500/20 to-green-500/20",
    number: "04"
  },
]

export const stats = [
  { value: 2450, suffix: "+", label: "Lines of Code Written", icon: "code" },
  { value: 1085, suffix: "+", label: "Hours of Learning", icon: "clock" },
  { value: 7, suffix: "", label: "Certifications Earned", icon: "award" },
  { value: 50, suffix: "+", label: "GitHub Commits", icon: "git" },
]

export const navLinks = [
  { label: "Home", href: "#home" },
  { label: "About", href: "#about" },
  { label: "Skills", href: "#skills" },
  { label: "Experience", href: "#experience" },
  { label: "Projects", href: "#projects" },
  { label: "Certifications", href: "#certifications" },
  { label: "Contact", href: "#contact" },
]
