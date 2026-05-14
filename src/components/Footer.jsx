import { useState, useEffect } from 'react'
import { personalInfo } from '../data/resumeData'

export default function Footer() {
  const [now, setNow] = useState(new Date())

  useEffect(() => {
    const id = setInterval(() => setNow(new Date()), 60000)
    return () => clearInterval(id)
  }, [])

  const date = now.toLocaleDateString('en-IN', {
    weekday: 'long', year: 'numeric', month: 'long', day: 'numeric',
  })

  const time = now.toLocaleTimeString('en-IN', {
    hour: '2-digit', minute: '2-digit', hour12: true,
  })

  return (
    <footer style={{
      position: 'relative', zIndex: 1,
      borderTop: '1px solid var(--border-card)',
      background: 'var(--nav-bg)',
      backdropFilter: 'blur(20px)',
      padding: '1.25rem 1.5rem',
      textAlign: 'center',
    }}>
      <p style={{ color: 'var(--text-muted)', fontSize: '0.85rem', marginBottom: '0.3rem' }}>
        All Rights Reserved &copy; {now.getFullYear()}{' '}
        <span style={{ color: 'var(--accent)', fontWeight: 600 }}>{personalInfo.name}</span>
      </p>
      <p style={{ color: 'var(--text-muted)', fontSize: '0.8rem', fontVariantNumeric: 'tabular-nums' }}>
        {date}
        <span style={{ margin: '0 0.6rem', opacity: 0.4 }}>·</span>
        <span style={{ color: 'var(--accent)', fontWeight: 500 }}>{time}</span>
      </p>
    </footer>
  )
}
