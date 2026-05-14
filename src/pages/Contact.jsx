import { useState } from 'react';
import { motion } from 'framer-motion';
import emailjs from '@emailjs/browser';
import { personalInfo } from '../data/resumeData';

// ── Fill these in from your EmailJS dashboard ──
const EMAILJS_SERVICE_ID = 'service_a0ipnkl';
const EMAILJS_TEMPLATE_ID = 'template_yr3hjvj';
const EMAILJS_PUBLIC_KEY = 'CFa0aIm1ZCaW5n1Oh';

const contactItems = [
    {
        icon: (
            <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                <path d="M4 4h16c1.1 0 2 .9 2 2v12c0 1.1-.9 2-2 2H4c-1.1 0-2-.9-2-2V6c0-1.1.9-2 2-2z" />
                <polyline points="22,6 12,13 2,6" />
            </svg>
        ),
        label: 'Email',
        value: personalInfo.email,
        href: `mailto:${personalInfo.email}`,
    },
    {
        icon: (
            <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                <path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07A19.5 19.5 0 0 1 4.69 13.6 19.79 19.79 0 0 1 1.61 5 2 2 0 0 1 3.6 2.77h3a2 2 0 0 1 2 1.72 12.84 12.84 0 0 0 .7 2.81 2 2 0 0 1-.45 2.11L7.91 10a16 16 0 0 0 6 6l.92-.92a2 2 0 0 1 2.11-.45 12.84 12.84 0 0 0 2.81.7A2 2 0 0 1 22 16.92z" />
            </svg>
        ),
        label: 'Phone',
        value: personalInfo.phone,
        href: `tel:${personalInfo.phone}`,
    },
    {
        icon: (
            <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                <path d="M21 10c0 7-9 13-9 13s-9-6-9-13a9 9 0 0 1 18 0z" />
                <circle cx="12" cy="10" r="3" />
            </svg>
        ),
        label: 'Location',
        value: personalInfo.location,
        href: null,
    },
    {
        icon: (
            <svg width="22" height="22" viewBox="0 0 24 24" fill="currentColor">
                <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433a2.062 2.062 0 0 1-2.063-2.065 2.064 2.064 0 1 1 2.063 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z" />
            </svg>
        ),
        label: 'LinkedIn',
        value: 'ridham-patel-141517279',
        href: personalInfo.linkedin,
    },
    {
        icon: (
            <svg width="22" height="22" viewBox="0 0 24 24" fill="currentColor">
                <path d="M12 .297c-6.63 0-12 5.373-12 12 0 5.303 3.438 9.8 8.205 11.385.6.113.82-.258.82-.577 0-.285-.01-1.04-.015-2.04-3.338.724-4.042-1.61-4.042-1.61C4.422 18.07 3.633 17.7 3.633 17.7c-1.087-.744.084-.729.084-.729 1.205.084 1.838 1.236 1.838 1.236 1.07 1.835 2.809 1.305 3.495.998.108-.776.417-1.305.76-1.605-2.665-.3-5.466-1.332-5.466-5.93 0-1.31.465-2.38 1.235-3.22-.135-.303-.54-1.523.105-3.176 0 0 1.005-.322 3.3 1.23.96-.267 1.98-.399 3-.405 1.02.006 2.04.138 3 .405 2.28-1.552 3.285-1.23 3.285-1.23.645 1.653.24 2.873.12 3.176.765.84 1.23 1.91 1.23 3.22 0 4.61-2.805 5.625-5.475 5.92.42.36.81 1.096.81 2.22 0 1.606-.015 2.896-.015 3.286 0 .315.21.69.825.57C20.565 22.092 24 17.592 24 12.297c0-6.627-5.373-12-12-12" />
            </svg>
        ),
        label: 'GitHub',
        value: 'ridham44',
        href: personalInfo.github,
    },
];

