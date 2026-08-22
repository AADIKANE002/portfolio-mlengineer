export const PERSONAL_INFO = {
  name: "Aditya Kumar",
  role: "Machine Learning Engineer",
  titleSuffix: "Production AI & GenAI Systems",
  subtitles: [
    "Machine Learning Engineer @ Genpact",
    "Production AI & Serverless ML Systems Architect",
    "Agentic AI, Multi-Step Reasoning & RAG Specialist",
    "Computer Vision (YOLOv8) & Edge Robotics Developer",
    "Competitive Programmer (LeetCode Top 6.3%)"
  ],
  email: "aditya0211kumar@gmail.com",
  phone: "+91 6202393823",
  location: "Bengaluru, Karnataka, India",
  status: "Available for ML Engineer, GenAI & Production AI Roles",
  linkedin: "https://www.linkedin.com/in/aditya-kumar-6440a8429/",
  github: "https://github.com/AADIKANE002",
  leetcode: "https://leetcode.com/",
  resumePdfUrl: "./Aditya_Kumar_ML_Engineer_Resume.pdf",
  resumeDocxUrl: "./Aditya_Kumar_ML_Engineer_Resume.docx",
  bio: "Machine Learning Engineer with 2+ years of experience designing, training, evaluating, and deploying end-to-end ML and Generative AI systems in production environments. Proven track record building time-series forecasting pipelines, automating model benchmarking and selection with MAPE-based evaluation, and shipping serverless ML workloads on AWS Lambda. Hands-on experience with LLMs, Retrieval-Augmented Generation (RAG), and agentic AI, plus computer vision and IoT-based systems.",
  stats: [
    { label: "Experience", value: "2+ Years", subtext: "Production ML Systems" },
    { label: "Vision Accuracy", value: "90%", subtext: "YOLOv8 Edge AI Rover" },
    { label: "Time Saved", value: "40+ hrs/wk", subtext: "ML Pipeline Automation" },
    { label: "Targeting Gain", value: "+20%", subtext: "Scikit-Learn ML Models" },
  ]
};

export const EXPERIENCES = [
  {
    id: "genpact-ml",
    company: "Genpact",
    role: "Machine Learning Engineer / Data Scientist",
    type: "Full-time",
    period: "Aug 2024 – Present",
    location: "Bengaluru, India",
    current: true,
    accent: "from-purple-500 to-indigo-600",
    metrics: [
      { label: "Pipeline Automation", value: "40+ hrs/wk" },
      { label: "Targeting Efficiency", value: "+20%" },
      { label: "Serverless Deployment", value: "AWS Lambda" }
    ],
    highlights: [
      "End-to-End ML Pipelines: Architected Python ML pipelines to ingest, clean, and preprocess enterprise time-series data; engineered predictive features and trained statistical/ML models for production forecasting workloads deployed on AWS Lambda.",
      "Model Evaluation & Selection: Benchmarked competing forecasting models using MAPE and automated best-model selection logic, integrating results into CI/CD pipelines for repeatable, auditable ML deployment cycles.",
      "Enterprise Modeling Platform: Built PostgreSQL-based analytical workflows combining client-specific attribute/value filters, time-period and geography segmentation, and recoding logic with Dirichlet-Multinomial (DirMult) modeling and hierarchical clustering to generate CDT decision trees and downstream analytical outputs.",
      "Automation Impact: Automated preprocessing, validation, and pre-QC workflows in Python and R, eliminating ~40 hours/week of manual effort and improving data pipeline reliability.",
      "Applied ML for Business: Developed Scikit-learn customer segmentation and behavioral prediction models that improved targeting efficiency by 20%, directly informing marketing and business strategy.",
      "GenAI Prototyping: Built a goal-driven LLM analytics agent using agentic AI and RAG patterns, enabling multi-step reasoning, tool invocation, and automated insight generation over enterprise datasets."
    ],
    skills: ["Python", "Scikit-learn", "TensorFlow", "AWS Lambda", "CI/CD MLOps", "YOLOv8", "RAG & LLMs", "MAPE", "Docker", "PostgreSQL", "DirMult"]
  },
  {
    id: "genpact-intern",
    company: "Genpact",
    role: "Data Analyst Intern",
    type: "Internship",
    period: "Jan 2024 – Jun 2024",
    location: "Bengaluru, India",
    current: false,
    accent: "from-blue-500 to-cyan-600",
    metrics: [
      { label: "Query Latency Cut", value: "45%" },
      { label: "Dashboard Latency", value: "Real-time" }
    ],
    highlights: [
      "Optimized complex SQL queries against Oracle Database, reducing dashboard data-fetch latency by 45% and improving reporting responsiveness for business stakeholders.",
      "Designed and delivered interactive KPI dashboards in Power BI and Tableau to support data-driven business reporting."
    ],
    skills: ["Oracle DB", "SQL Optimization", "Power BI", "Tableau", "ETL", "Query Tuning"]
  }
];

