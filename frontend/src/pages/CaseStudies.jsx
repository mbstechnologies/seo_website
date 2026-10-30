import { ArrowUpRight, CheckCircle2, TrendingUp, BarChart3, ShieldCheck, Calendar, Building2 } from 'lucide-react'
import { Link } from 'react-router-dom'
import { useQuery } from '@tanstack/react-query'
import { fetchCaseStudies } from '../api'
import PageHero from '../components/shared/PageHero'
import { useState, useMemo } from 'react'
import caseStudiesHeroJpg from '../images/case_studies_proof_hero.jpg'

export default function CaseStudies() {
  const query = useQuery({ queryKey: ['case-studies'], queryFn: fetchCaseStudies })
  const [selectedIndustry, setSelectedIndustry] = useState('All')

  const industries = [
    'All',
    'B2B SaaS / FinTech',
    'Direct-to-Consumer / E-commerce',
    'Healthcare / Multi-Location',
    'Enterprise B2B / Cyber Security'
  ]

  const filteredStudies = useMemo(() => {
    if (!query.data) return []
    if (selectedIndustry === 'All') return query.data
    return query.data.filter((item) => item.industry === selectedIndustry)
  }, [query.data, selectedIndustry])

  return (
    <>
      <PageHero
        eyebrow="Proof & Attribution"
        title={<>Real Companies. <em>Verifiable Search Revenue.</em></>}
        rightVisual={
          <div className="case-studies-hero-visual-card">
            <img
              src={caseStudiesHeroJpg}
              alt="Verified Client Attribution & Growth Architecture"
              loading="eager"
            />
          </div>
        }
      >
        We judge our work by pipeline, revenue, and enterprise valuation—not vanity impressions. Explore how our engineering-first search methodology transformed performance for funded startups and category leaders.
      </PageHero>

      <main>
        {/* AGGREGATE RESULTS BANNER - CLEAN LIGHT EXECUTIVE CARDS */}
        <section className="shell proof-stats-strip">
          <div className="proof-box">
            <div className="proof-indicator-accent" />
            <strong>₹85 Cr+</strong>
            <span>Verified Organic Pipeline</span>
          </div>
          <div className="proof-box">
            <div className="proof-indicator-accent" />
            <strong>+420%</strong>
            <span>Average Organic Traffic Lift</span>
          </div>
          <div className="proof-box">
            <div className="proof-indicator-accent" />
            <strong>94%</strong>
            <span>Annual Client Retainer Retention</span>
          </div>
          <div className="proof-box">
            <div className="proof-indicator-accent" />
            <strong>0 Penalties</strong>
            <span>100% White-Hat Algorithmic Safe</span>
          </div>
        </section>

        {/* INDUSTRY FILTER TABS */}
        <section className="shell case-filter-bar">
          <div className="industry-filter-chips">
            {industries.map((ind) => (
              <button
                type="button"
                key={ind}
                className={`case-chip ${selectedIndustry === ind ? 'active-case-chip' : ''}`}
                onClick={() => setSelectedIndustry(ind)}
              >
                {ind}
              </button>
            ))}
          </div>
        </section>

        {/* CASE STUDIES LIST */}
        <section className="section shell">
          <div className="deep-cases-list">
            {filteredStudies.map((study) => (
              <article className="expanded-case-card" key={study.id}>
                <div className="case-card-layout-grid">
                  {/* Left Column: Narrative & Details */}
                  <div className="case-card-info-col">
                    <div className="case-meta-header">
                      <div className="case-client-pill">
                        <span className="client-badge">
                          <Building2 size={13} className="inline-icon" /> {study.client}
                        </span>
                        <span className="industry-tag">{study.industry}</span>
                      </div>
                      <span className="timeframe-pill">
                        <Calendar size={12} className="inline-icon" /> {study.timeframe}
                      </span>
                    </div>

                    <h2 className="case-title">{study.title}</h2>
                    <p className="case-lead">{study.summary}</p>

                    <div className="case-narrative-split">
                      <div className="narrative-block">
                        <span className="narrative-kicker">The Challenge</span>
                        <p>{study.challenge}</p>
                      </div>
                      <div className="narrative-block">
                        <span className="narrative-kicker">The Execution Blueprint</span>
                        <p>{study.solution}</p>
                      </div>
                    </div>

                    {/* CLIENT TESTIMONIAL QUOTE */}
                    {study.testimonial && (
                      <blockquote className="case-testimonial-block">
                        <p className="quote-text">"{study.testimonial.quote}"</p>
                        <footer className="quote-author">
                          <strong>{study.testimonial.author}</strong>
                          <span>{study.testimonial.role}</span>
                        </footer>
                      </blockquote>
                    )}

                    <div className="case-card-footer">
                      <Link to="/contact" className="button button-lime">
                        Achieve Similar Results <ArrowUpRight size={15} />
                      </Link>
                    </div>
                  </div>

                  {/* Right Column: Visual & Clean Metrics */}
                  <div className="case-card-visual-col">
                    {study.heroImage && (
                      <div className="case-card-image-box">
                        <img
                          src={study.heroImage}
                          alt={study.title}
                          loading="lazy"
                        />
                      </div>
                    )}

                    {/* LIGHT CLEAN RESULTS METRICS */}
                    <div className="case-metric-counters">
                      {study.metrics?.map((m, mIdx) => (
                        <div className="metric-pill-item" key={mIdx}>
                          <strong>{m.value}</strong>
                          <span>{m.label}</span>
                        </div>
                      ))}
                    </div>
                  </div>
                </div>
              </article>
            ))}
          </div>
        </section>

        {/* BOTTOM CTA */}
        <section className="final-cta shell">
          <div>
            <p className="kicker">Ready for your case study?</p>
            <h2>Turn your organic search into a <em>compounding growth engine.</em></h2>
            <p className="final-cta-desc">
              Request an initial technical diagnostic. We’ll analyze your domain’s indexation bottlenecks and project realistic 6-month organic pipeline growth.
            </p>
          </div>
          <Link to="/contact" className="button button-lime">
            Request Custom Diagnostic <ArrowUpRight size={16} />
          </Link>
        </section>
      </main>
    </>
  )
}
