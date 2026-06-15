import { motion } from 'framer-motion';
import { education, experience, skillGroups } from '../data/resumeData';
import { certificates } from '../data/certificate';
import chplLogo from '../assets/chpl logo.png';
import ljLogo from '../assets/Lj unvi logo.png';
import webearlLogo from '../assets/webearl logo.png';

const fadeUp = (delay = 0) => ({
    initial: { opacity: 0, y: 24 },
    whileInView: { opacity: 1, y: 0 },
    viewport: { once: true },
    transition: { duration: 0.5, delay },
});

/* ── Skill icon map ── */
const SKILL_ICONS = {
    Python: 'https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/python/python-original.svg',
    Java: 'https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/java/java-original.svg',
    JavaScript: 'https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/javascript/javascript-original.svg',
    React: 'https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/react/react-original.svg',
    'Node.js': 'https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/nodejs/nodejs-original.svg',
    'Express.js': 'https://cdn.simpleicons.org/express/ffffff',
    SQL: 'https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/mysql/mysql-original.svg',
    NoSQL: 'https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/mongodb/mongodb-original.svg',
    Html: 'https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/html5/html5-original.svg',
    Css: 'https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/css3/css3-original.svg',
    'Machine Learning': 'https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/tensorflow/tensorflow-original.svg',
    'Generative AI': 'https://uxwing.com/wp-content/themes/uxwing/download/internet-network-technology/cybersecurity-icon.png',
    'Data Science': 'https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/jupyter/jupyter-original.svg',
    Git: 'https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/git/git-original.svg',
    AWS: 'https://banner2.cleanpng.com/20180817/eqe/5f57f9bfeb7fb5ccee9564fa00b5935f.webp',
    'Power BI': 'https://uxwing.com/wp-content/themes/uxwing/download/brands-and-social-media/power-bi-icon.png',
    Postman: 'https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/postman/postman-original.svg',
    Django: 'https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/django/django-plain.svg',
    '.Net': 'https://uxwing.com/wp-content/themes/uxwing/download/brands-and-social-media/microsoft-dot-net-icon.png',
    'Sequelize ORM': 'https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/sequelize/sequelize-original.svg',
};

