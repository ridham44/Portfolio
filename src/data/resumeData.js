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
        title: 'MERN Intern',
        company: 'WebEarl Technologies',
        period: 'Mar 2026 – Present',
        current: true,
        points: [
            'BookBuzz: Developed an academic book exchange and marketplace platform with APIs for authentication, books, cart management, purchases, trade-in orders, students, and publishers using Node.js, Express.js, MongoDB, and Mongoose.',
            'PropertyHub: Built a real estate listing platform with APIs for properties, documents, amenities, nearby places, reviews, shortlists, and advanced search functionality using Node.js, Express.js, MongoDB, and Mongoose.',
            'Shoply: Developed a scalable multi-tenant restaurant ordering and POS backend with APIs for menus, orders, billing, payments, QR code ordering, and reporting using Node.js, Express.js, Sequelize ORM, and MySQL.',
        ],
    },
    {
        title: 'Node.js Intern',
        company: 'Communities Heritage Limited (CHL Group)',
        period: 'May 2025 – Dec 2025',
        current: false,
        points: [
            'CHPL Food: Developed a scalable multi-tenant food ordering system backend with APIs for menu, orders, billing, payments, and reporting using Node.js, Express.js, Sequelize ORM, and MySQL.',
            'CHPL Vi: Built APIs and reports for call tracking, logging, and analytics including call details, role-based access, and timezone handling for tenant-specific insights using Node.js, Express.js, Sequelize ORM, and MySQL.',
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

    // ── TIER 1 · Full-Stack + AI/ML flagships ──────────────────────────────
    {
        id: 1,
        title: 'F1 Race Strategy Prediction & Analytics Platform',
        description:
            'Full-stack Formula 1 intelligence platform — MERN stack, Python ML pipelines, and Generative AI delivering real-time race strategy predictions, pit-stop optimisation, and driver performance insights.',
        details:
            'Engineered end-to-end from data ingestion to interactive dashboards. Python ML services (scikit-learn) model tyre degradation, undercut windows, and safety-car probabilities. A Generative AI layer produces automated strategic race briefings. Node.js/Express REST APIs connect async ML services to a React frontend persisted in MongoDB.',
        tech: ['React', 'Node.js', 'Express.js', 'MongoDB', 'Python', 'ML', 'Generative AI'],
        tags: ['React', 'Node.js', 'MongoDB', 'Python', 'ML', 'AI'],
        github: 'https://github.com/ridham44/F1',
        color: 'from-sky-500 to-cyan-500',
    },
    {
        id: 2,
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
    {
        id: 3,
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

    // ── TIER 2 · Production internship backends ────────────────────────────
    {
        id: 4,
        title: 'Enterprise Multi-Tenant Food Ordering System',
        description:
            'Production-grade multi-tenant food ordering backend built during internship — full order lifecycle, billing, payment integration, and business reporting at scale.',
        details:
            'Architected for SaaS multi-tenancy using Node.js, Express.js, Sequelize ORM, and MySQL. Covers menu configuration, cart management, order tracking, billing engine, payment gateway hooks, and per-tenant analytics reports. Shipped at Communities Heritage Limited (CHL Group) as a live internship deliverable.',
        tech: ['Node.js', 'Express.js', 'Sequelize ORM', 'MySQL'],
        tags: ['Node.js', 'Backend', 'API'],
        github: 'https://github.com/ridham44/Food-backend',
        color: 'from-emerald-500 to-teal-500',
    },
    {
        id: 5,
        title: 'vi Telecom — Call Tracking & Analytics Backend',
        description:
            'Real-world telecom backend for Vodafone Idea (vi) — call log APIs, role-based access control, and tenant-specific performance analytics with timezone-aware reporting.',
        details:
            'Developed at CHL Group for vi (Vodafone Idea). Node.js/Express.js service with Sequelize ORM and MySQL manages CDR (call detail records), agent performance metrics, and generates analytical reports segmented by tenant and timezone. Secure RBAC enforced across all endpoints to isolate tenant data.',
        tech: ['Node.js', 'Express.js', 'Sequelize ORM', 'MySQL'],
        tags: ['Node.js', 'Backend', 'API'],
        github: 'https://github.com/ridham44/vi',
        color: 'from-blue-500 to-indigo-500',
    },
    {
        id: 6,
        title: 'Property Management System',
        description:
            'Real estate backend system for property listings, tenant onboarding, and booking management — built with secure role-based APIs.',
        details:
            'Node.js/Express.js REST API with Sequelize ORM and MySQL for managing property inventory, tenant records, booking workflows, and lease tracking. RBAC ensures landlords, tenants, and admins each access appropriate data views. Built as a full internship backend portfolio project.',
        tech: ['Node.js', 'Express.js', 'Sequelize ORM', 'MySQL'],
        tags: ['Node.js', 'Backend', 'API'],
        github: 'https://github.com/ridham44/99acres',
        color: 'from-cyan-500 to-sky-500',
    },

    // ── TIER 3 · Full-stack & domain projects ─────────────────────────────
    {
        id: 7,
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
    {
        id: 8,
        title: 'AI Medicine Recommendation System',
        description:
            'Symptom-driven medicine recommendation engine using ML models trained on medical datasets, served through an ASP.NET web interface.',
        details:
            'Users input symptoms, age, and gender; a trained multi-class classification model returns ranked medicine suggestions with confidence scores. Built on ASP.NET with a C# backend integrating ML model inference, structured medical dataset preprocessing, and a responsive frontend UI.',
        tech: ['C#', 'ASP.NET', 'ML'],
        tags: ['ML', 'AI', 'C#'],
        github: 'https://github.com/ridham44/Medicine-Recommender-System',
        color: 'from-green-500 to-emerald-500',
    },

    // ── TIER 4 · Data visualisation ───────────────────────────────────────
    {
        id: 9,
        title: 'Formula 1 Championship Analytics Dashboard',
        description:
            'Advanced Power BI report delivering deep-dive analytics on F1 drivers, constructors, and race outcomes with DAX-powered measures.',
        details:
            'Interactive multi-page report built with Power Query transformations and DAX measures — analysing podium distributions, qualifying vs race pace correlation, constructor points trajectories, and era-specific dominance trends using historical Formula 1 datasets.',
        tech: ['Power BI', 'DAX', 'Power Query'],
        tags: ['Power BI', 'Analytics'],
        github: 'https://github.com/ridham44/Formula-1-Dashboard-using-powerbi',
        color: 'from-yellow-500 to-amber-500',
    },
    {
        id: 10,
        title: 'Healthcare Operations Analytics Dashboard',
        description:
            'Multi-page Power BI dashboard for hospital administrators — patient flow, treatment effectiveness, resource utilisation, and financial KPIs.',
        details:
            'Custom DAX calculations track admission rates, average treatment durations, department-level resource utilisation, bed occupancy trends, and financial KPIs. Designed to surface actionable operational insights for hospital management.',
        tech: ['Power BI', 'DAX', 'Power Query'],
        tags: ['Power BI', 'Analytics'],
        github: 'https://github.com/ridham44/Medical-Hospital-Dashboard-using-powerbi',
        color: 'from-teal-500 to-cyan-500',
    },

    // ── TIER 5 · Core CS fundamentals ─────────────────────────────────────
    {
        id: 11,
        title: 'Java Banking Management System',
        description:
            'Console-based banking application covering the full account lifecycle — deposits, withdrawals, transfers, and fixed deposits — with JDBC-backed MySQL persistence.',
        details:
            'Implements core banking operations with clear OOP separation between account, transaction, and reporting modules. JDBC handles MySQL connectivity for durable transaction logging. Demonstrates strong object-oriented design, exception handling, and layered architecture.',
        tech: ['Java', 'JDBC', 'MySQL'],
        tags: ['Java'],
        github: 'https://github.com/ridham44/Bank-Management-System',
        color: 'from-purple-500 to-violet-500',
    },
    {
        id: 12,
        title: 'Java Flight Reservation System',
        description:
            'Structured Java application for flight scheduling, seat booking, passenger management, and itinerary reporting.',
        details:
            'Covers end-to-end flight operations: route scheduling, real-time seat availability, booking creation, passenger manifest generation, and cancellation workflows. Designed with modular OOP principles — clean separation of route, booking, and passenger management layers.',
        tech: ['Java'],
        tags: ['Java'],
        github: 'https://github.com/ridham44/FlightManagementSystem1',
        color: 'from-slate-500 to-gray-600',
    },
];

export const filterTags = ['All', 'React', 'Node.js', 'Python', 'ML', 'AI', 'NLP', 'Django', 'Flask', 'MongoDB', 'Java', 'Power BI', 'C#'];

export const stats = [
    { label: 'GPA', value: '7.85', unit: '/10' },
    { label: 'Projects', value: '12+', unit: '' },
    { label: 'Certificates', value: '10', unit: '' },
    { label: 'Internships', value: '2', unit: '' },
];