export default function Contact() {
    const [form, setForm] = useState({ name: '', email: '', subject: '', message: '' });
    const [status, setStatus] = useState('idle'); // idle | sending | sent | error

    const handleChange = (e) => setForm((f) => ({ ...f, [e.target.name]: e.target.value }));

    const handleSubmit = async (e) => {
        e.preventDefault();
        setStatus('sending');
        try {
            await emailjs.send(
                EMAILJS_SERVICE_ID,
                EMAILJS_TEMPLATE_ID,
                {
                    from_name: form.name,
                    from_email: form.email,
                    subject: form.subject,
                    message: form.message,
                    to_name: 'Ridham',
                },
                EMAILJS_PUBLIC_KEY,
            );
            setStatus('sent');
            setForm({ name: '', email: '', subject: '', message: '' });
        } catch {
            setStatus('error');
        }
    };

    return (
        <div className="page-container">
            {/* Header */}
            <motion.div initial={{ opacity: 0, y: 24 }} animate={{ opacity: 1, y: 0 }} style={{ marginBottom: '3rem' }}>
                <h1 className="section-title">
                    Get In <span className="gradient-text">Touch</span>
                </h1>
                <p className="section-subtitle">Always open to exciting projects, collaborations, and meaningful conversations.</p>
            </motion.div>

            <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(280px, 1fr))', gap: '2rem' }}>
                {/* ── Contact info ── */}
                <div>
                    <motion.h2
                        initial={{ opacity: 0 }}
                        whileInView={{ opacity: 1 }}
                        viewport={{ once: true }}
                        style={{ fontSize: '1.2rem', fontWeight: 700, marginBottom: '1.25rem', color: 'var(--text-secondary)' }}
                    >
                        Contact Details
                    </motion.h2>

                    <div style={{ display: 'flex', flexDirection: 'column', gap: '0.85rem' }}>
                        {contactItems.map(({ icon, label, value, href }, i) => (
                            <motion.div
                                key={label}
                                initial={{ opacity: 0, x: -20 }}
                                whileInView={{ opacity: 1, x: 0 }}
                                viewport={{ once: true }}
                                transition={{ delay: i * 0.08 }}
                                whileHover={{ x: 4 }}
                                className="glass"
                                style={{ padding: '1rem 1.25rem', display: 'flex', alignItems: 'center', gap: '1rem' }}
                            >
                                <div
                                    style={{
                                        width: 44,
                                        height: 44,
                                        borderRadius: '0.75rem',
                                        flexShrink: 0,
                                        background: 'var(--accent-light)',
                                        color: 'var(--accent)',
                                        display: 'flex',
                                        alignItems: 'center',
                                        justifyContent: 'center',
                                    }}
                                >
                                    {icon}
                                </div>
                                <div style={{ overflow: 'hidden' }}>
                                    <p style={{ fontSize: '0.75rem', color: 'var(--text-muted)', fontWeight: 500, marginBottom: 2 }}>
                                        {label}
                                    </p>
                                    {href ? (
                                        <a
                                            href={href}
                                            target={href.startsWith('http') ? '_blank' : undefined}
                                            rel="noopener noreferrer"
                                            style={{ fontSize: '0.9rem', fontWeight: 500, color: 'var(--accent)', wordBreak: 'break-all' }}
                                        >
                                            {value}
                                        </a>
                                    ) : (
                                        <p style={{ fontSize: '0.9rem', fontWeight: 500, wordBreak: 'break-all' }}>{value}</p>
                                    )}
                                </div>
                            </motion.div>
                        ))}
                    </div>
                </div>

                {/* ── Contact form ── */}
                <motion.div
                    initial={{ opacity: 0, y: 24 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: 0.15 }}
                    className="glass"
                    style={{ padding: '2rem' }}
                >
                    <h2 style={{ fontSize: '1.2rem', fontWeight: 700, marginBottom: '1.5rem' }}>Send a Message</h2>

                    {status === 'sent' ? (
                        <motion.div
                            initial={{ opacity: 0, scale: 0.9 }}
                            animate={{ opacity: 1, scale: 1 }}
                            style={{ textAlign: 'center', padding: '2rem 0' }}
                        >
                            <div style={{ fontSize: '3rem', marginBottom: '0.75rem' }}>🎉</div>
                            <p style={{ fontWeight: 700, fontSize: '1.1rem', marginBottom: '0.4rem' }}>Message Sent!</p>
                            <p style={{ color: 'var(--text-secondary)', fontSize: '0.9rem', marginBottom: '1.5rem' }}>
                                Thanks for reaching out. I'll get back to you soon.
                            </p>
                            <button className="btn-outline" onClick={() => setStatus('idle')} style={{ fontSize: '0.85rem' }}>
                                Send Another
                            </button>
                        </motion.div>
                    ) : (
                        <form onSubmit={handleSubmit} style={{ display: 'flex', flexDirection: 'column', gap: '1rem' }}>
                            <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '1rem' }}>
                                <div>
                                    <label
                                        style={{
                                            display: 'block',
                                            fontSize: '0.82rem',
                                            fontWeight: 600,
                                            color: 'var(--text-secondary)',
                                            marginBottom: '0.4rem',
                                        }}
                                    >
                                        Name
                                    </label>
                                    <input
                                        className="form-input"
                                        type="text"
                                        name="name"
                                        placeholder="Your name"
                                        value={form.name}
                                        onChange={handleChange}
                                        required
                                    />
                                </div>
                                <div>
                                    <label
                                        style={{
                                            display: 'block',
                                            fontSize: '0.82rem',
                                            fontWeight: 600,
                                            color: 'var(--text-secondary)',
                                            marginBottom: '0.4rem',
                                        }}
                                    >
                                        Email
                                    </label>
                                    <input
                                        className="form-input"
                                        type="email"
                                        name="email"
                                        placeholder="you@email.com"
                                        value={form.email}
                                        onChange={handleChange}
                                        required
                                    />
                                </div>
                            </div>

                            <div>
                                <label
                                    style={{
                                        display: 'block',
                                        fontSize: '0.82rem',
                                        fontWeight: 600,
                                        color: 'var(--text-secondary)',
                                        marginBottom: '0.4rem',
                                    }}
                                >
                                    Subject
                                </label>
                                <input
                                    className="form-input"
                                    type="text"
                                    name="subject"
                                    placeholder="What's this about?"
                                    value={form.subject}
                                    onChange={handleChange}
                                    required
                                />
                            </div>

                            <div>
                                <label
                                    style={{
                                        display: 'block',
                                        fontSize: '0.82rem',
                                        fontWeight: 600,
                                        color: 'var(--text-secondary)',
                                        marginBottom: '0.4rem',
                                    }}
                                >
                                    Message
                                </label>
                                <textarea
                                    className="form-input"
                                    name="message"
                                    placeholder="Your message..."
                                    rows={5}
                                    value={form.message}
                                    onChange={handleChange}
                                    required
                                    style={{ resize: 'vertical' }}
                                />
                            </div>

                            {status === 'error' && (
                                <p style={{ color: '#f87171', fontSize: '0.85rem', textAlign: 'center' }}>
                                    Something went wrong. Please try again.
                                </p>
                            )}
                            <button
                                type="submit"
                                className="btn-accent"
                                disabled={status === 'sending'}
                                style={{ justifyContent: 'center', marginTop: '0.25rem', opacity: status === 'sending' ? 0.7 : 1 }}
                            >
                                {status === 'sending' ? (
                                    <>
                                        <svg
                                            width="16"
                                            height="16"
                                            viewBox="0 0 24 24"
                                            fill="none"
                                            stroke="currentColor"
                                            strokeWidth="2.5"
                                            style={{ animation: 'spin 1s linear infinite' }}
                                        >
                                            <path d="M21 12a9 9 0 1 1-6.219-8.56" />
                                        </svg>
                                        Sending…
                                    </>
                                ) : (
                                    <>
                                        <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5">
                                            <line x1="22" y1="2" x2="11" y2="13" />
                                            <polygon points="22 2 15 22 11 13 2 9 22 2" />
                                        </svg>
                                        Send Message
                                    </>
                                )}
                            </button>
                            <style>{`@keyframes spin { to { transform: rotate(360deg); } }`}</style>
                        </form>
                    )}
                </motion.div>
            </div>
        </div>
    );
}
