import { Link } from 'react-router-dom'
import PageHero from '../components/shared/PageHero'
import { ArrowLeft, ArrowUpRight, Search, Compass } from 'lucide-react'

export default function NotFound() {
  return (
    <>
      <PageHero
        eyebrow="404 Signal Lost"
        title={<>This URL is not in our <em>search index.</em></>}
      >
        The page you are looking for has either been moved, canonicalized to another address, or never existed in the first place.
      </PageHero>

      <main className="section shell notfound-container">
        <div className="notfound-card">
          <div className="notfound-icon-wrap">
            <Compass size={48} className="compass-icon" />
          </div>
          <h2>Let's redirect you back to high-intent territory</h2>
          <p>Explore our most popular resources or return to the main homepage:</p>

          <div className="notfound-links-grid">
            <Link to="/services" className="quick-nav-pill">
              <span>All SEO Services</span>
              <ArrowUpRight size={14} />
            </Link>
            <Link to="/packages" className="quick-nav-pill">
              <span>Pricing & Retainers</span>
              <ArrowUpRight size={14} />
            </Link>
            <Link to="/case-studies" className="quick-nav-pill">
              <span>Verified Case Studies</span>
              <ArrowUpRight size={14} />
            </Link>
            <Link to="/blog" className="quick-nav-pill">
              <span>Search Journal & Guides</span>
              <ArrowUpRight size={14} />
            </Link>
            <Link to="/contact" className="quick-nav-pill">
              <span>Get Free 80-Pt Audit</span>
              <ArrowUpRight size={14} />
            </Link>
          </div>

          <div className="notfound-home-action">
            <Link className="button button-lime" to="/">
              <ArrowLeft size={16} /> Return to Homepage
            </Link>
          </div>
        </div>
      </main>
    </>
  )
}
