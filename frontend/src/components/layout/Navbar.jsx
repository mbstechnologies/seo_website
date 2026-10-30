import { ArrowUpRight, Menu, Sparkles, X } from 'lucide-react'
import { Link, useLocation } from 'react-router-dom'
import { useState } from 'react'

const links = [
  ['Home', '/'],
  ['Services', '/services'],
  ['Packages', '/packages'],
  ['Case Studies', '/case-studies'],
  ['About & Team', '/about'],
  ['Journal', '/blog'],
  ['Contact', '/contact']
]

export default function Navbar() {
  const [open, setOpen] = useState(false)
  const location = useLocation()

  return (
    <div className="navbar-wrapper">
      <div className="top-announcement-bar">
        <div className="shell announcement-inner">
          <span className="announcement-pill"><Sparkles size={11} /> 2026 Growth Intelligence</span>
          <p className="announcement-text">
            Enterprise SEO, PPC & Performance Marketing playbooks are now open for Q2/Q3 intake.
          </p>
          <Link to="/contact" className="announcement-link">
            Claim Free Growth Audit <ArrowUpRight size={13} />
          </Link>
        </div>
      </div>

      <header className="site-header">
        <Link to="/" className="brand" onClick={() => setOpen(false)}>
          <span className="brand-mark">◒</span> northstar<span className="brand-dot">.</span>
        </Link>

        {/* CENTER ALIGNED NAV LINKS */}
        <nav className={open ? 'nav-links nav-open' : 'nav-links'}>
          {links.map(([label, path]) => {
            const isActive = location.pathname === path || (path !== '/' && location.pathname.startsWith(`${path}/`))
            return (
              <Link
                className={isActive ? 'active-link' : ''}
                key={path}
                to={path}
                onClick={() => setOpen(false)}
              >
                {label}
              </Link>
            )
          })}
          
          {/* Mobile CTA inside drawer */}
          <div className="mobile-cta-wrapper">
            <Link to="/contact" className="nav-cta" onClick={() => setOpen(false)}>
              <span>Get Free Audit</span>
              <span className="cta-icon-wrapper">
                <ArrowUpRight size={13} />
              </span>
            </Link>
          </div>
        </nav>

        {/* RIGHT ACTION BUTTON */}
        <div className="nav-actions">
          <Link to="/contact" className="nav-cta desktop-cta">
            <span>Get Free Audit</span>
            <span className="cta-icon-wrapper">
              <ArrowUpRight size={13} />
            </span>
          </Link>

          <button
            className="menu-toggle"
            onClick={() => setOpen(!open)}
            aria-label={open ? 'Close Menu' : 'Open Menu'}
          >
            {open ? <X size={22} /> : <Menu size={22} />}
          </button>
        </div>
      </header>
    </div>
  )
}
