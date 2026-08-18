// ─── Site Config ───────────────────────────────────────────────

export const siteConfig = {
  name: 'Imaya Thillai S',
  role: 'Full Stack Developer',
  email: 'imayathillai20@gmail.com',
  linkedin: 'https://linkedin.com/in/imayathillai',
  github: 'https://github.com/imaya-thillai',
}

// ─── Hero ──────────────────────────────────────────────────────

export const heroContent = {
  name: 'Imaya Thillai',
  tagline: 'I build things for the web.',
  subtitle:
    "Full-stack developer, ML tinkerer, and the kind of person who builds programming languages out of emojis — just because it's fun.",
  cta1: 'See my work',
  cta2: 'Get in touch',
}

// ─── About ─────────────────────────────────────────────────────

export const aboutContent = {
  paragraphs: [
    "I\u2019m a Computer Science undergrad who got into building software the moment my first Hello World actually compiled. Since then I\u2019ve been shipping full-stack web apps, tinkering with ML models, and wondering why CSS works locally but breaks in production.",
    "My thing is working across the stack \u2014 React and Next.js on the front, FastAPI and Node.js on the back, PostgreSQL keeping everything honest, and AWS making sure it stays alive at 3 AM. I\u2019ve built market analysis tools, civic engagement platforms, and yes, a programming language made entirely of emojis.",
    "Currently in my third year at SCAD College of Engineering, splitting time between coursework, side projects, and collecting certifications like they\u2019re Pok\u00e9mon cards.",
  ],
  codeSnippet: `// about-me.ts

const imaya = {
  location: "Tamil Nadu, India",
  education: "B.E. Computer Science @ SCAD",
  currently: "building cool stuff & squashing bugs",
  interests: ["full-stack", "ML", "cloud", "DSA"],
  funFact: "once built a lang where \\ud83c\\udf55 is a valid type",
  coffeeToday: Math.floor(Math.random() * 5) + 2,
  hireable: true,
};`,
  stats: [
    { label: 'Projects Shipped', value: '4+' },
    { label: 'Internships', value: '2' },
    { label: 'AWS Certified', value: '\u2713' },
    { label: 'CGPA', value: '8.1' },
  ],
}

// ─── Skills ────────────────────────────────────────────────────

export type Skill = { name: string }
export type SkillCategory = { title: string; skills: Skill[] }

export const skillCategories: SkillCategory[] = [
  {
    title: 'Frontend',
    skills: [
      { name: 'Next.js' },
      { name: 'React' },
      { name: 'HTML / CSS' },
      { name: 'Tailwind CSS' },
    ],
  },
  {
    title: 'Backend',
    skills: [
      { name: 'Node.js' },
      { name: 'FastAPI' },
      { name: 'Flask' },
      { name: 'Prisma ORM' },
      { name: 'PostgreSQL' },
    ],
  },
  {
    title: 'Cloud & DevOps',
    skills: [
      { name: 'AWS S3' },
      { name: 'AWS EC2' },
      { name: 'SageMaker' },
      { name: 'MLOps' },
      { name: 'Vercel' },
      { name: 'Render' },
    ],
  },
  {
    title: 'ML & Data',
    skills: [
      { name: 'scikit-learn' },
      { name: 'TF-IDF' },
      { name: 'VADER' },
      { name: 'Pandas' },
      { name: 'NumPy' },
      { name: 'NLP' },
    ],
  },
  {
    title: 'Languages',
    skills: [
      { name: 'Python' },
      { name: 'JavaScript' },
      { name: 'TypeScript' },
      { name: 'Java' },
      { name: 'C' },
    ],
  },
  {
    title: 'Tools',
    skills: [
      { name: 'Git & GitHub' },
      { name: 'VS Code' },
      { name: 'Postman' },
      { name: 'Figma' },
      { name: 'Jupyter' },
      { name: 'Android Studio' },
    ],
  },
]

// ─── Projects ──────────────────────────────────────────────────

export type Project = {
  id: string
  title: string
  tagline: string
  description: string
  tech: string[]
  badge: string
  liveUrl?: string
  featured: boolean
}

