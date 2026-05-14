import { skillGroups } from '../data/resumeData'

const skills = skillGroups.flatMap(g => g.skills)
// Duplicate 3× so the strip always looks full at any screen width
const items = [...skills, ...skills, ...skills]

export default function SkillMarquee() {
  return (
    <div style={{
      position: 'relative', zIndex: 1,
      overflow: 'hidden',
      borderTop: '1px solid var(--border-card)',
      borderBottom: '1px solid var(--border-card)',
      background: 'var(--bg-card)',
      backdropFilter: 'blur(14px)',
      WebkitBackdropFilter: 'blur(14px)',
      padding: '0.95rem 0',
    }}>
      {/* Fade edges */}
      <div style={{
        position: 'absolute', left: 0, top: 0, bottom: 0, width: 100, zIndex: 2, pointerEvents: 'none',
        background: 'linear-gradient(to right, var(--bg-primary) 0%, transparent 100%)',
      }} />
      <div style={{
        position: 'absolute', right: 0, top: 0, bottom: 0, width: 100, zIndex: 2, pointerEvents: 'none',
        background: 'linear-gradient(to left, var(--bg-primary) 0%, transparent 100%)',
      }} />

      {/* Scrolling track */}
      <div style={{
        display: 'flex',
        width: 'max-content',
        animation: 'skillScroll 28s linear infinite',
        willChange: 'transform',
      }}>
        {items.map((skill, i) => (
          <span key={i} style={{
            display: 'inline-flex', alignItems: 'center',
            whiteSpace: 'nowrap',
            fontSize: '0.78rem',
            fontWeight: 600,
            letterSpacing: '0.08em',
            textTransform: 'uppercase',
            color: 'var(--text-secondary)',
            padding: '0 0.6rem',
          }}>
            {skill}
            <span style={{
              display: 'inline-block',
              marginLeft: '1.2rem',
              color: 'var(--accent)',
              fontSize: '0.6rem',
              opacity: 0.7,
            }}>✦</span>
          </span>
        ))}
      </div>

      <style>{`
        @keyframes skillScroll {
          0%   { transform: translateX(0); }
          100% { transform: translateX(calc(-100% / 3)); }
        }
      `}</style>
    </div>
  )
}
