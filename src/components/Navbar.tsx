import { useState } from 'react'
import { useNavScroll } from '../hooks'

const links = [
  { href: '#servicos', label: 'Serviços' },
  { href: '#sistemas', label: 'Sistemas' },
  { href: '#processo', label: 'Processo' },
]

export default function Navbar() {
  const scrolled = useNavScroll()
  const [menuOpen, setMenuOpen] = useState(false)

  const close = () => {
    setMenuOpen(false)
    document.body.style.overflow = ''
  }

  const toggle = () => {
    const next = !menuOpen
    setMenuOpen(next)
    document.body.style.overflow = next ? 'hidden' : ''
  }

  return (
    <>
      <header className={`navbar${scrolled ? ' scrolled' : ''}`} id="navbar">
        <div className="container nav-inner">
          {/* Logo */}
          <a href="#hero" className="nav-logo" id="nav-logo" onClick={close}>
            <img src="/logo.jpg" alt="czz tech logo" />
            <span className="nav-logo-text">czz tech</span>
          </a>

          {/* Desktop nav */}
          <nav className="nav-links" aria-label="Menu principal">
            {links.map(l => (
              <a key={l.href} href={l.href}>{l.label}</a>
            ))}
            <a href="#contato" className="nav-cta" id="nav-cta-btn">
              Falar Conosco
            </a>
          </nav>

          {/* Hamburger */}
          <button
            className={`nav-toggle${menuOpen ? ' open' : ''}`}
            id="nav-toggle"
            aria-label="Abrir menu"
            aria-expanded={menuOpen}
            onClick={toggle}
          >
            <span /><span /><span />
          </button>
        </div>
      </header>

      {/* Mobile menu */}
      <nav
        className={`mobile-menu${menuOpen ? ' open' : ''}`}
        aria-label="Menu mobile"
        id="mobile-menu"
      >
        {links.map(l => (
          <a key={l.href} href={l.href} onClick={close}>{l.label}</a>
        ))}
        <a href="#contato" onClick={close} style={{ color: 'var(--blue)', fontWeight: 700 }}>
          Falar Conosco
        </a>
      </nav>
    </>
  )
}
