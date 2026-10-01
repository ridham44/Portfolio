export const personalInfo = {
    name: 'Ridham Patel',
    title: 'Full Stack Developer & AI Enthusiast',
    subtitle: 'MERN Stack • Machine Learning • Backend Systems',
    bio: 'I build fast, scalable, and intelligent digital experiences powered by modern web technologies and AI. Passionate about crafting products that combine clean architecture, smooth user experiences, and real-world problem solving.',
    email: 'ridhampaems@gmail.com',
    phone: '+91 9313887585',
    location: 'Ahmedabad, Gujarat, India',
    linkedin: 'https://www.linkedin.com/in/ridham-patel-141517279',
    github: 'https://github.com/ridham44',
};

export const education = [
    {
        degree: 'Bachelor of Computer Science and Technology',
        institution: 'LJ Institute of Engineering and Technology, LJ University',
        period: '2022 – 2026',
        gpa: '7.98 / 10',
    },
];

export const experience = [
    {
        title: 'AI/ML Developer',
        company: 'Work24',
        period: 'Aug 2026 - Present',
        current: true,
        points: [
            'Work on Hyphen OI, a live AI-powered platform built using large language models (LLMs) and AI APIs.',
            'Develop LLM response generation and optimization pipelines and conversational flows for accurate, natural interactions.',
            'Build AI chat, voice, and voice-to-voice capabilities to enable real-time user interactions.',
            'Contribute to Generative AI, Conversational AI, Voice AI, and Python-based application development.',
        ],
    },
    {
        title: 'MERN Stack Intern',
        company: 'WebEarl Technologies',
        period: 'Mar 2026 - Aug 2026',
        current: false,
        points: [
            'BookBuzz: Developed backend APIs for a live academic book marketplace covering authentication, books, cart, purchases, trade-ins, students, and publishers.',
            'PropertyHub: Built APIs for a real-estate platform covering property listings, documents, amenities, reviews, shortlists, nearby places, and advanced search.',
            'Shoply: Developed backend services for a multi-tenant restaurant ordering and POS system, including menus, orders, billing, payments, QR ordering, and reporting.',
            'Built and integrated REST APIs using Node.js, Express.js, MongoDB, Mongoose, Sequelize, and MySQL.',
        ],
    },
    {
        title: 'Graphic Design Intern',
        company: 'Art O Print',
        period: 'Nov 2025 - Feb 2026',
        current: false,
        points: [
            'Designed medical product packaging and print-ready box layouts based on client specifications.',
            'Created layouts with accurate dimensions, typography, alignment, and visual consistency.',
        ],
    },
    {
        title: 'Node.js Intern',
        company: 'Communities Heritage Limited (CHL Group)',
        period: 'May 2025 - Oct 2025',
        current: false,
        points: [
            'CHPL Food: Developed backend APIs for a multi-tenant food ordering platform, including menus, orders, billing, payments, and reporting.',
            'CHPL VI: Developed APIs and analytics for a call tracking and logging platform, including RBAC, timezone handling, and tenant-specific reporting.',
            'Built scalable REST APIs using Node.js, Express.js, Sequelize ORM, and MySQL; collaborated using GitLab in an Agile environment.',
        ],
    },
];

export const skillGroups = [
    {
        category: 'Programming & Development',
        skills: ['Python', 'Java', 'JavaScript', 'React', 'Node.js', 'Express.js'],
    },
    {
        category: 'Data & Backend',
        skills: ['SQL', 'NoSQL', 'Html', 'Css', 'Machine Learning', 'Generative AI', 'Data Science'],
    },
    {
        category: 'Tools & Platforms',
        skills: ['Git', 'AWS', 'Power BI', 'Postman', 'Django', '.Net', 'Sequelize ORM'],
    },
];


