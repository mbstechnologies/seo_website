import { Facebook, Instagram, Linkedin, Youtube, ArrowUpRight, Mail, Phone, MapPin, ShieldCheck } from 'lucide-react'
import { Link } from 'react-router-dom'
import { useQuery } from '@tanstack/react-query'
import { fetchServices, fetchSiteSettings } from '../../api'

export default function Footer() {
  const settings = useQuery({ queryKey: ['settings'], queryFn: fetchSiteSettings, retry: false })
  const services = useQuery({ queryKey: ['services'], queryFn: fetchServices, retry: false })
  const details = settings.data ?? {}

  const icons = {
    instagram: Instagram,
    linkedin: Linkedin,
    facebook: Facebook,
    youtube: Youtube
  }

  return (
    <footer className="detailed-footer">
      <div className="shell footer-top-row">
        <div className="footer-headline-block">
          <p className="kicker">Ready for compounding search revenue?</p>
          <h2>Stop buying clicks you don't own. <em>Build search equity.</em></h2>
        </div>
        <div className="footer-cta-action">
          <Link to="/contact" className="button button-lime">
            Request Confidential Audit <ArrowUpRight size={16} />
          </Link>
        </div>
      </div>

      <div className="shell footer-grid">
        <div className="footer-identity">
          <div className="brand">
            <span className="brand-mark">◒</span> northstar<span className="brand-dot">.</span>
          </div>
          <p className="footer-lead">
            {details.description || 'Independent SEO, PPC & full-funnel digital marketing studio helping tech brands, e-commerce platforms, and multi-location enterprises turn search visibility and performance ads into compounding revenue.'}
          </p>
          <div className="footer-badge-list">
            <span className="badge-pill"><ShieldCheck size={13} /> 100% White-Hat Verified</span>
            <span className="badge-pill">Zero Lock-In Retainers</span>
            <span className="badge-pill">Google Premier Partner</span>
          </div>
        </div>

        <div>
          <h4>Services</h4>
          <div className="footer-links">
            {services.data?.map((item) => (
              <Link key={item.id} to={`/services/${item.slug || item.id}`}>
                {item.title}
              </Link>
            )) || <span className="footer-muted">Loading services…</span>}
          </div>
        </div>

        <div>
          <h4>Company</h4>
          <div className="footer-links">
            <Link to="/about">About & Growth Squad</Link>
            <Link to="/packages">Pricing & Packages</Link>
            <Link to="/case-studies">Verified Case Studies</Link>
            <Link to="/blog">Search Intelligence Journal</Link>
            <Link to="/contact">Get Free 80-Pt Audit</Link>
          </div>
        </div>

        <div>
          <h4>Direct Contact</h4>
          <div className="footer-links contact-meta">
            <a href={`mailto:${details.email || 'growth@northstarseo.com'}`} className="contact-link">
              <Mail size={14} /> {details.email || 'growth@northstarseo.com'}
            </a>
            <a href={`tel:${details.phone || '+9101148923100'}`} className="contact-link">
              <Phone size={14} /> {details.phone || '+91 (011) 4892-3100'}
            </a>
            <div className="contact-address">
              <MapPin size={14} />
              <span>{details.address || 'Cyber Park Tech Enclave, Gurugram, NCR Delhi 122002'}</span>
            </div>
            <span className="hours-note">
              Hours: {details.businessHours || 'Mon – Fri, 9:30 AM – 6:30 PM IST'}
            </span>
          </div>
        </div>

        <div>
          <h4>Network</h4>
          <p className="footer-subtext">Follow algorithmic updates and quarterly research benchmarks.</p>
          <div className="social-links">
            {Object.entries(details.socials ?? {}).map(([name, url]) => {
              const Icon = icons[name] || Linkedin
              return (
                <a key={name} href={url} target="_blank" rel="noreferrer" aria-label={name}>
                  <Icon size={16} />
                </a>
              )
            })}
          </div>
        </div>
      </div>

      <div className="shell footer-bottom">
        <span>© {new Date().getFullYear()} {details.companyName || 'Northstar Growth Studio'}. All rights reserved.</span>
        <div className="footer-bottom-links">
          <Link to="/privacy-policy">Privacy Policy</Link>
          <span>·</span>
          <Link to="/terms">Terms of Service</Link>
          <span>·</span>
          <Link to="/contact">Report Vulnerability</Link>
        </div>
      </div>
    </footer>
  )
}