export const projects: Project[] = [
  {
    id: 'market-gap',
    title: 'Amazon Market Gap Detector',
    tagline: 'Spots untapped Amazon market opportunities using ML',
    description:
      'Market analysis tool that fetches live Amazon data via RapidAPI, runs TF-IDF similarity search and VADER sentiment analysis, then scores business opportunities with weighted ranking. Has a 3-layer data pipeline \u2014 live API with a 42K-product Kaggle fallback. FastAPI backend feeding a React dashboard.',
    tech: ['Python', 'FastAPI', 'React', 'TF-IDF', 'VADER', 'RapidAPI'],
    badge: 'ML + Full Stack',
    featured: true,
  },
  {
    id: 'emojilang',
    title: 'EmojiLang',
    tagline: 'A programming language written entirely in emojis',
    description:
      "Built for Microsoft Agents League Hackathon 2025 (Creative Apps). Users write logic using emojis \u2014 custom lexer, parser, and interpreter from scratch. Because sometimes you just want your code to say \ud83c\udf55 instead of 'pizza'.",
    tech: ['JavaScript', 'Custom Interpreter', 'Vercel'],
    badge: 'Hackathon',
    liveUrl: 'https://emojilang.vercel.app',
    featured: true,
  },
  {
    id: 'civic-platform',
    title: 'Civic Engagement Platform',
    tagline: 'Role-based civic platform with real-time voting',
    description:
      'Digital civic engagement and petition platform with secure auth, role-based access, real-time voting, and a governance tracking dashboard. Designed the full relational database schema from scratch.',
    tech: ['Next.js', 'PostgreSQL', 'Prisma', 'Auth'],
    badge: 'Full Stack',
    featured: true,
  },
  {
    id: 'pathfinder',
    title: 'PathFinder',
    tagline: 'Route optimization with live algorithm visualization',
    description:
      "Route optimization platform on OpenStreetMap data. Implements A*, Dijkstra\u2019s, and BFS with interactive route visualization \u2014 graph algorithms made visual and intuitive, not just textbook diagrams.",
    tech: ['Python', 'OpenStreetMap', 'A*', 'Dijkstra', 'BFS'],
    badge: 'Algorithms',
    featured: false,
  },
]

// ─── Experience ────────────────────────────────────────────────

export type Experience = {
  role: string
  company: string
  period: string
  description: string
  bullets: string[]
}

export const experiences: Experience[] = [
  {
    role: 'Web Developer Intern',
    company: 'Infosys Springboard',
    period: 'Nov 2025 \u2014 Jan 2026',
    description:
      'Built responsive components, worked full-stack, and learned more from debugging production issues than any tutorial could teach.',
    bullets: [
      'Developed responsive web application components',
      'Collaborated on full-stack tasks with modern frameworks',
      'Worked on debugging, testing, and performance optimization',
      'Operated within an agile development workflow',
    ],
  },
  {
    role: 'Full Stack Developer Intern',
    company: 'Digisailor',
    period: 'Jan 2025 \u2014 Feb 2025',
    description:
      'Shipped real pages with Next.js, wired up backend integrations, and got my first taste of writing production code for actual paying clients.',
    bullets: [
      'Built complete webpages with Next.js, HTML, CSS, JS',
      'Created backend integrations using Prisma & PostgreSQL',
      'Developed UI components from client specifications',
      'Collaborated on responsive website delivery',
    ],
  },
]

// ─── Education ─────────────────────────────────────────────────

export type EducationItem = {
  degree: string
  institution: string
  period: string
  score: string
  scoreLabel: string
}

export const education: EducationItem[] = [
  {
    degree: 'B.E. Computer Science and Engineering',
    institution: 'SCAD College of Engineering and Technology',
    period: '2023 \u2014 2027',
    score: '8.1',
    scoreLabel: 'CGPA',
  },
  {
    degree: 'Higher Secondary Education',
    institution: 'St. Ignatius Convent Hr. Sec. School',
    period: '2022 \u2014 2023',
    score: '75%',
    scoreLabel: 'Score',
  },
]

export const certifications = [
  { name: 'AWS Machine Learning Engineer Associate', issuer: 'Coursera' },
  { name: 'Google Cloud Gen AI Academy APAC 2026', issuer: 'Google Cloud & Hack2skill' },
  { name: 'Data Structures & Algorithms', issuer: 'UC San Diego \u00b7 Coursera' },
  { name: 'Meta Full Stack Developer', issuer: 'Coursera' },
]

// ─── Contact ───────────────────────────────────────────────────

export const contactContent = {
  headline: "Let\u2019s build something together",
  subtitle:
    "Got a project in mind, want to collaborate, or just want to argue about tabs vs spaces? I\u2019m all ears.",
}

// ─── Navigation ────────────────────────────────────────────────

export const navLinks = [
  { name: 'About', href: '#about' },
  { name: 'Skills', href: '#skills' },
  { name: 'Projects', href: '#projects' },
  { name: 'Experience', href: '#experience' },
  { name: 'Contact', href: '#contact' },
]
