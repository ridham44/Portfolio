import { motion } from 'framer-motion'
import { Link } from 'react-router-dom'
import { personalInfo } from '../data/resumeData'
import SkillMarquee from '../components/SkillMarquee'
import myProfileImg from '../assets/Myprofileimg.jpg'
import resumePdf from '../assets/RidhamPatelResume.pdf'

const fadeUp = { hidden: { opacity: 0, y: 30 }, show: { opacity: 1, y: 0 } }

export default function Home() {

  return (
    <div>
      {/* ── Hero ── */}
      <section style={{
        position: 'relative', zIndex: 1,
        padding: '7rem 1.5rem 5rem',
      }}>
        <div style={{ maxWidth: 1200, margin: '0 auto', width: '100%' }}>
          <div style={{
            display: 'grid',
            gridTemplateColumns: 'repeat(auto-fit, minmax(300px, 1fr))',
            gap: '3rem', alignItems: 'center',
          }}>
            {/* Text */}
            <motion.div
              variants={{ hidden: {}, show: { transition: { staggerChildren: 0.12 } } }}
              initial="hidden" animate="show"
            >
              <motion.p variants={fadeUp} style={{ color: 'var(--accent)', fontWeight: 600, fontSize: '1rem', marginBottom: '0.6rem', letterSpacing: '0.05em' }}>
                👋 Hi, I'm
              </motion.p>

              <motion.h1 variants={fadeUp} className="gradient-text font-display" style={{
                fontSize: 'clamp(2.8rem, 6vw, 4.5rem)',
                fontWeight: 900, letterSpacing: '-0.02em', lineHeight: 1.05,
                marginBottom: '0.5rem',
              }}>
                {personalInfo.name}
              </motion.h1>

              <motion.p variants={fadeUp} style={{
                fontSize: 'clamp(1rem, 2.2vw, 1.35rem)',
                fontWeight: 500, color: 'var(--text-secondary)',
                marginBottom: '1.2rem', letterSpacing: '-0.01em',
              }}>
                {personalInfo.title}
                <span style={{ display: 'block', fontSize: '0.9em', color: 'var(--text-muted)', marginTop: 4 }}>
                  {personalInfo.subtitle}
                </span>
              </motion.p>

              <motion.p variants={fadeUp} style={{
                color: 'var(--text-secondary)', lineHeight: 1.7,
                maxWidth: 500, marginBottom: '2rem', fontSize: '1rem',
              }}>
                {personalInfo.bio}
              </motion.p>

              {/* CTA buttons */}
              <motion.div variants={fadeUp} style={{ display: 'flex', gap: '1rem', flexWrap: 'wrap', marginBottom: '2rem' }}>
                <Link to="/projects" className="btn-accent">
                  <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5"><path d="M22 11.08V12a10 10 0 1 1-5.93-9.14"/><polyline points="22 4 12 14.01 9 11.01"/></svg>
                 See What I Build
                </Link>
                <Link to="/contact" className="btn-outline">
                  <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5"><path d="M4 4h16c1.1 0 2 .9 2 2v12c0 1.1-.9 2-2 2H4c-1.1 0-2-.9-2-2V6c0-1.1.9-2 2-2z"/><polyline points="22,6 12,13 2,6"/></svg>
                  Let’s Connect
                </Link>
                <a href={resumePdf} download="Ridham-Patel-Resume.pdf" className="btn-accent">
                  <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5"><path d="M21 15v4a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2v-4"/><polyline points="7 10 12 15 17 10"/><line x1="12" y1="15" x2="12" y2="3"/></svg>
                  Download CV
                </a>
              </motion.div>

              {/* Signature */}
              <motion.div variants={fadeUp} style={{ display: 'flex', alignItems: 'center', gap: '0.75rem' }}>
                <div style={{
                  width: 30, height: 30, borderRadius: '50%', flexShrink: 0,
                  background: 'linear-gradient(135deg, var(--accent), var(--accent-2))',
                  display: 'flex', alignItems: 'center', justifyContent: 'center',
                  color: '#fff', fontSize: '0.65rem', fontWeight: 800, letterSpacing: '0.02em',
                }}>RP</div>
                <span style={{ width: 28, height: 1.5, background: 'var(--text-muted)', borderRadius: 2, flexShrink: 0 }} />
                <span style={{
                  fontFamily: "'Playfair Display', Georgia, serif",
                  fontStyle: 'italic', fontWeight: 700,
                  fontSize: '1rem', color: 'var(--text-secondary)',
                  letterSpacing: '0.01em',
                }}>Ridham Patel</span>
              </motion.div>

            </motion.div>

            {/* Profile photo */}
            <motion.div
              initial={{ opacity: 0, scale: 0.85 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.6, delay: 0.2 }}
              style={{ display: 'flex', justifyContent: 'center' }}
            >
              <div style={{ position: 'relative' }}>
                {/* Outer ring */}
                <div style={{
                  width: 300, height: 300,
                  borderRadius: '50%',
                  background: 'linear-gradient(135deg, var(--accent), var(--accent-2))',
                  padding: 4, boxShadow: '0 0 60px rgba(99,102,241,0.35)',
                }}>
                  {/* Photo container */}
                  <div style={{
                    width: '100%', height: '100%', borderRadius: '50%',
                    overflow: 'hidden', background: 'var(--bg-secondary)',
                    display: 'flex', alignItems: 'center', justifyContent: 'center',
                  }}>
                    <img src={myProfileImg} alt="Ridham Patel" style={{width:'100%',height:'100%',objectFit:'cover'}}/>
                    {/* <div style={{
                      width: '100%', height: '100%',
                      background: 'linear-gradient(135deg, var(--accent) 0%, var(--accent-2) 100%)',
                      display: 'flex', flexDirection: 'column',
                      alignItems: 'center', justifyContent: 'center',
                      color: 'rgba(255,255,255,0.95)',
                    }}>
                      <span style={{ fontSize: '5rem', fontWeight: 800, lineHeight: 1 }}>RP</span>
                      <span style={{ fontSize: '0.9rem', fontWeight: 500, opacity: 0.8, marginTop: 8 }}>Ridham Patel</span>
                    </div> */}
                  </div>
                </div>

                {/* Floating badge — status */}
                <motion.div
                  animate={{ y: [0, -8, 0] }}
                  transition={{ duration: 3, repeat: Infinity, ease: 'easeInOut' }}
                  className="glass"
                  style={{
                    position: 'absolute', bottom: 16, left: -20,
                    padding: '0.5rem 1rem', borderRadius: '9999px',
                    display: 'flex', alignItems: 'center', gap: '0.5rem',
                    fontSize: '0.82rem', fontWeight: 600,
                  }}
                >
                  <span style={{ width: 8, height: 8, borderRadius: '50%', background: '#22c55e', display: 'inline-block' }} />
                  Open for Opportunities
                </motion.div>

                {/* Floating badge — GPA */}
                <motion.div
                  animate={{ y: [0, 8, 0] }}
                  transition={{ duration: 3.5, repeat: Infinity, ease: 'easeInOut', delay: 1 }}
                  className="glass"
                  style={{
                    position: 'absolute', top: 20, right: -24,
                    padding: '0.5rem 1rem', borderRadius: '9999px',
                    display: 'flex', alignItems: 'center', gap: '0.5rem',
                    fontSize: '0.82rem', fontWeight: 600,
                  }}
                >
                  🎓  CST Student
                </motion.div>
              </div>
            </motion.div>
          </div>
        </div>

      </section>

      {/* ── Skill marquee ── */}
      <SkillMarquee />
    </div>
  )
}
