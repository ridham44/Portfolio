import { useState, useEffect } from 'react'
import { Link, useLocation } from 'react-router-dom'
import { useTheme } from '../context/useTheme'
import myIcon from '../assets/Icon.jpg'

const navLinks = [
  { to: '/', label: 'Home' },
  { to: '/about', label: 'About' },
  { to: '/projects', label: 'Projects' },
  { to: '/contact', label: 'Contact' },
]

function ThemeToggle({ theme, setTheme, className = '' }) {
  const isDark = theme === 'dark'
  const nextTheme = isDark ? 'sepia' : 'dark'
  const themeLabel = isDark ? 'Switch to maritime navy' : 'Switch to true midnight'

  return (
    <button
      className={`theme-toggle ${className}`.trim()}
      type="button"
      aria-label={themeLabel}
      title={themeLabel}
      aria-pressed={isDark}
      onClick={() => setTheme(nextTheme)}
      data-active-theme={theme}
    >
      <span className="theme-toggle__track">
        <span className="theme-toggle__icon theme-toggle__icon--sun" aria-hidden="true">
          <svg viewBox="0 0 24 24">
            <circle cx="12" cy="12" r="4.2" />
            <path d="M12 2.7v2.6M12 18.7v2.6M2.7 12h2.6M18.7 12h2.6M5.4 5.4l1.8 1.8M16.8 16.8l1.8 1.8M18.6 5.4l-1.8 1.8M7.2 16.8l-1.8 1.8" />
          </svg>
        </span>
        <span className="theme-toggle__icon theme-toggle__icon--moon" aria-hidden="true">
          <svg viewBox="0 0 24 24">
            <path d="M19.1 14.7A7.1 7.1 0 0 1 9.3 4.9a8.1 8.1 0 1 0 9.8 9.8Z" />
          </svg>
        </span>
        <span className="theme-toggle__thumb" aria-hidden="true" />
      </span>
    </button>
  )
}

export default function Navbar() {
  const { theme, setTheme } = useTheme()
  const { pathname } = useLocation()
  const [scrolled, setScrolled] = useState(false)
  const [menuOpen, setMenuOpen] = useState(false)

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 20)
    window.addEventListener('scroll', onScroll)
    return () => window.removeEventListener('scroll', onScroll)
  }, [])

  return (
    <nav
      className="glass-nav"
      style={{
        position: 'fixed', top: 0, left: 0, right: 0, zIndex: 50,
        transition: 'box-shadow 0.3s',
        boxShadow: scrolled ? '0 4px 24px rgba(0,0,0,0.12)' : 'none',
      }}
    >
      <div style={{ maxWidth: 1200, margin: '0 auto', padding: '0 1.5rem', display: 'flex', alignItems: 'center', height: 64 }}>
        {/* Logo */}
        <Link to='/' style={{ display: 'flex', alignItems: 'center', gap: '0.6rem', fontWeight: 800, fontSize: '1.1rem', letterSpacing: '-0.02em' }}>
          <img src={myIcon} alt="Ridham Patel" style={{
            width: 36, height: 36, borderRadius: '50%', objectFit: 'cover',
            border: '2px solid var(--accent)',
          }} />
          <span className="gradient-text" style={{ display: 'none' }}>Ridham Patel</span>
        </Link>

        {/* Desktop nav links */}
        <div style={{ display: 'flex', gap: '0.25rem', marginLeft: 'auto', marginRight: '1.5rem' }}
          className="hidden-mobile">
          {navLinks.map(({ to, label }) => {
            const active = pathname === to
            return (
              <Link
                key={to} to={to}
                onClick={() => setMenuOpen(false)}
                style={{
                  padding: '0.45rem 1rem',
                  borderRadius: 9999,
                  fontWeight: active ? 600 : 400,
                  fontSize: '0.9rem',
                  color: active ? 'var(--accent)' : 'var(--text-secondary)',
                  background: active ? 'var(--accent-light)' : 'transparent',
                  transition: 'all 0.2s',
                }}
              >
                {label}
              </Link>
            )
          })}
        </div>

        {/* Theme switcher */}
        <ThemeToggle theme={theme} setTheme={setTheme} className="hidden-mobile" />

        {/* Mobile hamburger */}
        <button
          className="show-mobile"
          onClick={() => setMenuOpen(v => !v)}
          style={{
            marginLeft: 'auto', background: 'none', border: 'none',
            cursor: 'pointer', padding: 8, color: 'var(--text-primary)',
          }}
          aria-label="Menu"
        >
          {menuOpen
            ? <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><line x1="18" y1="6" x2="6" y2="18"/><line x1="6" y1="6" x2="18" y2="18"/></svg>
            : <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><line x1="3" y1="6" x2="21" y2="6"/><line x1="3" y1="12" x2="21" y2="12"/><line x1="3" y1="18" x2="21" y2="18"/></svg>
          }
        </button>
      </div>

      {/* Mobile menu */}
      {menuOpen && (
        <div className="glass" style={{
          margin: '0 1rem 1rem',
          padding: '1rem',
          borderRadius: '1rem',
        }}>
          {navLinks.map(({ to, label }) => (
            <Link key={to} to={to}
              onClick={() => setMenuOpen(false)}
              style={{
                display: 'block', padding: '0.65rem 1rem',
                borderRadius: '0.6rem', fontWeight: pathname === to ? 600 : 400,
                color: pathname === to ? 'var(--accent)' : 'var(--text-primary)',
                background: pathname === to ? 'var(--accent-light)' : 'transparent',
                marginBottom: 4,
              }}
            >
              {label}
            </Link>
          ))}
          <div style={{ display: 'flex', justifyContent: 'center', marginTop: '0.75rem', paddingTop: '0.75rem', borderTop: '1px solid var(--border-card)' }}>
            <ThemeToggle theme={theme} setTheme={setTheme} />
          </div>
        </div>
      )}

      <style>{`
        @media (min-width: 768px) { .hidden-mobile { display: flex !important; } .show-mobile { display: none !important; } }
        @media (max-width: 767px) { .hidden-mobile { display: none !important; } .show-mobile { display: flex !important; } }
      `}</style>
    </nav>
  )
}