export const projects = [

    // ── AI Platforms ──────────────────────────────────────────────────────
    {
        id: 17,
        title: 'RecruitIQ — AI Recruitment Platform',
        description:
            'Full-stack AI hiring platform where companies post jobs, screen and shortlist candidates, and run AI voice interviews.',
        details:
            'Designed a hybrid screening engine that blends deterministic skill, experience, and education scoring with LLM analysis, keeping demographic data out of prompts. Built AI voice interviews over LiveKit with Deepgram STT/TTS, driven by a stage-based state machine that auto-generates interview reports. Implemented race-safe interview slot booking, automated Brevo email notifications, and secure JWT authentication on a Node.js, PostgreSQL, and Prisma backend.',
        tech: ['React', 'Node.js', 'PostgreSQL', 'Prisma', 'LiveKit', 'Deepgram', 'LLM'],
        tags: ['AI', 'Fullstack', 'React', 'Node.js'],
        live: 'https://recruitiq-eta.vercel.app/',
        color: 'from-indigo-500 to-blue-500',
    },
    {
        id: 18,
        title: 'KnowledgeVoice — AI Knowledge Base Assistant',
        description:
            'RAG-based assistant that answers questions from uploaded PDF, DOCX, and TXT files with cited sources and voice Q&A.',
        details:
            'Implemented a pipeline for text extraction, chunking, and embeddings with strict per-user data isolation in MongoDB. Answers are generated through OpenRouter with source citations. Added voice Q&A with live transcription and Deepgram text-to-speech, plus JWT authentication with email-OTP verification.',
        tech: ['React', 'Express.js', 'MongoDB', 'OpenRouter', 'Deepgram', 'RAG'],
        tags: ['AI', 'RAG', 'Fullstack', 'React', 'Node.js', 'MongoDB'],
        live: 'https://w24-knowledge-agent.vercel.app/',
        color: 'from-teal-500 to-emerald-500',
    },
    {
        id: 4,
        title: 'Local AI Research Engine — Hardware-Aware RAG Assistant',
        description:
            'A fully local, privacy-first AI research assistant that performs intent classification, document retrieval, and dynamic model routing without relying on cloud APIs.',
        details:
            'Built a hardware-aware local AI RAG system using Python and FastAPI with a React frontend. The backend employs an in-process NLP stack (spaCy, RapidFuzz, ONNX MiniLM) for microsecond query understanding and semantic intent matching. It dynamically routes queries to the optimal local LLM via Ollama based on complexity, retrieving evidence from documents using ChromaDB vector search and BM25 with cross-encoder reranking.',
        tech: ['Python', 'FastAPI', 'React', 'Ollama', 'ChromaDB', 'spaCy'],
        tags: ['AI', 'ML', 'RAG', 'Fullstack', 'Python', 'FastAPI'],
        github: 'https://github.com/ridham44/LLM-project-Cars',
        color: 'from-fuchsia-500 to-purple-500',
    },

    // ── Full-Stack Applications ───────────────────────────────────────────
    {
        id: 8,
        title: 'Enterprise Multi-Tenant Food Ordering System',
        description:
            'Production-grade multi-tenant food ordering backend built during internship — full order lifecycle, billing, payment integration, and business reporting at scale.',
        details:
            'Architected for SaaS multi-tenancy using Node.js, Express.js, Sequelize ORM, and MySQL. Covers menu configuration, cart management, order tracking, billing engine, payment gateway hooks, and per-tenant analytics reports. Shipped at Communities Heritage Limited (CHL Group) as a live internship deliverable.',
        tech: ['Node.js', 'Express.js', 'Sequelize ORM', 'MySQL'],
        tags: ['Node.js', 'Fullstack'],
        github: 'https://github.com/ridham44/Food',
        color: 'from-emerald-500 to-teal-500',
    },
    {
        id: 11,
        title: 'NFS-Inspired Car Review & Community Platform',
        description:
            'Full-stack MERN community platform for automotive enthusiasts — JWT-authenticated reviews, ratings, user profiles, and a visually immersive UI inspired by Need for Speed.',
        details:
            'Complete MERN application with JWT authentication, review & star-rating workflows, user profile management, and a responsive, visually driven React frontend styled with Tailwind CSS. MongoDB Atlas handles persistence with aggregation pipelines powering leaderboard rankings.',
        tech: ['React', 'Node.js', 'MongoDB', 'Express.js', 'Tailwind CSS'],
        tags: ['React', 'Node.js', 'MongoDB'],
        github: 'https://github.com/ridham44/Nfs',
        color: 'from-orange-500 to-red-500',
    },

    // ── Machine Learning ──────────────────────────────────────────────────
    {
        id: 7,
        title: 'AI-Powered Stock Market Prediction System',
        description:
            'Financial analytics platform using scikit-learn ML models trained on historical Yahoo Finance data to forecast stock prices with interactive Plotly charts.',
        details:
            'Trains multiple regression and classification models on historical OHLCV data pulled via the Yahoo Finance API. Django backend orchestrates model inference and exposes prediction endpoints. Plotly charts render forecast trends, confidence bands, and market signals inside a clean, responsive dashboard.',
        tech: ['Python', 'Django', 'ML', 'scikit-learn', 'Plotly'],
        tags: ['Python', 'Django', 'ML'],
        github: 'https://github.com/ridham44/Stock-market-Prediction-with-Machine-Learning-Django',
        color: 'from-violet-500 to-indigo-500',
    },
    {
        id: 6,
        title: 'AI Movie Recommendation & Emotion Analysis System',
        description:
            'Personalised film recommendation engine powered by a custom NLP emotion classifier that maps user mood — happy, sad, curious, excited — to genre-specific curated suggestions via Hugging Face datasets.',
        details:
            'Built a multi-class emotion classifier using NLP tokenisation and transformer-based embeddings from Hugging Face. Detected emotional states are mapped to cinematic genres for deeply personalised recommendations. Flask REST API serves the model; a glassmorphism-style frontend delivers an immersive, mood-driven UX.',
        tech: ['Python', 'Flask', 'ML', 'NLP', 'Hugging Face'],
        tags: ['Python', 'Flask', 'ML', 'NLP', 'AI'],
        github: 'https://github.com/ridham44/Movie-Nlp',
        color: 'from-pink-500 to-rose-500',
    },

    // ── Frontend Engineering ──────────────────────────────────────────────
    {
        id: 1,
        title: 'OrbitDevStudio — Enterprise Software Agency Platform',
        description:
            'Enterprise-grade multi-page company website engineered with modern frontend architecture, premium motion design, and high-performance user experience.',
        details:
            'Architected and developed the official digital platform for OrbitDevStudio, focusing on scalable frontend architecture, premium visual storytelling, and performance-first engineering. Implemented responsive multi-page navigation, reusable component architecture, Framer Motion micro-interactions, interactive particle effects, dynamic portfolio showcases, bento-grid layouts, service and industry pages, careers portal, and an EmailJS-based inquiry workflow with automated customer acknowledgements. Built with accessibility, SEO, Lighthouse optimization, and production deployment best practices to provide a polished experience across desktop and mobile devices.',
        tech: ['React', 'TypeScript', 'Vite', 'Tailwind CSS', 'Framer Motion', 'React Router', 'EmailJS'],
        tags: ['React', 'Frontend Engineering', 'UI Engineering', 'Agency Platform'],
        live: 'https://orbit-dev-studio.vercel.app/',
        color: 'from-blue-500 to-cyan-500',
    },
    {
        id: 2,
        title: 'NovaCure Pharma — Enterprise Pharmaceutical Corporate Website',
        description:
            'Premium multi-page pharmaceutical corporate website designed with modern UI/UX, interactive visualizations, and enterprise-grade frontend architecture.',
        details:
            'Developed a modern pharmaceutical company website featuring a cinematic hero section, interactive global operations map, research & development showcase, product portfolio, certification highlights, news & media section, careers, testimonials, and a premium contact experience. Implemented reusable React components, Framer Motion animations, responsive layouts, smooth page transitions, animated counters, interactive cards, and mobile-first optimization. The project follows clean architecture principles, accessibility standards, and SEO best practices while delivering a professional enterprise user experience across desktop, tablet, and mobile devices.',
        tech: ['React', 'TypeScript', 'Vite', 'Tailwind CSS', 'Framer Motion', 'React Router', 'Lucide React'],
        tags: ['React', 'Enterprise Website', 'Healthcare', 'Pharmaceutical', 'Frontend Engineering', 'UI Engineering'],
        live: 'https://pharmaceutical-demo.vercel.app/',
        color: 'from-emerald-500 to-teal-500',
    },
];

export const filterTags = ['All', 'AI', 'RAG', 'Fullstack', 'React', 'Node.js', 'MongoDB', 'Python', 'FastAPI', 'ML', 'NLP', 'Django', 'Flask', 'Frontend Engineering'];

export const stats = [
    { label: 'GPA', value: '7.97', unit: '/10' },
    { label: 'Projects', value: '13+', unit: '' },
    { label: 'Certificates', value: '10', unit: '' },
    { label: 'Internships', value: '3', unit: '' },
    { label: 'Full-time', value: '2', unit: '' },
];
