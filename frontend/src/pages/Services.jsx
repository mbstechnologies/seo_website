import { ArrowRight, ArrowUpRight, CheckCircle2, Search, Sparkles } from 'lucide-react'
import { Link } from 'react-router-dom'
import { PageHero } from '../components'
import { useQuery } from '@tanstack/react-query'
import { fetchServices } from '../api'
import { useState, useMemo } from 'react'
import seoMarketingHero from '../images/seo_marketing_services.jpg'

export default function Services() {
  const query = useQuery({ queryKey: ['services'], queryFn: fetchServices })
  const [searchTerm, setSearchTerm] = useState('')
  const [selectedCategory, setSelectedCategory] = useState('All')

  const categories = [
    'All',
    'Paid Search & Performance Acquisition',
    'On-Page SEO & Search Intent',
    'Off-Page SEO & Authority',
    'Local Search & Google Maps',
    'Architecture & Crawlability',
    'Content & Semantic Search',
    'Scale & Automation',
    'E-Commerce & Shopify/Magento'
  ]

  const filteredServices = useMemo(() => {
    if (!query.data) return []
    return query.data.filter((s) => {
      const matchesSearch =
        s.title.toLowerCase().includes(searchTerm.toLowerCase()) ||
        s.description.toLowerCase().includes(searchTerm.toLowerCase()) ||
        s.category.toLowerCase().includes(searchTerm.toLowerCase())
      const matchesCategory = selectedCategory === 'All' || s.category === selectedCategory
      return matchesSearch && matchesCategory
    })
  }, [query.data, searchTerm, selectedCategory])

  return (
    <>
      <PageHero
        eyebrow="Capabilities & Systems"
        title={<>Integrated SEO & Digital Marketing Solutions Built for <em>Compounding Returns.</em></>}
        rightVisual={
          <div className="services-hero-visual-card">
            <img
              src={seoMarketingHero}
              alt="SEO & Digital Marketing Ecosystem"
              loading="eager"
            />
          </div>
        }
      >
        We do not sell isolated blog posts or vanity clicks. We engineer integrated growth systems combining Enterprise Technical SEO, high-intent On-Page optimization, Tier-1 Off-Page digital PR, Local SEO dominance, and high-ROAS PPC performance marketing.
      </PageHero>

      <main>
        {/* FILTER & SEARCH BAR */}
        <section className="shell filter-section">
          <div className="filter-controls-row">
            <div className="search-input-pill">
              <Search size={16} className="search-icon" />
              <input
                type="text"
                placeholder="Search capabilities (e.g. Core Web Vitals, Shopify, SGE, Schema)..."
                value={searchTerm}
                onChange={(e) => setSearchTerm(e.target.value)}
              />
              {searchTerm && (
                <button className="clear-btn" onClick={() => setSearchTerm('')}>✕</button>
              )}
            </div>

            <div className="category-chips-list">
              {categories.map((cat) => (
                <button
                  key={cat}
                  className={`chip-btn ${selectedCategory === cat ? 'active-chip' : ''}`}
                  onClick={() => setSelectedCategory(cat)}
                >
                  {cat}
                </button>
              ))}
            </div>
          </div>
        </section>

        {/* SERVICES GRID */}
        <section className="section shell">
          {filteredServices.length === 0 ? (
            <div className="empty-panel">
              No services match your filter criteria. Try clearing search keywords.
            </div>
          ) : (
            <div className="detailed-services-grid">
              {filteredServices.map((service, index) => (
                <article className="service-detail-card" key={service.id}>
                  <div className="service-card-header">
                    <span className="service-tag">{service.category}</span>
                  </div>

                  {service.image && (
                    <div className="service-card-thumbnail-wrap">
                      <img src={service.image} alt={service.title} className="service-card-thumbnail" loading="lazy" />
                    </div>
                  )}

                  <h2 className="service-card-title">{service.title}</h2>
                  <p className="service-card-desc">{service.description}</p>

                  <div className="service-card-impact">
                    <span className="impact-kicker">Expected Impact</span>
                    <div className="impact-metrics-row">
                      {service.impactMetrics?.map((m, mIdx) => (
                        <div key={mIdx} className="impact-metric-pill">
                          <strong>{m.value}</strong>
                          <span>{m.label}</span>
                        </div>
                      ))}
                    </div>
                  </div>

                  <div className="service-deliverables-box">
                    <span className="deliverables-heading">Core Deliverables Included:</span>
                    <ul className="deliverables-checklist">
                      {service.deliverables?.slice(0, 3).map((item, dIdx) => (
                        <li key={dIdx}>
                          <CheckCircle2 size={14} className="check-icon" />
                          <span>{item}</span>
                        </li>
                      ))}
                    </ul>
                  </div>

                  {service.tools && (
                    <div className="service-tools-row">
                      <span className="tools-label">Stack:</span>
                      {service.tools.map((t) => (
                        <span key={t} className="tool-badge">{t}</span>
                      ))}
                    </div>
                  )}

                  <div className="service-action-row">
                    <Link to={`/services/${service.slug || service.id}`} className="button button-lime">
                      Explore Full Blueprint <ArrowUpRight size={15} />
                    </Link>
                    <Link to="/contact" className="text-link">
                      Book Consultation <ArrowRight size={14} />
                    </Link>
                  </div>
                </article>
              ))}
            </div>
          )}
        </section>

        {/* THE INTEGRATED ADVANTAGE */}
        <section className="dark-band">
          <div className="shell">
            <div className="section-heading dark-heading">
              <div>
                <p className="kicker">The Flywheel Effect</p>
                <h2>Why our services work as a <em>single system.</em></h2>
              </div>
            </div>

            <div className="flywheel-grid">
              <div className="flywheel-card">
                <h3>1. Technical & On-Page SEO</h3>
                <p>Flawless crawl accessibility, sub-second hydration, optimized meta graphs, and structured JSON-LD entity schema.</p>
              </div>
              <div className="flywheel-card">
                <h3>2. High-ROAS PPC & Ads</h3>
                <p>Laser-targeted Google Search, PMax, and Meta campaigns with negative keyword algorithms that cut wasted spend and lower CAC.</p>
              </div>
              <div className="flywheel-card">
                <h3>3. Off-Page & Local Dominance</h3>
                <p>Data journalism yielding DR 75+ editorial backlinks combined with Google Maps 3-Pack and multi-location geo-grid dominance.</p>
              </div>
              <div className="flywheel-card">
                <h3>4. Inbound Conversion & Attribution</h3>
                <p>Search traffic without bottom-line pipeline is vanity. We engineer CRO landing pages and unified Looker Studio closed-revenue dashboards.</p>
              </div>
            </div>
          </div>
        </section>

        {/* BOTTOM AUDIT CTA */}
        <section className="final-cta shell">
          <div>
            <p className="kicker">Confidential Diagnostic</p>
            <h2>Unsure which service will move the <em>needle fastest?</em></h2>
            <p className="final-cta-desc">
              Request our 80-point audit. A senior search strategist will review your technical stack, competitor keyword gaps, and recommend an exact prioritized sprint plan.
            </p>
          </div>
          <Link to="/contact" className="button button-lime">
            Request Free Diagnostic <ArrowUpRight size={16} />
          </Link>
        </section>
      </main>
    </>
  )
}
