import { useState, useEffect } from 'react'
import { Link, useLocation } from 'react-router-dom'
import { useTheme } from '../context/ThemeContext'
import myIcon from '../assets/Icon.jpg'

const navLinks = [
  { to: '/', label: 'Home' },
  { to: '/about', label: 'About' },
  { to: '/projects', label: 'Projects' },
  { to: '/contact', label: 'Contact' },
]

const themes = [
  { key: 'light',  icon: '☀️', label: 'Light' },
  { key: 'dark',   icon: '🌙', label: 'Dark'  },
  { key: 'sepia',  icon: '📜', label: 'Sepia' },
]

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

  useEffect(() => { setMenuOpen(false) }, [pathname])

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
        <div
          className="hidden-mobile"
          style={{
            display: 'flex', gap: '0.2rem',
            background: 'var(--accent-light)',
            borderRadius: 9999,
            padding: '0.25rem',
          }}
        >
          {themes.map(({ key, icon, label }) => (
            <button
              key={key}
              title={label}
              onClick={() => setTheme(key)}
              style={{
                width: 34, height: 34,
                borderRadius: 9999,
                border: 'none',
                cursor: 'pointer',
                fontSize: '1rem',
                background: theme === key
                  ? 'linear-gradient(135deg, var(--accent), var(--accent-2))'
                  : 'transparent',
                transition: 'all 0.2s',
                display: 'flex', alignItems: 'center', justifyContent: 'center',
              }}
            >
              {icon}
            </button>
          ))}
        </div>

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
          <div style={{ display: 'flex', gap: '0.5rem', marginTop: '0.75rem', paddingTop: '0.75rem', borderTop: '1px solid var(--border-card)' }}>
            {themes.map(({ key, icon, label }) => (
              <button
                key={key}
                onClick={() => setTheme(key)}
                style={{
                  flex: 1, padding: '0.5rem', borderRadius: '0.6rem',
                  border: 'none', cursor: 'pointer', fontSize: '0.85rem',
                  background: theme === key
                    ? 'linear-gradient(135deg, var(--accent), var(--accent-2))'
                    : 'var(--accent-light)',
                  color: theme === key ? '#fff' : 'var(--text-secondary)',
                  transition: 'all 0.2s',
                }}
              >
                {icon} {label}
              </button>
            ))}
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