export const PROJECTS = [
  {
    id: "llm-agent",
    title: "LLM-Based Analytics Agent (Internal POC)",
    category: "Agentic AI & RAG",
    tagline: "Autonomous multi-step reasoning AI system with dynamic tool invocation & memory",
    description: "Built a Python agentic AI system with multi-step reasoning, tool usage, prompt orchestration, and memory-based context for automated data analysis and insight generation using RAG patterns.",
    longDescription: "Engineered an autonomous agent loop that decomposes complex analytical queries into sub-tasks, queries relational data lakes via dynamic tool calling, integrates RAG for enterprise documentation, and synthesizes structured insight reports with hallucination safeguards.",
    image: "https://images.unsplash.com/photo-1677442136019-21780ecad995?q=80&w=800&auto=format&fit=crop",
    techStack: ["Python", "Agentic AI", "LLMs", "RAG", "Prompt Orchestration", "Tool Calling", "Memory Context"],
    features: [
      "Multi-step goal decomposition and dynamic tool calling execution engine",
      "Short-term and long-term memory retrieval for multi-turn reasoning context",
      "RAG integration with document vector stores and structured query synthesis",
      "Fail-safe retry mechanisms and structured JSON output validation"
    ],
    github: "https://github.com/AADIKANE002",
    featured: true
  },
  {
    id: "robo-weed",
    title: "RoboWeed — IoT Agricultural Rover",
    category: "Computer Vision & Edge AI",
    tagline: "Raspberry Pi + YOLOv8 real-time computer vision pipeline with 90% detection accuracy",
    description: "Engineered a real-time YOLOv8 computer-vision pipeline on Raspberry Pi with Python, Roboflow, and IoT sensors for automated weed detection and targeted spraying; achieved 90% detection accuracy.",
    longDescription: "Trained and quantified a custom YOLOv8 model for edge computing constraints on Raspberry Pi. Built a real-time camera video stream inference loop coupled to GPIO motor and sprayer actuators for precision agricultural intervention.",
    image: "https://images.unsplash.com/photo-1581092335397-9583fe92d232?q=80&w=800&auto=format&fit=crop",
    techStack: ["Python", "YOLOv8", "Computer Vision", "Raspberry Pi", "Roboflow", "IoT Core", "Edge AI"],
    features: [
      "Custom YOLOv8 object detection model fine-tuned on agricultural field datasets",
      "90% real-time weed detection accuracy with rapid edge inference",
      "Automated GPIO hardware actuator triggering for targeted spray control",
      "Telemetry telemetry logging and IoT cloud synchronization"
    ],
    github: "https://github.com/AADIKANE002",
    featured: true
  },
  {
    id: "sales-nexus",
    title: "Sales-Nexus — Time-Series + LLM Forecasting Framework",
    category: "Production ML",
    tagline: "Reusable forecasting framework combining feature engineering, MAPE selection & LLM insights",
    description: "Designed a reusable forecasting framework combining preprocessing, feature engineering, error-based model selection, and LLM-generated business insights deployed on AWS Lambda.",
    longDescription: "Built automated model benchmarking logic evaluating multiple candidate forecasting models using MAPE (Mean Absolute Percentage Error), deploying top-performing candidates to AWS Lambda with CI/CD integration.",
    image: "https://images.unsplash.com/photo-1551288049-bebda4e38f71?q=80&w=800&auto=format&fit=crop",
    techStack: ["Python", "Scikit-learn", "Time-Series", "MAPE", "AWS Lambda", "Docker", "PostgreSQL"],
    features: [
      "Automated model benchmarking comparing statistical & ML estimators via MAPE",
      "CI/CD integrated deployment pipeline to AWS Lambda serverless endpoints",
      "Feature engineering with multi-period seasonality and regional attribute segmentation",
      "Automated insight generation translating forecast numbers into strategic advice"
    ],
    github: "https://github.com/AADIKANE002",
    featured: true
  },
  {
    id: "buyme-platform",
    title: "BuyMe — High-Throughput E-Commerce Platform",
    category: "Full Stack ML Systems",
    tagline: "Modular e-commerce platform with REST APIs, authentication & underlying data model",
    description: "Developed a full-stack platform using Django, JavaScript, and SQLite with user authentication, order management, REST APIs, and modular MVC architecture.",
    longDescription: "Structured relational database schemas with optimized indexing, designed transactional tracking, and implemented customer purchasing analytics pipelines.",
    image: "https://images.unsplash.com/photo-1557821552-17105176677c?q=80&w=800&auto=format&fit=crop",
    techStack: ["Django", "Python", "REST APIs", "JavaScript", "SQLite", "MVC Architecture"],
    features: [
      "Robust user authentication and session management system",
      "Scalable REST APIs for cart, checkout, and inventory synchronization",
      "Dynamic frontend interactivity using clean modular JavaScript",
      "Relational database schema with optimized indexing for product catalog queries"
    ],
    github: "https://github.com/AADIKANE002",
    featured: false
  }
];