/* ── Certificate issuer visual map ── */
const CERT_ISSUERS = {
    IBM: { type: 'img', url: 'https://uxwing.com/wp-content/themes/uxwing/download/brands-and-social-media/ibm-icon.png' },
    'Johns Hopkins University': { type: 'img', url: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTx1bmg1NLSCUIPfXLjdDgYCl1hae9Htci0UA&s' },
    'University of Michigan': { type: 'img', url: 'https://brand.umich.edu/assets/brand/style-guide/logo-guidelines/U-M_Logo-Hex.png' },
    'University of Pennsylvania': { type: 'img', url: 'https://upload.wikimedia.org/wikipedia/commons/9/92/UPenn_shield_with_banner.svg' },
    'Learn Quest': { type: 'img', url: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRw6hi-B3FisUf9ibXRWqwgWzkLDQr_8KxLuw&s' },
    AWS: { type: 'img', url: 'https://banner2.cleanpng.com/20180817/eqe/5f57f9bfeb7fb5ccee9564fa00b5935f.webp' },
    Postman: { type: 'img', url: 'https://cdn.simpleicons.org/postman/FF6C37' },
    'Yale University': { type: 'img', url: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTiXmWLdq7auFyFWJwPVGtRlxLe5LIUI6Q9GQ&s' },
    Microsoft: { type: 'img', url: 'data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAOEAAADhCAMAAAAJbSJIAAAAclBMVEXz8/PzUyWBvAYFpvD/ugjz9fb19Pbz+fr39fr69vPy9frzRAB5uAAAofD/tgDz2tXh6tLzTBbzmoix0oCAxfH70IHS5vL16dLz5ODo7d/zPQDzlIGs0Hje6/N4wvH7znn07d8AnvDzvrPL3q+v1/L43q8L8zFJAAABeUlEQVR4nO3cR24CURREURy6ScbknB32v0VPTAuJL3lU4MG5G3g6evNqtSRJ0lVVvOZUHa8oHKZbXYj1epSu9MHhpp9ts23/3urs3tKNbr9YDftP2caTRjh9DkdISEhISEhISEhISEhISEhISEhISEhISEhISEhISEhISEhISEhISEhISEhISEhISEhISEhISEhISEhISEhISEhISEhISEhISEhISEhISEhISEh4X+FmnK1/vV/6COFqO8m2/Wg2aD9302y7dWFnt2qnu9oR7qQrDwlLkvRn3XjNqbqXrioA94dZtsPXhVh/H+fZjqcCcXEehDtchL3je7plSTh4yTaYNcL5+2s2QkJCQkJCQkJCQkJCQkJCQkJCQkJCQkJCQkJCQkJCQkJCQkJCQkJCQkJCQkJCQkJCQkJCQkJCQkJCQkJCQkJCQkJCQkJCQkJCQkJCQkJCQkJCwvsK0/ul50fvl1aLdPvm1GmZrnsLvGtVvAcDJUn6Z/0AqSRGNlRkRI0AAAAASUVORK5CYII=' },
};

function IssuerBadge({ issuer }) {
    const cfg = CERT_ISSUERS[issuer];
    const size = 44;
    if (!cfg) {
        const initials = issuer
            .split(' ')
            .map((w) => w[0])
            .join('')
            .slice(0, 2)
            .toUpperCase();
        return (
            <div
                style={{
                    width: size,
                    height: size,
                    borderRadius: 10,
                    flexShrink: 0,
                    background: 'var(--accent-light)',
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'center',
                    fontSize: '0.72rem',
                    fontWeight: 800,
                    color: 'var(--accent)',
                }}
            >
                {initials}
            </div>
        );
    }
    if (cfg.type === 'img') {
        return (
            <div
                style={{
                    width: size,
                    height: size,
                    borderRadius: 10,
                    flexShrink: 0,
                    background: '#0f1020',
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'center',
                    padding: 8,
                }}
            >
                <img src={cfg.url} width={28} height={28} alt={issuer} style={{ objectFit: 'contain' }} />
            </div>
        );
    }
    return (
        <div
            style={{
                width: size,
                height: size,
                borderRadius: 10,
                flexShrink: 0,
                background: cfg.bg,
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
                fontSize: cfg.text.length > 3 ? '0.6rem' : '0.72rem',
                fontWeight: 800,
                color: cfg.color,
                letterSpacing: '0.02em',
            }}
        >
            {cfg.text}
        </div>
    );
}

const allSkills = skillGroups.flatMap((g) => g.skills);

const ORG_LOGOS = {
    'WebEarl Technologies': webearlLogo,
    'Communities Heritage Limited (CHL Group)': chplLogo,
    'LJ Institute of Engineering and Technology, LJ University': ljLogo,
};

function OrganizationLogo({ name }) {
    const logo = ORG_LOGOS[name];

    if (!logo) return null;

    return (
        <div
            style={{
                width: 48,
                height: 48,
                borderRadius: 12,
                flexShrink: 0,
                background: '#fff',
                border: '1px solid var(--border-card)',
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
                padding: 7,
                boxShadow: '0 10px 24px rgba(15, 16, 32, 0.12)',
            }}
        >
            <img src={logo} alt={`${name} logo`} style={{ width: '100%', height: '100%', objectFit: 'contain' }} />
        </div>
    );
}

export default function About() {
    return (
        <div className="page-container">
            {/* Header */}
            <motion.div {...fadeUp(0)} style={{ marginBottom: '3.5rem' }}>
                <h1 className="section-title">
                    About <span className="gradient-text">Me</span>
                </h1>
                <p className="section-subtitle">Crafting modern web experiences with clean code and smart systems.</p>
            </motion.div>

            {/* ── Experience ── */}
            <section style={{ marginBottom: '4rem' }}>
                <motion.h2
                    {...fadeUp(0.05)}
                    style={{
                        fontSize: '1.5rem',
                        fontWeight: 800,
                        marginBottom: '2rem',
                        display: 'flex',
                        alignItems: 'center',
                        gap: '0.6rem',
                    }}
                >
                    <span
                        style={{
                            width: 4,
                            height: 28,
                            background: 'linear-gradient(135deg, var(--accent), var(--accent-2))',
                            borderRadius: 4,
                            display: 'inline-block',
                        }}
                    />
                    Work Experience
                </motion.h2>

                <div style={{ position: 'relative', paddingLeft: '2.5rem' }}>
                    <div
                        style={{
                            position: 'absolute',
                            left: 10,
                            top: 8,
                            bottom: 0,
                            width: 2,
                            background: 'linear-gradient(to bottom, var(--accent), transparent)',
                            borderRadius: 2,
                        }}
                    />
                    {experience.map((job, i) => (
                        <motion.div key={i} {...fadeUp(i * 0.1)} style={{ position: 'relative', marginBottom: '2rem' }}>
                            <div
                                style={{
                                    position: 'absolute',
                                    left: -28,
                                    top: 6,
                                    width: 16,
                                    height: 16,
                                    borderRadius: '50%',
                                    background: job.current
                                        ? 'linear-gradient(135deg, var(--accent), var(--accent-2))'
                                        : 'var(--accent-light)',
                                    border: '3px solid var(--bg-primary)',
                                    boxShadow: job.current ? '0 0 12px var(--accent)' : 'none',
                                }}
                            />
                            <div className="glass" style={{ padding: '1.5rem 1.75rem' }}>
                                <div
                                    style={{
                                        display: 'flex',
                                        flexWrap: 'wrap',
                                        justifyContent: 'space-between',
                                        alignItems: 'flex-start',
                                        gap: '0.5rem',
                                        marginBottom: '0.75rem',
                                    }}
                                >
                                    <div style={{ display: 'flex', alignItems: 'center', gap: '0.85rem', minWidth: 0 }}>
                                        <OrganizationLogo name={job.company} />
                                        <div style={{ minWidth: 0 }}>
                                            <h3 style={{ fontWeight: 700, fontSize: '1.1rem' }}>{job.title}</h3>
                                            <p style={{ color: 'var(--accent)', fontWeight: 600, fontSize: '0.95rem' }}>{job.company}</p>
                                        </div>
                                    </div>
                                    <span
                                        style={{
                                            fontSize: '0.8rem',
                                            fontWeight: 500,
                                            padding: '0.25rem 0.75rem',
                                            borderRadius: 9999,
                                            background: job.current ? 'var(--accent-light)' : 'transparent',
                                            color: job.current ? 'var(--accent)' : 'var(--text-muted)',
                                            border: '1px solid var(--border-card)',
                                            whiteSpace: 'nowrap',
                                        }}
                                    >
                                        {job.current && <span style={{ marginRight: 4 }}>🟢</span>}
                                        {job.period}
                                    </span>
                                </div>
                                <ul style={{ paddingLeft: '1.2rem', color: 'var(--text-secondary)', lineHeight: 1.8, fontSize: '0.94rem' }}>
                                    {job.points.map((pt, j) => (
                                        <li key={j} style={{ marginBottom: '0.3rem' }}>
                                            {pt}
                                        </li>
                                    ))}
                                </ul>
                            </div>
                        </motion.div>
                    ))}
                </div>
            </section>

            {/* ── Education ── */}
            <section style={{ marginBottom: '4rem' }}>
                <motion.h2
                    {...fadeUp(0.05)}
                    style={{
                        fontSize: '1.5rem',
                        fontWeight: 800,
                        marginBottom: '1.5rem',
                        display: 'flex',
                        alignItems: 'center',
                        gap: '0.6rem',
                    }}
                >
                    <span
                        style={{
                            width: 4,
                            height: 28,
                            background: 'linear-gradient(135deg, var(--accent), var(--accent-2))',
                            borderRadius: 4,
                            display: 'inline-block',
                        }}
                    />
                    Education
                </motion.h2>
                {education.map((edu, i) => (
                    <motion.div key={i} {...fadeUp(i * 0.1)}>
                        <div
                            className="glass"
                            style={{
                                padding: '1.5rem 1.75rem',
                                display: 'flex',
                                flexWrap: 'wrap',
                                justifyContent: 'space-between',
                                alignItems: 'center',
                                gap: '1rem',
                            }}
                        >
                            <div style={{ display: 'flex', alignItems: 'center', gap: '0.9rem', minWidth: 0 }}>
                                <OrganizationLogo name={edu.institution} />
                                <div style={{ minWidth: 0 }}>
                                    <h3 style={{ fontWeight: 700, fontSize: '1.1rem', marginBottom: '0.3rem' }}>{edu.degree}</h3>
                                    <p style={{ color: 'var(--accent)', fontWeight: 600, fontSize: '0.95rem' }}>{edu.institution}</p>
                                    <p style={{ color: 'var(--text-muted)', fontSize: '0.88rem', marginTop: '0.25rem' }}>{edu.period}</p>
                                </div>
                            </div>
                            <div
                                style={{
                                    textAlign: 'center',
                                    background: 'linear-gradient(135deg, var(--accent), var(--accent-2))',
                                    borderRadius: '1rem',
                                    padding: '0.75rem 1.5rem',
                                    color: '#fff',
                                }}
                            >
                                <div style={{ fontSize: '1.8rem', fontWeight: 900, lineHeight: 1 }}>{edu.gpa.split(' ')[0]}</div>
                                <div style={{ fontSize: '0.78rem', opacity: 0.85, marginTop: 2 }}>GPA</div>
                            </div>
                        </div>
                    </motion.div>
                ))}
            </section>

            {/* ── Skills ── */}
            <section style={{ marginBottom: '4rem' }}>
                <motion.h2
                    {...fadeUp(0.05)}
                    style={{
                        fontSize: '1.5rem',
                        fontWeight: 800,
                        marginBottom: '1.5rem',
                        display: 'flex',
                        alignItems: 'center',
                        gap: '0.6rem',
                    }}
                >
                    <span
                        style={{
                            width: 4,
                            height: 28,
                            background: 'linear-gradient(135deg, var(--accent), var(--accent-2))',
                            borderRadius: 4,
                            display: 'inline-block',
                        }}
                    />
                    Skills
                </motion.h2>

                <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fill, minmax(100px, 1fr))', gap: '0.85rem' }}>
                    {allSkills.map((skill, i) => (
                        <motion.div
                            key={skill}
                            {...fadeUp(i * 0.03)}
                            whileHover={{ y: -5, scale: 1.05 }}
                            className="glass"
                            style={{
                                padding: '1.1rem 0.5rem',
                                display: 'flex',
                                flexDirection: 'column',
                                alignItems: 'center',
                                gap: '0.6rem',
                                cursor: 'default',
                            }}
                        >
                            {/* Dark icon box */}
                            <div
                                style={{
                                    width: 52,
                                    height: 52,
                                    borderRadius: 14,
                                    background: '#0f1020',
                                    border: '1px solid rgba(255,255,255,0.06)',
                                    display: 'flex',
                                    alignItems: 'center',
                                    justifyContent: 'center',
                                    flexShrink: 0,
                                }}
                            >
                                {SKILL_ICONS[skill] ? (
                                    <img src={SKILL_ICONS[skill]} width={32} height={32} alt={skill} style={{ objectFit: 'contain' }} />
                                ) : (
                                    <span style={{ fontSize: '0.7rem', fontWeight: 800, color: 'var(--accent)' }}>
                                        {skill.slice(0, 2).toUpperCase()}
                                    </span>
                                )}
                            </div>
                            <span
                                style={{
                                    fontSize: '0.72rem',
                                    fontWeight: 600,
                                    color: 'var(--text-secondary)',
                                    textAlign: 'center',
                                    lineHeight: 1.3,
                                }}
                            >
                                {skill}
                            </span>
                        </motion.div>
                    ))}
                </div>
            </section>

            {/* ── Certificates ── */}
            <section>
                <motion.h2
                    {...fadeUp(0.05)}
                    style={{
                        fontSize: '1.5rem',
                        fontWeight: 800,
                        marginBottom: '1.5rem',
                        display: 'flex',
                        alignItems: 'center',
                        gap: '0.6rem',
                    }}
                >
                    <span
                        style={{
                            width: 4,
                            height: 28,
                            background: 'linear-gradient(135deg, var(--accent), var(--accent-2))',
                            borderRadius: 4,
                            display: 'inline-block',
                        }}
                    />
                    Certificates
                </motion.h2>

                <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fill, minmax(270px, 1fr))', gap: '1rem' }}>
                    {certificates.map((cert, i) => (
                        <motion.a
                            key={i}
                            href={cert.link || undefined}
                            {...fadeUp(i * 0.04)}
                            whileHover={{ y: -4, scale: 1.02 }}
                            className="glass"
                            style={{
                                padding: '1.1rem 1.25rem',
                                display: 'flex',
                                alignItems: 'center',
                                gap: '0.9rem',
                                textDecoration: 'none',
                                cursor: cert.link ? 'pointer' : 'default',
                            }}
                        >
                            <IssuerBadge issuer={cert.issuer} />
                            <div style={{ overflow: 'hidden', flex: 1 }}>
                                <p style={{ fontWeight: 600, fontSize: '0.88rem', lineHeight: 1.4, marginBottom: '0.25rem' }}>
                                    {cert.name}
                                </p>
                                <p
                                    style={{
                                        color: 'var(--accent)',
                                        fontSize: '0.78rem',
                                        fontWeight: 500,
                                        whiteSpace: 'nowrap',
                                        overflow: 'hidden',
                                        textOverflow: 'ellipsis',
                                    }}
                                >
                                    {cert.issuer}
                                </p>
                            </div>
                            {cert.link && (
                                <svg width="13" height="13" viewBox="0 0 24 24" fill="none" stroke="var(--accent)" strokeWidth="2.5" style={{ flexShrink: 0, opacity: 0.55 }}>
                                    <path d="M18 13v6a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V8a2 2 0 0 1 2-2h6"/>
                                    <polyline points="15 3 21 3 21 9"/>
                                    <line x1="10" y1="14" x2="21" y2="3"/>
                                </svg>
                            )}
                        </motion.a>
                    ))}
                </div>
            </section>
        </div>
    );
}
