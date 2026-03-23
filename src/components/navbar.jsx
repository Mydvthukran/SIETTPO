import { useState } from 'react'
import { Menu, X } from 'lucide-react'
import { GradientButton } from './ui/gradient-button'

const navLinks = [
  { label: 'Home', href: '#' },
  { label: 'Academics', href: '#academics' },
  { label: 'Infrastructure', href: '#infrastructure' },
  { label: 'Gallery', href: '#gallery' },
  { label: 'Contact', href: '#contact' },
]

export function Navbar() {
  const [mobileOpen, setMobileOpen] = useState(false)

  return (
    <header className="navbar">
      <div className="navbar-header">
        <div className="navbar-header-left">
          <img
            src="/images/siet-logo.png"
            alt="SIET Panchkula Logo"
            className="h-12 w-auto object-contain sm:h-16 lg:h-24"
          />
        </div>

        <div className="navbar-header-center">
          <p
            className="text-xs font-bold leading-tight text-foreground sm:text-base lg:text-xl"
            style={{ fontFamily: 'var(--font-tiro)' }}
          >
            {'राज्य अभियांत्रिकी एवं प्रौद्योगिकी संस्थान, पंचकुला'}
          </p>
          <h1
            className="text-xs font-extrabold leading-tight tracking-tight text-foreground sm:text-lg lg:text-2xl"
            style={{ fontFamily: 'var(--font-poppins)', fontWeight: '800' }}
          >
            State Institute of Engineering & Technology, Panchkula
          </h1>
          <p className="mt-0.5 hidden text-xs text-muted-foreground sm:block lg:text-sm">
            Approved by AICTE, New Delhi and Affiliated to Kurukshetra University, Kurukshetra
          </p>
        </div>

        <div className="navbar-header-right">
          <img
            src="/images/haryana-sarkar.png"
            alt="Haryana Government Emblem"
            className="h-12 w-auto object-contain sm:h-16 lg:h-24"
            style={{ maxWidth: '75px' }}
          />
        </div>
      </div>

      <nav className="navbar-nav">
        <a href="#" className="md:hidden">
          <span className="navbar-mobile-label">Training and placement cell</span>
        </a>

        <div className="navbar-links">
          {navLinks.map((link) => (
            <a
              key={link.label}
              href={link.href}
              className="navbar-link"
            >
              {link.label}
            </a>
          ))}
        </div>

        <div className="navbar-buttons">
          <GradientButton className="px-5 py-2.5 text-sm">For Recruiters</GradientButton>
          <GradientButton variant="variant" className="px-5 py-2.5 text-sm">Student Login</GradientButton>
        </div>

        <button
          className="navbar-mobile-toggle"
          onClick={() => setMobileOpen(!mobileOpen)}
          aria-label={mobileOpen ? 'Close menu' : 'Open menu'}
        >
          {mobileOpen ? <X className="h-6 w-6 text-foreground" /> : <Menu className="h-6 w-6 text-foreground" />}
        </button>
      </nav>
    </header>
  )
}