export const SKILL_CATEGORIES = [
  {
    title: "Machine Learning & CV",
    icon: "Brain",
    skills: [
      { name: "Scikit-learn & TensorFlow", level: 94, tag: "Supervised & Unsupervised" },
      { name: "YOLOv8 & Computer Vision", level: 92, tag: "Edge Detection (90% Acc)" },
      { name: "Time-Series Forecasting", level: 95, tag: "Production Pipelines" },
      { name: "Model Evaluation & Selection", level: 95, tag: "MAPE Error Benchmarking" },
      { name: "Feature Engineering", level: 92, tag: "Data Transformation" },
      { name: "Natural Language Processing (NLP)", level: 88, tag: "Text Analytics" }
    ]
  },
  {
    title: "Generative AI & Agents",
    icon: "Sparkles",
    skills: [
      { name: "LLMs & Prompt Orchestration", level: 94, tag: "Structured Context" },
      { name: "Retrieval-Augmented Gen (RAG)", level: 92, tag: "Vector Stores & Context" },
      { name: "Agentic AI & Multi-Step Reasoning", level: 92, tag: "Tool-Calling Agents" },
      { name: "Memory-Based Context Handling", level: 90, tag: "Stateful Reasoning" },
      { name: "Automated Insight Generation", level: 92, tag: "Executive Summaries" }
    ]
  },
  {
    title: "MLOps & Cloud Platforms",
    icon: "Cloud",
    skills: [
      { name: "AWS Lambda", level: 92, tag: "Serverless ML Workloads" },
      { name: "CI / CD Pipeline Automation", level: 90, tag: "Automated Model Selection" },
      { name: "Docker", level: 88, tag: "Containerized Workloads" },
      { name: "AWS EC2 & IoT Core", level: 85, tag: "Edge & Cloud Compute" },
      { name: "Oracle Cloud Infrastructure (OCI)", level: 82, tag: "AI Foundations" },
      { name: "Git & GitHub", level: 94, tag: "Version Control" }
    ]
  },
  {
    title: "Data Engineering & Modeling",
    icon: "Server",
    skills: [
      { name: "PostgreSQL & Oracle DB", level: 92, tag: "Data Extraction & Tuning" },
      { name: "Dirichlet-Multinomial Modeling", level: 94, tag: "CDT Decision Trees" },
      { name: "Hierarchical Clustering", level: 90, tag: "Customer Segmentation" },
      { name: "ETL & Pre-QC Automation", level: 95, tag: "40+ hrs/wk Saved" },
      { name: "SQL Query Tuning", level: 92, tag: "45% Latency Cut" }
    ]
  },
  {
    title: "Programming Languages",
    icon: "Code2",
    skills: [
      { name: "Python", level: 96, tag: "Primary ML & AI" },
      { name: "SQL", level: 92, tag: "Complex Queries & Optimization" },
      { name: "R", level: 85, tag: "Statistical Logic & DirMult" },
      { name: "Java", level: 84, tag: "OOP & Android" },
      { name: "C++", level: 88, tag: "DSA & Algorithmic Speed" }
    ]
  }
];

export const ACHIEVEMENTS = [
  {
    id: "leetcode",
    title: "LeetCode 1835 Rating",
    subtitle: "Top 6.3% Globally",
    description: "Consistent problem solver with deep algorithmic foundation across dynamic programming, graph theory, trees, and machine learning computation.",
    icon: "Trophy",
    badge: "Top 6.3%",
    stat: "1835 Rating",
    link: "https://leetcode.com/"
  },
  {
    id: "impact-genpact",
    title: "Genpact ML Pipeline & QC Impact",
    subtitle: "40+ hrs/wk Saved | +20% Efficiency",
    description: "Automated ML preprocessing saving 40+ hours weekly, built Scikit-learn segmentation boosting targeting by 20%, and reduced database latency by 45%.",
    icon: "Zap",
    badge: "Production Impact",
    stat: "40+ hrs/wk"
  },
  {
    id: "codejam",
    title: "Google Code Jam Qualifier",
    subtitle: "Score: 71 / 100",
    description: "Qualified for Google's prestigious international algorithmic programming competition, demonstrating high-speed analytical problem-solving.",
    icon: "Award",
    badge: "International",
    stat: "71/100 Score"
  },
  {
    id: "dsc-lead",
    title: "Co-Lead Competitive Programming",
    subtitle: "Google Developer Student Clubs (DSC RVITM)",
    description: "Mentored 150+ students in Data Structures, Algorithms, and ML problem-solving; organized university coding contests.",
    icon: "Users",
    badge: "Leadership",
    stat: "150+ Mentees"
  },
  {
    id: "robotics",
    title: "1st Place, CODE BATTLE",
    subtitle: "Phoenix Robotics Club & 2nd Place CODM",
    description: "Won 1st place in algorithmic programming championship and 2nd place in robotics software development challenge.",
    icon: "Sparkles",
    badge: "Champion",
    stat: "1st Place"
  }
];

export const CERTIFICATIONS = [
  {
    title: "Lean Six Sigma Green Belt",
    issuer: "Genpact",
    tag: "Process Optimization & Quality",
    icon: "ShieldCheck"
  },
  {
    title: "Machine Learning, Data Science & GenAI with Python",
    issuer: "Udemy",
    tag: "ML, Deep Learning & GenAI",
    icon: "Brain"
  },
  {
    title: "Natural Language Processing with Python",
    issuer: "Udemy",
    tag: "NLP & Text Processing",
    icon: "Sparkles"
  },
  {
    title: "Oracle Cloud Infrastructure (OCI) AI Foundations",
    issuer: "Oracle University",
    tag: "Cloud AI Architecture",
    icon: "Cloud"
  },
  {
    title: "Python Data Structures",
    issuer: "University of Michigan (Coursera)",
    tag: "Data Structures & Computational Logic",
    icon: "Code2"
  }
];

export const EDUCATION = {
  institution: "RV Institute of Technology and Management",
  degree: "Bachelor of Engineering (B.E.)",
  field: "Computer Science and Engineering",
  period: "2020 – 2024",
  gpa: "8.04 / 10.0",
  location: "Bengaluru, India",
  highlights: [
    "Co-lead Competitive Programming at Google DSC RVITM",
    "Coursework in Machine Learning, Neural Networks, Database Management, Computer Vision, Algorithms, and Cloud Systems"
  ]
};

export const TERMINAL_COMMANDS = {
  help: `Available commands:
  • about       - ML engineer background summary
  • exp         - View work experience timeline
  • projects    - List all ML, CV & GenAI projects
  • skills      - Output technical skill matrix
  • certs       - Professional ML & AI certifications
  • achievements- Honors, awards & competitive coding
  • education   - Academic background & GPA
  • contact     - Direct links and email
  • resume      - Download or view ML Engineer resume
  • clear       - Clean terminal screen
  • matrix      - Secret hacker matrix rain toggle`,

  about: `${PERSONAL_INFO.name} - ${PERSONAL_INFO.role} (${PERSONAL_INFO.titleSuffix})
Location: ${PERSONAL_INFO.location}
Bio: ${PERSONAL_INFO.bio}
Status: ${PERSONAL_INFO.status}`,

  exp: `[1] Genpact | Machine Learning Engineer / Data Scientist (Aug 2024 - Present)
    • Architected Python ML pipelines for time-series forecasting on AWS Lambda
    • Benchmarked candidate models with MAPE & integrated automated CI/CD selection
    • Built Dirichlet-Multinomial (DirMult) modeling & hierarchical clustering
    • Scikit-learn segmentation boosting targeting by 20%
    • Built goal-driven LLM analytics agent with multi-step reasoning & RAG
    • Automated pre-QC saving 40+ hrs/week

[2] Genpact | Data Analyst Intern (Jan 2024 - Jun 2024)
    • Optimized complex Oracle DB SQL queries (-45% latency)
    • Built Power BI & Tableau executive KPI dashboards`,

  projects: `[1] LLM-Based Analytics Agent (Python, Agentic AI, Multi-step Reasoner, RAG)
[2] RoboWeed — IoT Agricultural Rover (Raspberry Pi, YOLOv8, 90% Detection Accuracy)
[3] Sales-Nexus — Production Forecasting Pipeline (MAPE Model Selection, AWS Lambda)
[4] BuyMe — High-Throughput E-Commerce Platform (Django, REST, SQLite)`,

  skills: `• ML & CV: Scikit-learn, TensorFlow, YOLOv8, Time-Series Forecasting, Feature Engineering, MAPE, NLP
• GenAI: LLMs, RAG, Agentic AI, Multi-Step Reasoning, Prompt Orchestration, Memory Context
• MLOps & Cloud: AWS Lambda, Docker, CI/CD Pipeline Automation, AWS EC2, IoT Core, OCI, Git
• Data & Modeling: PostgreSQL, Oracle DB, SQL Tuning, DirMult Modeling, Hierarchical Clustering
• Languages: Python, SQL, R, Java, C++`,

  certs: `🎓 Lean Six Sigma Green Belt — Genpact
🎓 Machine Learning, Data Science & GenAI with Python — Udemy
🎓 Natural Language Processing with Python — Udemy
🎓 OCI AI Foundations — Oracle University
🎓 Python Data Structures — University of Michigan`,

  achievements: `🏆 LeetCode 1835 Rating (Top 6.3% Globally)
🤖 90% Detection Accuracy on YOLOv8 Edge Rover
⚡ 40+ hrs/wk Saved via ML Pipeline Automation at Genpact
🚀 Google Code Jam Qualifier (Score: 71/100)
👥 Co-Lead Competitive Programming @ Google DSC RVITM
🥇 1st Place, CODE BATTLE — Phoenix Robotics Club`,

  education: `🎓 RV Institute of Technology and Management (2020 - 2024)
Degree: B.E. in Computer Science (GPA: 8.04 / 10)
Location: Bengaluru, India`,

  contact: `📧 Email: ${PERSONAL_INFO.email}
📱 Phone: ${PERSONAL_INFO.phone}
💼 LinkedIn: ${PERSONAL_INFO.linkedin}
🐙 GitHub: ${PERSONAL_INFO.github}`,

  resume: `📄 Opening Resume: ${PERSONAL_INFO.resumePdfUrl}`
};
